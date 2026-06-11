(function () {
  const globalConfig = window.DICE_MATH_FIREBASE_CONFIG || {};
  const hasFirebaseSdk = Boolean(window.firebase?.initializeApp);
  const hasConfig = Boolean(globalConfig.enabled && globalConfig.config?.apiKey && globalConfig.config?.projectId);
  const roomCodeChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const onlineTimeLimitMs = 120000;

  function createRoomCode() {
    return Array.from({ length: 6 }, () => (
      roomCodeChars[Math.floor(Math.random() * roomCodeChars.length)]
    )).join("");
  }

  function createPublicId() {
    return `cnm-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;
  }

  const inactiveUserMaxAgeMs = 30 * 24 * 60 * 60 * 1000;

  function normalizeProfilePayload(profile = {}) {
    const targetScore = Math.min(500, Math.max(100, Number(profile.battleTargetScore || 200)));
    return {
      nickname: cleanNickname(profile.nickname),
      clearCount: Math.max(0, Number(profile.clearCount || 0)),
      claimedSkins: profile.claimedSkins && typeof profile.claimedSkins === "object" ? profile.claimedSkins : { basic: true, classroom: true, box: true },
      selectedSkin: String(profile.selectedSkin || "basic"),
      selectedDifficulty: profile.selectedDifficulty === "power" ? "power" : "basic",
      selectedOnlineDifficulty: profile.selectedOnlineDifficulty === "power" ? "power" : "basic",
      battleTargetScore: [100, 200, 300, 500].includes(targetScore) ? targetScore : 200,
      soundEnabled: profile.soundEnabled !== false,
    };
  }

  function cleanNickname(nickname) {
    const fallback = "나의 닉네임";
    const safeCleaned = String(nickname || fallback).trim().slice(0, 10) || fallback;
    const safeNormalized = safeCleaned
      .normalize("NFKC")
      .replace(/\s+/g, "")
      .replace(/[^\p{L}\p{N}]/gu, "")
      .toLowerCase();
    const safeBannedPatterns = [
      /시발|씨발|ㅅㅂ|병신|ㅂㅅ|개새|개색|좆|존나|지랄|염병/i,
      /꺼져|닥쳐|죽어|자살|살인|테러/i,
      /섹스|보지|자지|애미|느금|니미/i,
      /fuck|shit|sex|bitch|asshole|nigger|nigga/i,
      /admin|관리자|운영자|cnmmath/i,
    ];
    if (!safeNormalized || safeBannedPatterns.some((pattern) => pattern.test(safeNormalized))) {
      return fallback;
    }
    return safeCleaned;

    const cleaned = (nickname || "나의 닉네임").trim().slice(0, 10) || "나의 닉네임";
    const normalized = cleaned
      .replace(/\s+/g, "")
      .replace(/[^\p{L}\p{N}ㄱ-ㅎㅏ-ㅣ가-힣]/gu, "")
      .toLowerCase();
    const bannedPatterns = [
      /씨\s*발/i,
      /시\s*발/i,
      /ㅅ\s*ㅂ/i,
      /병\s*신/i,
      /ㅂ\s*ㅅ/i,
      /개\s*새/i,
      /새\s*끼/i,
      /존\s*나/i,
      /좆/i,
      /fuck/i,
      /shit/i,
      /sex/i,
    ];
    return bannedPatterns.some((pattern) => pattern.test(normalized)) ? "나의 닉네임" : cleaned;
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
    serverTimeOffset: 0,
    async init() {
      if (!hasFirebaseSdk || !hasConfig) return { enabled: false, reason: "not-configured" };

      try {
        this.app = window.firebase.apps.length
          ? window.firebase.app()
          : window.firebase.initializeApp(globalConfig.config);
        this.auth = window.firebase.auth();
        this.database = globalConfig.config.databaseURL ? window.firebase.database() : null;
        if (this.database) {
          this.database.ref(".info/serverTimeOffset").on("value", (snapshot) => {
            this.serverTimeOffset = Number(snapshot.val() || 0);
          });
        }
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
    getServerNow() {
      return Date.now() + Number(this.serverTimeOffset || 0);
    },
    async reservePublicId(uid) {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const publicId = createPublicId();
        const publicRef = this.database.ref(`publicUsers/${publicId}`);
        const result = await publicRef.transaction((current) => (
          current ? current : { uid, createdAt: Date.now(), updatedAt: Date.now() }
        ));
        if (result.committed && result.snapshot.val()?.uid === uid) {
          return publicId;
        }
      }

      throw Object.assign(new Error("사용자 ID를 만들지 못했습니다."), { code: "public-id-failed" });
    },
    async ensureUserProfile(defaultProfile = {}) {
      requireDatabase(this);

      const uid = this.getUid();
      const userRef = this.database.ref(`users/${uid}`);
      const snapshot = await userRef.once("value");
      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const existing = snapshot.val();

      if (existing?.publicId) {
        await this.database.ref(`publicUsers/${existing.publicId}`).transaction((current) => (
          current ? current : { uid, createdAt: Date.now() }
        ));
        await userRef.child("updatedAt").set(now);
        await this.database.ref(`publicUsers/${existing.publicId}`).update({
          uid,
          updatedAt: now,
        });
        return { uid, ...existing, updatedAt: now };
      }

      const publicId = await this.reservePublicId(uid);
      const payload = {
        ...normalizeProfilePayload(existing || defaultProfile),
        publicId,
        createdAt: existing?.createdAt || now,
        updatedAt: now,
      };
      await userRef.update(payload);
      await this.database.ref(`publicUsers/${publicId}`).update({ uid, updatedAt: now });
      return { uid, ...payload };
    },
    async saveUserProfile(profile = {}) {
      requireDatabase(this);

      const uid = this.getUid();
      const payload = {
        ...normalizeProfilePayload(profile),
        updatedAt: window.firebase.database.ServerValue.TIMESTAMP,
      };
      await this.database.ref(`users/${uid}`).update(payload);
      return payload;
    },
    async cleanupInactiveUsers({ maxAgeMs = inactiveUserMaxAgeMs } = {}) {
      requireDatabase(this);

      const uid = this.getUid();
      const cutoff = Date.now() - maxAgeMs;
      const usersSnapshot = await this.database.ref("users").once("value");
      const users = usersSnapshot.val() || {};
      const publicSnapshot = await this.database.ref("publicUsers").once("value");
      const publicUsers = publicSnapshot.val() || {};
      const updates = {};
      let removedCount = 0;

      Object.entries(users).forEach(([userUid, profile]) => {
        if (userUid === uid) return;
        const lastSeenAt = Number(profile?.updatedAt || profile?.createdAt || 0);
        if (lastSeenAt <= 0 || lastSeenAt >= cutoff) return;

        updates[`users/${userUid}`] = null;
        updates[`userRooms/${userUid}`] = null;
        if (profile?.publicId) {
          updates[`publicUsers/${profile.publicId}`] = null;
        }
        removedCount += 1;
      });

      Object.entries(publicUsers).forEach(([publicId, publicUser]) => {
        const publicUid = publicUser?.uid;
        if (publicUid && !users[publicUid]) {
          updates[`publicUsers/${publicId}`] = null;
        }
      });

      if (Object.keys(updates).length > 0) {
        await this.database.ref().update(updates);
      }

      return { removedCount };
    },
    async cleanupUserRooms() {
      requireDatabase(this);

      const uid = this.getUid();
      const snapshot = await this.database.ref(`userRooms/${uid}`).once("value");
      const userRooms = snapshot.val() || {};
      const updates = {};
      let removedCount = 0;

      for (const code of Object.keys(userRooms)) {
        const normalizedCode = String(code || "").trim().toUpperCase();
        const roomSnapshot = await this.database.ref(`rooms/${normalizedCode}`).once("value");
        const room = roomSnapshot.val();
        if (!room || !room.players?.[uid]) {
          updates[`userRooms/${uid}/${normalizedCode}`] = null;
          removedCount += 1;
        }
      }

      if (removedCount > 0) {
        await this.database.ref().update(updates);
      }

      return { removedCount };
    },
    async leaveExistingRooms({ exceptCode = "" } = {}) {
      requireDatabase(this);

      await this.cleanupUserRooms();

      const uid = this.getUid();
      const normalizedExceptCode = String(exceptCode || "").trim().toUpperCase();
      const snapshot = await this.database.ref(`userRooms/${uid}`).once("value");
      const userRooms = snapshot.val() || {};
      let leftCount = 0;

      for (const code of Object.keys(userRooms)) {
        const normalizedCode = String(code || "").trim().toUpperCase();
        if (normalizedCode && normalizedCode !== normalizedExceptCode) {
          await this.leaveRoom(normalizedCode);
          leftCount += 1;
        }
      }

      return { leftCount };
    },
    async createRoom({
      mode,
      playerCount,
      nickname,
      matchmaking = false,
      difficulty = "basic",
      targetScore = 200,
      code: preferredCode = "",
      skipLeaveExistingRooms = false,
    }) {
      requireDatabase(this);

      const uid = this.getUid();
      const now = window.firebase.database.ServerValue.TIMESTAMP;

      if (!skipLeaveExistingRooms) {
        await this.leaveExistingRooms();
      }

      for (let attempt = 0; attempt < 14; attempt += 1) {
        const code = preferredCode || createRoomCode();
        const roomRef = this.database.ref(`rooms/${code}`);
        const roomPayload = {
          code,
          mode,
          playerCount,
          matchmaking: Boolean(matchmaking),
          difficulty: difficulty === "power" ? "power" : "basic",
          targetScore: Math.min(500, Math.max(100, Number(targetScore || 200))),
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
              activeRound: 0,
              waitingNextRound: false,
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

        if (preferredCode) break;
      }

      throw Object.assign(new Error("중복되지 않는 방 코드를 만들지 못했습니다."), { code: "room-code-collision" });
    },
    async findOrCreateMatch({ playerCount, nickname, difficulty = "basic", targetScore = 200 }) {
      requireDatabase(this);

      const size = Number(playerCount || 2);
      const mode = `${size}인 자동매칭`;
      const roomDifficulty = difficulty === "power" ? "power" : "basic";
      const scoreGoal = Math.min(500, Math.max(100, Number(targetScore || 200)));
      const uid = this.getUid();

      await this.cleanupStaleRooms({ soloLobbyMaxAgeMs: 2 * 60 * 1000 });
      await this.leaveExistingRooms();

      for (let attempt = 0; attempt < 5; attempt += 1) {
        const queueRef = this.database.ref(`matchQueues/${size}/${scoreGoal}/${roomDifficulty}`);
        const reservedAt = Date.now();
        const newCode = createRoomCode();
        const result = await queueRef.transaction((queue) => {
          const players = queue?.players || {};
          const joinedPlayers = { ...players, [uid]: true };
          const joinedCount = Object.keys(joinedPlayers).length;

          if (queue?.roomCode
            && Number(queue.playerCount || 0) === size
            && Number(queue.targetScore || scoreGoal) === scoreGoal
            && (queue.difficulty || "basic") === roomDifficulty
            && joinedCount <= size) {
            return {
              ...queue,
              players: joinedPlayers,
              count: joinedCount,
              updatedAt: reservedAt,
            };
          }

          return {
            roomCode: newCode,
            mode,
            playerCount: size,
            difficulty: roomDifficulty,
            targetScore: scoreGoal,
            creatorUid: uid,
            players: { [uid]: true },
            count: 1,
            createdAt: reservedAt,
            updatedAt: reservedAt,
          };
        });

        const queue = result.snapshot.val() || {};
        const code = String(queue.roomCode || "").toUpperCase();
        const isCreator = queue.creatorUid === uid && code === newCode;

        try {
          const matchResult = isCreator
            ? await this.createRoom({
              mode,
              playerCount: size,
              nickname,
              matchmaking: true,
              difficulty: roomDifficulty,
              targetScore: scoreGoal,
              code,
              skipLeaveExistingRooms: true,
            })
            : await this.joinQueuedMatchRoom(code, { nickname });

          const playerTotal = Object.keys(matchResult.room?.players || {}).length;
          if (playerTotal >= size) {
            await queueRef.transaction((currentQueue) => (
              currentQueue?.roomCode === code ? null : currentQueue
            ));
          }

          return matchResult;
        } catch (error) {
          await queueRef.transaction((currentQueue) => (
            currentQueue?.roomCode === code ? null : currentQueue
          ));
          if (attempt === 4) throw error;
        }
      }

      throw Object.assign(new Error("자동매칭 대기방을 만들지 못했습니다."), { code: "matchmaking-failed" });
    },
    async joinQueuedMatchRoom(code, { nickname }) {
      for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
          return await this.joinRoom(code, { nickname, skipLeaveExistingRooms: true });
        } catch (error) {
          if (error.code !== "room-not-found" || attempt === 7) throw error;
          await new Promise((resolve) => setTimeout(resolve, 180));
        }
      }

      throw Object.assign(new Error("자동매칭 방을 찾을 수 없습니다."), { code: "room-not-found" });
    },
    async joinRoom(code, { nickname, skipLeaveExistingRooms = false } = {}) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const snapshot = await roomRef.once("value");

      if (!snapshot.exists()) {
        throw Object.assign(new Error("방을 찾을 수 없습니다."), { code: "room-not-found" });
      }

      const room = snapshot.val();
      const uid = this.getUid();
      if (!skipLeaveExistingRooms) {
        await this.leaveExistingRooms({ exceptCode: normalizedCode });
      }
      const players = room.players || {};
      const alreadyJoined = Boolean(players[uid]);
      const playerCount = Object.keys(players).length;

      if (!alreadyJoined && playerCount >= Number(room.playerCount || 4)) {
        throw Object.assign(new Error("방이 가득 찼습니다."), { code: "room-full" });
      }

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const isWaitingForNextRound = room.phase === "playing" || room.phase === "result";
      await roomRef.child(`players/${uid}`).update({
        name: cleanNickname(nickname),
        score: players[uid]?.score || 0,
        status: isWaitingForNextRound ? "다음 라운드 대기" : "준비 전",
        ready: false,
        isHost: room.hostUid === uid,
        online: true,
        activeRound: isWaitingForNextRound ? Number(room.round || 0) + 1 : Number(room.round || 0),
        waitingNextRound: isWaitingForNextRound,
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
      const isAutoMatch = room.matchmaking === true || String(room.mode || "").includes("자동매칭");
      const isFullAutoMatch = isAutoMatch && playerEntries.length === Number(room.playerCount || playerEntries.length);
      const allReady = isFullAutoMatch || (playerEntries.length >= 2 && playerEntries.every(([, player]) => (
        player.ready === true || player.status === "준비 완료"
      )));

      if (!allReady) {
        throw Object.assign(new Error("아직 준비하지 않은 참가자가 있습니다."), { code: "not-all-ready" });
      }

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const playerUpdates = {};
      const nextRound = Number(room.round || 0) + 1;
      playerEntries.forEach(([playerUid]) => {
        playerUpdates[`players/${playerUid}/status`] = "풀이중";
        playerUpdates[`players/${playerUid}/ready`] = false;
        playerUpdates[`players/${playerUid}/readyAt`] = null;
        playerUpdates[`players/${playerUid}/activeRound`] = nextRound;
        playerUpdates[`players/${playerUid}/waitingNextRound`] = false;
      });

      await roomRef.update({
        ...playerUpdates,
        currentProblem: problem || null,
        submissions: null,
        roundResults: null,
        resultRound: null,
        resultAt: null,
        phase: "playing",
        round: nextRound,
        roundStartedAt: now,
        updatedAt: now,
      });
    },
    async submitAnswer(code, { expression, time }) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      await roomRef.update({
        [`players/${uid}/status`]: "완료",
        [`submissions/${uid}/expression`]: expression,
        [`submissions/${uid}/time`]: Math.max(0, Math.round(Number(time || 0))),
        [`submissions/${uid}/submittedAt`]: now,
        updatedAt: now,
      });
    },
    async submitTimeout(code) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      await roomRef.update({
        [`players/${uid}/status`]: "시간초과",
        [`submissions/${uid}/expression`]: "",
        [`submissions/${uid}/time`]: onlineTimeLimitMs,
        [`submissions/${uid}/timedOut`]: true,
        [`submissions/${uid}/submittedAt`]: now,
        updatedAt: now,
      });
    },
    async submitTimeouts(code, playerIds = []) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const ids = [...new Set(playerIds.map((id) => String(id || "")).filter(Boolean))];
      if (!ids.length) return { updatedCount: 0 };

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const updates = { updatedAt: now };
      ids.forEach((playerUid) => {
        updates[`players/${playerUid}/status`] = "시간초과";
        updates[`submissions/${playerUid}/expression`] = "";
        updates[`submissions/${playerUid}/time`] = onlineTimeLimitMs;
        updates[`submissions/${playerUid}/timedOut`] = true;
        updates[`submissions/${playerUid}/submittedAt`] = now;
      });

      await roomRef.update(updates);
      return { updatedCount: ids.length };
    },
    async finishRound(code, { round, results }) {
      requireDatabase(this);

      const normalizedCode = String(code || "").trim().toUpperCase();
      const uid = this.getUid();
      const roomRef = this.database.ref(`rooms/${normalizedCode}`);
      const normalizedRound = Number(round || 0);
      const resultList = Array.isArray(results) ? results : [];
      const now = Date.now();

      await roomRef.transaction((room) => {
        if (!room) return room;
        const players = room.players || {};
        const currentPlayer = players[uid] || {};
        const isHost = room.hostUid === uid || currentPlayer.isHost === true;
        const roomRound = Number(room.round || 0);

        if (!isHost || roomRound !== normalizedRound) return room;
        if ((room.phase === "result" || room.phase === "final") && Number(room.resultRound || 0) === roomRound) return room;

        const nextPlayers = { ...players };
        resultList.forEach((result) => {
          if (!result?.id || !nextPlayers[result.id]) return;
          nextPlayers[result.id] = {
            ...nextPlayers[result.id],
            score: Number(nextPlayers[result.id].score || 0) + Number(result.points || 0),
            status: result.timedOut ? "시간초과" : "완료",
            ready: false,
          };
        });
        const targetScore = Math.min(500, Math.max(100, Number(room.targetScore || 200)));
        const finalResults = Object.entries(nextPlayers)
          .map(([playerUid, player]) => ({
            id: playerUid,
            name: String(player.name || "이름 없음"),
            score: Number(player.score || 0),
          }))
          .sort((a, b) => b.score - a.score)
          .map((player, index) => ({
            ...player,
            rankLabel: String(index + 1),
          }));
        const isFinal = finalResults.some((player) => player.score >= targetScore);

        return {
          ...room,
          players: nextPlayers,
          targetScore,
          phase: isFinal ? "final" : "result",
          resultRound: roomRound,
          roundResults: resultList.map((result) => ({
            id: String(result.id || ""),
            name: String(result.name || ""),
            expression: String(result.expression || ""),
            time: Math.max(0, Math.round(Number(result.time || 0))),
            timedOut: Boolean(result.timedOut),
            rankLabel: String(result.rankLabel || ""),
            points: Number(result.points || 0),
            timeLabel: String(result.timeLabel || ""),
          })),
          finalResults: isFinal ? finalResults : null,
          resultAt: now,
          updatedAt: now,
        };
      });
    },
    async startNextRound(code, problem) {
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
        throw Object.assign(new Error("방장만 다음 문제를 시작할 수 있습니다."), { code: "not-host" });
      }

      if (room.phase !== "result") {
        throw Object.assign(new Error("아직 다음 문제를 시작할 수 없습니다."), { code: "round-not-finished" });
      }

      const now = window.firebase.database.ServerValue.TIMESTAMP;
      const playerUpdates = {};
      const nextRound = Number(room.round || 0) + 1;
      Object.keys(players).forEach((playerUid) => {
        playerUpdates[`players/${playerUid}/status`] = "풀이중";
        playerUpdates[`players/${playerUid}/ready`] = false;
        playerUpdates[`players/${playerUid}/readyAt`] = null;
        playerUpdates[`players/${playerUid}/activeRound`] = nextRound;
        playerUpdates[`players/${playerUid}/waitingNextRound`] = false;
      });

      await roomRef.update({
        ...playerUpdates,
        currentProblem: problem || null,
        submissions: null,
        roundResults: null,
        resultRound: null,
        resultAt: null,
        phase: "playing",
        round: nextRound,
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

      if (!snapshot.exists()) {
        await this.database.ref(`userRooms/${uid}/${normalizedCode}`).remove();
        return { removedRoom: false };
      }

      const room = snapshot.val();
      await this.database.ref(`userRooms/${uid}/${normalizedCode}`).remove();

      const leavingPlayer = room.players?.[uid] || {};
      const isHost = room.hostUid === uid || leavingPlayer.isHost === true;
      const isAutoMatch = room.matchmaking === true || String(room.mode || "").includes("자동매칭");
      const remainingPlayers = { ...(room.players || {}) };
      delete remainingPlayers[uid];
      const remainingPlayerIds = Object.keys(remainingPlayers);
      const roomPhase = room.phase || "lobby";
      const roomPlayerCount = Math.min(4, Math.max(2, Number(room.playerCount || 2)));
      const roomTargetScore = Math.min(500, Math.max(100, Number(room.targetScore || 200)));
      const roomDifficulty = room.difficulty === "power" ? "power" : "basic";
      const queuePath = isAutoMatch ? `matchQueues/${roomPlayerCount}/${roomTargetScore}/${roomDifficulty}` : "";
      const queueSnapshot = queuePath ? await this.database.ref(queuePath).once("value") : null;
      const queue = queueSnapshot?.val() || {};
      const queueMatchesRoom = queuePath && String(queue.roomCode || "").toUpperCase() === normalizedCode;

      if (roomPhase === "final") {
        const updates = {
          [`rooms/${normalizedCode}`]: null,
        };
        if (queueMatchesRoom) {
          updates[queuePath] = null;
        }
        remainingPlayerIds.forEach((playerUid) => {
          updates[`userRooms/${playerUid}/${normalizedCode}`] = null;
        });
        await this.database.ref().update(updates);
        const deletedSnapshot = await roomRef.once("value");
        return { removedRoom: !deletedSnapshot.exists() };
      }

      if (isAutoMatch) {
        const shouldDeleteAutoRoom = remainingPlayerIds.length === 0
          || (remainingPlayerIds.length <= 1 && roomPhase !== "lobby");
        if (shouldDeleteAutoRoom) {
          const updates = {
            [`rooms/${normalizedCode}`]: null,
          };
          if (queueMatchesRoom) {
            updates[queuePath] = null;
          }
          remainingPlayerIds.forEach((playerUid) => {
            updates[`userRooms/${playerUid}/${normalizedCode}`] = null;
          });
          await this.database.ref().update(updates);
          const deletedSnapshot = await roomRef.once("value");
          return { removedRoom: !deletedSnapshot.exists() };
        }

        const nextHostUid = remainingPlayers[room.hostUid]
          ? room.hostUid
          : remainingPlayerIds
            .sort((a, b) => Number(remainingPlayers[a]?.joinedAt || 0) - Number(remainingPlayers[b]?.joinedAt || 0))[0];
        const updates = {
          [`rooms/${normalizedCode}/players/${uid}`]: null,
          [`rooms/${normalizedCode}/hostUid`]: nextHostUid,
          [`rooms/${normalizedCode}/phase`]: roomPhase === "lobby" ? "lobby" : room.phase,
          [`rooms/${normalizedCode}/updatedAt`]: window.firebase.database.ServerValue.TIMESTAMP,
        };
        if (queueMatchesRoom) {
          updates[`${queuePath}/players/${uid}`] = null;
          updates[`${queuePath}/count`] = remainingPlayerIds.length;
          updates[`${queuePath}/updatedAt`] = window.firebase.database.ServerValue.TIMESTAMP;
        }
        remainingPlayerIds.forEach((playerUid) => {
          updates[`rooms/${normalizedCode}/players/${playerUid}/isHost`] = playerUid === nextHostUid;
        });

        await this.database.ref().update(updates);
        return { removedRoom: false };
      }

      if (isHost) {
        if (roomPhase === "lobby" && remainingPlayerIds.length > 0) {
          const nextHostUid = remainingPlayerIds
            .sort((a, b) => Number(remainingPlayers[a]?.joinedAt || 0) - Number(remainingPlayers[b]?.joinedAt || 0))[0];
          const updates = {
            [`rooms/${normalizedCode}/players/${uid}`]: null,
            [`rooms/${normalizedCode}/hostUid`]: nextHostUid,
            [`rooms/${normalizedCode}/updatedAt`]: window.firebase.database.ServerValue.TIMESTAMP,
          };
          remainingPlayerIds.forEach((playerUid) => {
            updates[`rooms/${normalizedCode}/players/${playerUid}/isHost`] = playerUid === nextHostUid;
          });
          await this.database.ref().update(updates);
          return { removedRoom: false };
        }

        await roomRef.remove();
        const deletedSnapshot = await roomRef.once("value");
        return { removedRoom: !deletedSnapshot.exists() };
      }

      await roomRef.child(`players/${uid}`).remove();
      const remainingPlayersSnapshot = await roomRef.child("players").once("value");
      const latestRemainingPlayers = remainingPlayersSnapshot.val() || {};

      if (Object.keys(latestRemainingPlayers).length === 0) {
        await roomRef.remove();
        const deletedSnapshot = await roomRef.once("value");
        return { removedRoom: !deletedSnapshot.exists() };
      }

      await roomRef.update({ updatedAt: window.firebase.database.ServerValue.TIMESTAMP });
      return { removedRoom: false };
    },
    async cleanupStaleRooms({ maxAgeMs = 60 * 60 * 1000, soloLobbyMaxAgeMs = 2 * 60 * 1000 } = {}) {
      requireDatabase(this);

      const now = Date.now();
      const roomsRef = this.database.ref("rooms");
      const snapshot = await roomsRef.once("value");
      const rooms = snapshot.val() || {};
      const updates = {};
      let removedCount = 0;

      Object.entries(rooms).forEach(([code, room]) => {
        const players = room.players || {};
        const playerCount = Object.keys(players).length;
        const updatedAt = Number(room.updatedAt || room.createdAt || 0);
        const isOld = updatedAt > 0 && now - updatedAt > maxAgeMs;
        const isEmpty = playerCount === 0;
        const isExpiredSoloLobby = room.phase === "lobby"
          && playerCount === 1
          && updatedAt > 0
          && now - updatedAt > soloLobbyMaxAgeMs;

        if (isEmpty || isOld || isExpiredSoloLobby) {
          updates[`rooms/${code}`] = null;
          removedCount += 1;

          Object.keys(players).forEach((playerUid) => {
            updates[`userRooms/${playerUid}/${code}`] = null;
          });
        }
      });

      const userRoomsSnapshot = await this.database.ref("userRooms").once("value");
      const userRooms = userRoomsSnapshot.val() || {};
      Object.entries(userRooms).forEach(([playerUid, roomMap]) => {
        Object.keys(roomMap || {}).forEach((code) => {
          const normalizedCode = String(code || "").trim().toUpperCase();
          const room = rooms[normalizedCode];
          if (!room || !room.players?.[playerUid]) {
            updates[`userRooms/${playerUid}/${normalizedCode}`] = null;
            removedCount += 1;
          }
        });
      });

      const matchQueuesSnapshot = await this.database.ref("matchQueues").once("value");
      const matchQueues = matchQueuesSnapshot.val() || {};
      const inspectMatchQueue = (path, queue, size) => {
        const code = String(queue?.roomCode || "").toUpperCase();
        const room = rooms[code];
        const players = room?.players || {};
        const queueUpdatedAt = Number(queue?.updatedAt || queue?.createdAt || 0);
        const isOldQueue = queueUpdatedAt > 0 && now - queueUpdatedAt > maxAgeMs;
        const isInvalidQueue = updates[`rooms/${code}`] === null
          || !room
          || room.phase !== "lobby"
          || Object.keys(players).length >= Number(room.playerCount || size || 0);
        if (isOldQueue || isInvalidQueue) {
          updates[path] = null;
          removedCount += 1;
        }
      };

      Object.entries(matchQueues).forEach(([size, scoreQueues]) => {
        Object.entries(scoreQueues || {}).forEach(([scoreGoal, queueOrDifficultyQueues]) => {
          if (queueOrDifficultyQueues?.roomCode) {
            inspectMatchQueue(`matchQueues/${size}/${scoreGoal}`, queueOrDifficultyQueues, size);
            return;
          }

          Object.entries(queueOrDifficultyQueues || {}).forEach(([difficulty, queue]) => {
            inspectMatchQueue(`matchQueues/${size}/${scoreGoal}/${difficulty}`, queue, size);
          });
        });
      });

      if (removedCount > 0) {
        await this.database.ref().update(updates);
      }

      return { removedCount };
    },
  };

  window.diceFirebase = client;
})();
