(function () {
  const globalConfig = window.DICE_MATH_FIREBASE_CONFIG || {};
  const hasFirebaseSdk = Boolean(window.firebase?.initializeApp);
  const hasConfig = Boolean(globalConfig.enabled && globalConfig.config?.apiKey && globalConfig.config?.projectId);
  const roomCodeChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  function createRoomCode() {
    return Array.from({ length: 6 }, () => (
      roomCodeChars[Math.floor(Math.random() * roomCodeChars.length)]
    )).join("");
  }

  function cleanNickname(nickname) {
    return (nickname || "나의 닉네임").trim().slice(0, 10) || "나의 닉네임";
  }

  function requireDatabase(client) {
    if (!client.enabled || !client.database || !client.user) {
      throw Object.assign(new Error("Firebase Database가 아직 준비되지 않았습니다."), { code: "database-not-ready" });
    }
  }

  const client = {
    enabled: false,
    user: null,
    app: null,
    auth: null,
    database: null,
    async init() {
      if (!hasFirebaseSdk || !hasConfig) return { enabled: false, reason: "not-configured" };

      try {
        this.app = window.firebase.apps.length
          ? window.firebase.app()
          : window.firebase.initializeApp(globalConfig.config);
        this.auth = window.firebase.auth();
        this.database = globalConfig.config.databaseURL ? window.firebase.database() : null;
        const credential = await this.auth.signInAnonymously();
        this.user = credential.user;
        this.enabled = true;
        return {
          enabled: true,
          databaseReady: Boolean(this.database),
          reason: this.database ? "ready" : "database-url-missing",
          uid: this.user.uid,
        };
      } catch (error) {
        this.enabled = false;
        console.warn("Firebase 연결 실패:", error);
        return { enabled: false, reason: error.code || "firebase-error" };
      }
    },
    isEnabled() {
      return this.enabled;
    },
    getUid() {
      return this.user?.uid || null;
    },
    getDatabase() {
      return this.database;
    },
    async createRoom({ mode, playerCount, nickname }) {
      requireDatabase(this);

      const uid = this.getUid();
      const now = window.firebase.database.ServerValue.TIMESTAMP;

      for (let attempt = 0; attempt < 14; attempt += 1) {
        const code = createRoomCode();
        const roomRef = this.database.ref(`rooms/${code}`);
        const roomPayload = {
          code,
          mode,
          playerCount,
          phase: "lobby",
          round: 0,
          hostUid: uid,
          autoStartPaused: false,
          createdAt: now,
          updatedAt: now,
          players: {
            [uid]: {
              name: cleanNickname(nickname),
              score: 0,
              status: "준비 전",
              ready: false,
              isHost: true,
              online: true,
              joinedAt: now,
            },
          },
        };

        const result = await roomRef.transaction((currentRoom) => (
          currentRoom === null ? roomPayload : undefined
        ));

        if (result.committed) {
          await this.database.ref(`userRooms/${uid}/${code}`).set({ role: "host", joinedAt: now });
          return { code, room: result.snapshot.val() };
        }
      }

      throw Object.assign(new Error("중복되지 않는 방 코드를 만들지 못했습니다."), { code: "room-code-collision" });
    },
    async joinRoom(code, { nickname }) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const snapshot = await roomRef.once("value");

      if (!snapshot.exists()) {
        throw Object.assign(new Error("방을 찾을 수 없습니다."), { code: "room-not-found" });
      }

      const room = snapshot.val();
      const uid = this.getUid();
      const players = room.players || {};
      const alreadyJoined = Boolean(players[uid]);
      const playerCount = Object.keys(players).length;

      if (!alreadyJoined && playerCount >= Number(room.playerCount || 4)) {
        throw Object.assign(new Error("방이 가득 찼습니다."), { code: "room-full" });
      }

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      await roomRef.child(`players/${uid}`).update({
        name: cleanNickname(nickname),
        score: players[uid]?.score || 0,
        status: "준비 전",
        ready: false,
        isHost: room.hostUid === uid,
        online: true,
        joinedAt: players[uid]?.joinedAt || now,
      });
      await roomRef.update({ updatedAt: now });
      await this.database.ref(`userRooms/${uid}/${normalizedCode}`).set({
        role: room.hostUid === uid ? "host" : "player",
        joinedAt: now,
      });

      const updatedSnapshot = await roomRef.once("value");
      return { code: normalizedCode, room: updatedSnapshot.val() };
    },
    watchRoom(code, callback) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const handler = (snapshot) => callback(snapshot.val());
      roomRef.on("value", handler);
      return () => roomRef.off("value", handler);
    },
    async setReady(code, ready = true) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const now = window.firebase.database.ServerValue.TIMESTAMP;
      await this.database.ref(`rooms/${normalizedCode}/players/${uid}`).update({
        status: ready ? "준비 완료" : "준비 전",
        ready: Boolean(ready),
        readyAt: ready ? now : null,
      });
      await this.database.ref(`rooms/${normalizedCode}`).update({ updatedAt: now });
    },
    async startRound(code, problem) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const snapshot = await roomRef.once("value");

      if (!snapshot.exists()) {
        throw Object.assign(new Error("방을 찾을 수 없습니다."), { code: "room-not-found" });
      }

      const room = snapshot.val();
      const players = room.players || {};
      const currentPlayer = players[uid] || {};
      const isHost = room.hostUid === uid || currentPlayer.isHost === true;

      if (!isHost) {
        throw Object.assign(new Error("방장만 시작할 수 있습니다."), { code: "not-host" });
      }

      const playerEntries = Object.entries(players);
      const allReady = playerEntries.length >= 2 && playerEntries.every(([, player]) => (
        player.ready === true || player.status === "준비 완료"
      ));

      if (!allReady) {
        throw Object.assign(new Error("아직 준비하지 않은 참가자가 있습니다."), { code: "not-all-ready" });
      }

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const playerUpdates = {};
      playerEntries.forEach(([playerUid]) => {
        playerUpdates[`players/${playerUid}/status`] = "풀이중";
        playerUpdates[`players/${playerUid}/ready`] = false;
        playerUpdates[`players/${playerUid}/readyAt`] = null;
      });

      await roomRef.update({
        ...playerUpdates,
        currentProblem: problem || null,
        phase: "playing",
        round: Number(room.round || 0) + 1,
        roundStartedAt: now,
        updatedAt: now,
      });
    },
    async leaveRoom(code) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const snapshot = await roomRef.once("value");

      if (!snapshot.exists()) return { removedRoom: false };

      const room = snapshot.val();
      await this.database.ref(`userRooms/${uid}/${normalizedCode}`).remove();

      const leavingPlayer = room.players?.[uid] || {};
      const isHost = room.hostUid === uid || leavingPlayer.isHost === true;

      if (isHost) {
        await roomRef.remove();
        const deletedSnapshot = await roomRef.once("value");
        return { removedRoom: !deletedSnapshot.exists() };
      }

      await roomRef.child(`players/${uid}`).remove();
      const remainingPlayersSnapshot = await roomRef.child("players").once("value");
      const remainingPlayers = remainingPlayersSnapshot.val() || {};

      if (Object.keys(remainingPlayers).length === 0) {
        await roomRef.remove();
        const deletedSnapshot = await roomRef.once("value");
        return { removedRoom: !deletedSnapshot.exists() };
      }

      await roomRef.update({ updatedAt: window.firebase.database.ServerValue.TIMESTAMP });
      return { removedRoom: false };
    },
  };

  window.diceFirebase = client;
})();
