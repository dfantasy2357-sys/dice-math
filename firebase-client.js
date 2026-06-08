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
    async leaveRoom(code) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const snapshot = await roomRef.once("value");

      if (!snapshot.exists()) return { removedRoom: false };

      const room = snapshot.val();
      await this.database.ref(`userRooms/${uid}/${normalizedCode}`).remove();

      if (room.hostUid === uid) {
        await roomRef.remove();
        return { removedRoom: true };
      }

      await roomRef.child(`players/${uid}`).remove();
      await roomRef.update({ updatedAt: window.firebase.database.ServerValue.TIMESTAMP });
      return { removedRoom: false };
    },
  };

  window.diceFirebase = client;
})();
