const appFrame = document.querySelector("#appFrame");
const splash = document.querySelector("#splash");
const home = document.querySelector("#home");
const gameScreen = document.querySelector("#gameScreen");
const nicknameInput = document.querySelector("#nicknameInput");
const nicknamePreview = document.querySelector("#nicknamePreview");
const skinButtons = document.querySelectorAll("[data-skin]");
const previewDice = document.querySelectorAll(".splash-die, .table-die");
const soloButton = document.querySelector("#soloButton");
const onlineButton = document.querySelector("#onlineButton");
const onlineScreen = document.querySelector("#onlineScreen");
const settingsOpenButtons = document.querySelectorAll("[data-settings-open]");
const settingsSheet = document.querySelector("#settingsSheet");
const settingsBackdrop = document.querySelector("#settingsBackdrop");
const settingsClose = document.querySelector("#settingsClose");
const settingsNicknameInput = document.querySelector("#settingsNicknameInput");
const settingsNicknameHelp = document.querySelector("#settingsNicknameHelp");
const soundToggleButton = document.querySelector("#soundToggleButton");
const resetDataButton = document.querySelector("#resetDataButton");
const settingsPublicId = document.querySelector("#settingsPublicId");
const settingsVersion = document.querySelector("#settingsVersion");
const onlineDifficultySheet = document.querySelector("#onlineDifficultySheet");
const onlineDifficultyBackdrop = document.querySelector("#onlineDifficultyBackdrop");
const onlineDifficultyClose = document.querySelector("#onlineDifficultyClose");
const onlineDifficultyStart = document.querySelector("#onlineDifficultyStart");
const onlineDifficultyButtons = document.querySelectorAll("[data-online-difficulty]");
const onlineBackButton = document.querySelector("#onlineBackButton");
const leaveRoomButton = document.querySelector("#leaveRoomButton");
const onlineStateLabel = document.querySelector("#onlineStateLabel");
const onlineStateCopy = document.querySelector("#onlineStateCopy");
const onlineProgressCount = document.querySelector("#onlineProgressCount");
const onlineProgressFill = document.querySelector("#onlineProgressFill");
const firebaseStatus = document.querySelector("#firebaseStatus");
const createRoomButton = document.querySelector("#createRoomButton");
const joinRoomButton = document.querySelector("#joinRoomButton");
const largeRoomButton = document.querySelector("#largeRoomButton");
const joinCodeSheet = document.querySelector("#joinCodeSheet");
const joinCodeBackdrop = document.querySelector("#joinCodeBackdrop");
const joinCodeClose = document.querySelector("#joinCodeClose");
const joinCodeInput = document.querySelector("#joinCodeInput");
const joinCodeSubmit = document.querySelector("#joinCodeSubmit");
const speedrunCreateSheet = document.querySelector("#speedrunCreateSheet");
const speedrunCreateBackdrop = document.querySelector("#speedrunCreateBackdrop");
const speedrunCreateClose = document.querySelector("#speedrunCreateClose");
const speedrunCreateSubmit = document.querySelector("#speedrunCreateSubmit");
const matchSizeButtons = document.querySelectorAll("[data-match-size]");
const battleGoalButtons = document.querySelectorAll("[data-score-goal]");
const roomTimeLimitButtons = document.querySelectorAll("[data-room-time-limit]");
const speedrunTimeLimitButtons = document.querySelectorAll("[data-speedrun-time-limit]");
const speedrunProblemTimeLimitButtons = document.querySelectorAll("[data-speedrun-problem-time-limit]");
const roomCodeLabel = document.querySelector("#roomCodeLabel");
const lobbyModeLabel = document.querySelector("#lobbyModeLabel");
const playerList = document.querySelector("#playerList");
const onlinePlayerName = document.querySelector("#onlinePlayerName");
const battleRuleNote = document.querySelector("#battleRuleNote");
const scoreBoard = document.querySelector("#scoreBoard");
const onlineReadyButton = document.querySelector("#onlineReadyButton");
const hostControlButton = document.querySelector("#hostControlButton");
const battleRoundPanel = document.querySelector("#battleRoundPanel");
const battleTimeLimitLabel = document.querySelector("#battleTimeLimitLabel");
const battleRoomCode = document.querySelector("#battleRoomCode");
const battleElapsed = document.querySelector("#battleElapsed");
const battleStatusList = document.querySelector("#battleStatusList");
const battleResultSummary = document.querySelector("#battleResultSummary");
const battleResultKicker = document.querySelector("#battleResultKicker");
const battleResultTitle = document.querySelector("#battleResultTitle");
const battleResultMeta = document.querySelector("#battleResultMeta");
const battleResultList = document.querySelector("#battleResultList");
const battleAdSlot = document.querySelector("#battleAdSlot");
const battleFinalModal = document.querySelector("#battleFinalModal");
const battleFinalTitle = document.querySelector("#battleFinalTitle");
const battleFinalMessage = document.querySelector("#battleFinalMessage");
const battleFinalList = document.querySelector("#battleFinalList");
const battleFinalClose = document.querySelector("#battleFinalClose");
const battleTensDie = document.querySelector("#battleTensDie");
const battleOnesDie = document.querySelector("#battleOnesDie");
const battleTargetLabel = document.querySelector("#battleTargetLabel");
const battleDiceTray = document.querySelector("#battleDiceTray");
const battleExpressionPreview = document.querySelector("#battleExpressionPreview");
const battleFeedback = document.querySelector("#battleFeedback");
const battleCountdownLayer = document.querySelector("#battleCountdownLayer");
const battleCountdownNumber = document.querySelector("#battleCountdownNumber");
const battlePowerOp = document.querySelector("#battlePowerOp");
const battleAnswerCheckButton = document.querySelector("#battleAnswerCheckButton");
const battleClearExpressionButton = document.querySelector("#battleClearExpressionButton");
const battlePassButton = document.querySelector("#battlePassButton");
const battleUndoButton = document.querySelector("#battleUndoButton");
const soloSheet = document.querySelector("#soloSheet");
const sheetBackdrop = document.querySelector("#sheetBackdrop");
const sheetClose = document.querySelector("#sheetClose");
const sheetStart = document.querySelector("#sheetStart");
const difficultyCards = document.querySelectorAll("[data-difficulty]");
const soloTimeLimitButtons = document.querySelectorAll("[data-solo-time-limit]");
const soloClearCount = document.querySelector("#soloClearCount");
const unlockText = document.querySelector("#unlockText");
const unlockFill = document.querySelector("#unlockFill");
const nextRewardProgress = document.querySelector("#nextRewardProgress");
const nextRewardText = document.querySelector("#nextRewardText");
const skinRewardButton = document.querySelector("#skinRewardButton");
const skinCollectionButton = document.querySelector("#skinCollectionButton");
const currentSkinButton = document.querySelector("#currentSkinButton");
const currentSkinSwatch = document.querySelector("#currentSkinSwatch");
const currentSkinName = document.querySelector("#currentSkinName");
const skinSheet = document.querySelector("#skinSheet");
const skinSheetBackdrop = document.querySelector("#skinSheetBackdrop");
const skinSheetClose = document.querySelector("#skinSheetClose");
const skinSheetProgress = document.querySelector("#skinSheetProgress");
const skinSheetNextReward = document.querySelector("#skinSheetNextReward");
const answerCheckButton = document.querySelector("#answerCheckButton");
const clearExpressionButton = document.querySelector("#clearExpressionButton");
const undoButton = document.querySelector("#undoButton");
const successResult = document.querySelector("#successResult");
const resultKicker = document.querySelector("#resultKicker");
const resultTime = document.querySelector("#resultTime");
const resultClearCount = document.querySelector("#resultClearCount");
const resultNextReward = document.querySelector("#resultNextReward");
const resultMessage = document.querySelector("#resultMessage");
const resultRewardButton = document.querySelector("#resultRewardButton");
const resultNextButton = document.querySelector("#resultNextButton");
const resultHomeButton = document.querySelector("#resultHomeButton");
const rewardReveal = document.querySelector("#rewardReveal");
const rewardKicker = document.querySelector("#rewardKicker");
const rewardShell = document.querySelector("#rewardShell");
const rewardSwatch = document.querySelector("#rewardSwatch");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardCopy = document.querySelector("#rewardCopy");
const rewardApply = document.querySelector("#rewardApply");
const rewardLater = document.querySelector("#rewardLater");
const gameBackButton = document.querySelector("#gameBackButton");
const gameDifficultyLabel = document.querySelector("#gameDifficultyLabel");
const gamePowerOp = document.querySelector("#gamePowerOp");
const gameTimer = document.querySelector("#gameTimer");
const gameFelt = document.querySelector(".game-felt");
const tensDie = document.querySelector("#tensDie");
const onesDie = document.querySelector("#onesDie");
const targetLabel = document.querySelector("#targetLabel");
const recordLine = document.querySelector("#recordLine");
const expressionPreview = document.querySelector("#expressionPreview");
const diceTray = document.querySelector("#diceTray");
const gameFeedback = document.querySelector("#gameFeedback");
const countdownLayer = document.querySelector("#countdownLayer");
const countdownNumber = document.querySelector("#countdownNumber");
const rollLayer = document.querySelector("#rollLayer");
const rollStage = document.querySelector("#rollStage");
const operatorButtons = document.querySelectorAll("[data-op]");

const APP_BUILD = "20260615-speedrun-timer1";
const BATTLE_TIME_LIMIT_MS = 120000;
const DEFAULT_TIME_LIMIT_MS = 120000;
const SHORT_TIME_LIMIT_MS = 60000;
const UNLIMITED_TIME_LIMIT_MS = 0;
const SOLO_LOBBY_MAX_WAIT_MS = 120000;
const FIREBASE_REVEAL_DELAY_MS = 3000;
const DEFAULT_BATTLE_TARGET_SCORE = 200;
const MAX_BATTLE_TARGET_SCORE = 500;
const SPEEDRUN_MODE_NAME = "스피드런 대회방";
const SPEEDRUN_PLAYER_LIMIT = 10;
const SPEEDRUN_MIN_START_PLAYERS = 2;
const SPEEDRUN_TARGET_SOLVES = 20;
const SPEEDRUN_PROBLEM_COUNT = 80;
const DEFAULT_SPEEDRUN_TIME_LIMIT_MS = 5 * 60 * 1000;
const MAX_SPEEDRUN_TIME_LIMIT_MS = 30 * 60 * 1000;
const DEFAULT_NICKNAME = "나의 닉네임";
const bannedNicknamePatterns = [
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
const extraBannedNicknamePatterns = [
  /시발|씨발|ㅅㅂ|병신|ㅂㅅ|개새|개색|좆|존나|지랄|염병/i,
  /꺼져|닥쳐|죽어|자살|살인|테러/i,
  /섹스|보지|자지|애미|느금|니미/i,
  /fuck|shit|sex|bitch|asshole|nigger|nigga/i,
  /admin|관리자|운영자|cnmmath/i,
];
const skinClasses = [
  "theme-basic",
  "theme-classroom",
  "theme-box",
  "theme-star",
  "theme-robot",
  "theme-dino",
];
const skinNames = {
  basic: "기본",
  classroom: "칠판",
  box: "종이박스",
  star: "별빛 연산실",
  robot: "로봇 실험실",
  dino: "공룡 연구소",
};
const defaultClaimedSkins = ["basic", "classroom", "box"];
const savedClaimedSkins = JSON.parse(localStorage.getItem("diceMath.claimedSkins") || "null");
const claimedSkinIds = new Set(savedClaimedSkins || defaultClaimedSkins);
const progress = {
  clears: Number(localStorage.getItem("diceMath.clearCount") || 0),
  onlineGoal: 100,
};
const game = {
  tens: 10,
  ones: 1,
  target: 11,
  dice: [],
  tokens: [],
  insertIndex: null,
  powerMode: false,
  powerBaseId: null,
  isRevealed: false,
  isSolved: false,
  countdownTimerId: null,
  rollTimerId: null,
  timerId: null,
  startedAt: null,
  elapsed: 0,
  timeLimit: DEFAULT_TIME_LIMIT_MS,
  mode: "solo",
};

let selectedDifficulty = localStorage.getItem("diceMath.difficulty") || "basic";
let selectedOnlineDifficulty = localStorage.getItem("diceMath.onlineDifficulty") || "basic";
let selectedSkin = localStorage.getItem("diceMath.skin") || "basic";
let selectedBattleTargetScore = normalizeBattleTargetScore(localStorage.getItem("diceMath.battleTargetScore") || DEFAULT_BATTLE_TARGET_SCORE);
let selectedSoloTimeLimit = normalizeSoloTimeLimit(localStorage.getItem("diceMath.soloTimeLimit") || DEFAULT_TIME_LIMIT_MS);
let selectedRoomTimeLimit = normalizeTimeLimit(localStorage.getItem("diceMath.roomTimeLimit") || DEFAULT_TIME_LIMIT_MS);
let selectedSpeedrunTimeLimit = normalizeSpeedrunTimeLimit(localStorage.getItem("diceMath.speedrunTimeLimit") || DEFAULT_SPEEDRUN_TIME_LIMIT_MS);
let selectedSpeedrunProblemTimeLimit = normalizeTimeLimit(localStorage.getItem("diceMath.speedrunProblemTimeLimit") || SHORT_TIME_LIMIT_MS);
let soundEnabled = localStorage.getItem("diceMath.soundEnabled") !== "false";
let firebaseUserProfile = null;
let firebaseProfileReady = false;
let suppressProfileSave = false;
let pendingRewardSkin = null;
let nextId = 0;
const usedMockRoomCodes = new Set(["A7K2Q9"]);
const battleState = {
  roomMode: "비공개 친구 방",
  playerCount: 4,
  targetScore: DEFAULT_BATTLE_TARGET_SCORE,
  timeLimit: DEFAULT_TIME_LIMIT_MS,
  round: 0,
  players: [],
  phase: "lobby",
  firebaseRoomCode: null,
  isHost: false,
  roomUnsubscribe: null,
  roundStartedAt: null,
  firebaseSolveStartedAt: null,
  roundTimerId: null,
  roundEndTimerId: null,
  countdownTimerId: null,
  autoStartTimerId: null,
  autoStartIntervalId: null,
  soloLobbyTimerId: null,
  soloLobbyDeadline: null,
  statusTimerIds: [],
  statusMap: {},
  submissions: [],
  currentProblem: null,
  firebaseRoomSnapshot: null,
  autoStartPaused: false,
  firebaseResultShown: false,
  firebaseResultRound: null,
  firebaseAutoStartKey: null,
  firebaseTimeoutKey: null,
  speedrunProblemIndex: 0,
  speedrunStartKey: null,
  speedrunFinishKey: null,
  speedrunProblemTimeoutKey: null,
};
const firebaseState = {
  ready: false,
  authReady: false,
  status: "Firebase 설정 전 · 목업 모드",
};
let profileSaveTimerId = null;

setTimeout(() => {
  splash.classList.add("done");
}, 1450);

let firebaseInitPromise = initFirebaseConnection();
renderProgress();
renderDifficulty();
renderOnlineDifficulty();
renderBattleGoalOptions();
renderSoloTimeLimitOptions();
renderRoomTimeLimitOptions();
renderSpeedrunTimeLimitOptions();
renderSpeedrunProblemTimeLimitOptions();
applySkin(selectedSkin, { closeSheet: false });
renderGame();

nicknameInput.addEventListener("input", () => {
  const value = nicknameInput.value.trim();
  nicknamePreview.textContent = value
    ? getNicknameWarning(value) || value
    : "닉네임을 정해주세요";
  if (settingsNicknameInput && settingsNicknameInput.value !== nicknameInput.value) {
    settingsNicknameInput.value = nicknameInput.value;
  }
  scheduleUserProfileSave();
});

skinButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const skin = button.dataset.skin;
    if (button.classList.contains("locked")) return;
    if (button.classList.contains("unclaimed")) {
      openRewardReveal(skin);
      return;
    }
    applySkin(skin);
  });
});

skinRewardButton.addEventListener("click", () => {
  if (pendingRewardSkin) openRewardReveal(pendingRewardSkin);
});
skinCollectionButton.addEventListener("click", openSkinSheet);
currentSkinButton.addEventListener("click", openSkinSheet);
skinSheetBackdrop.addEventListener("click", closeSkinSheet);
skinSheetClose.addEventListener("click", closeSkinSheet);

rewardApply.addEventListener("click", () => {
  if (pendingRewardSkin) {
    claimSkin(pendingRewardSkin);
    applySkin(pendingRewardSkin);
  }
  closeRewardReveal();
});

rewardLater.addEventListener("click", () => {
  if (pendingRewardSkin) claimSkin(pendingRewardSkin);
  closeRewardReveal();
});

difficultyCards.forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.difficulty;
    localStorage.setItem("diceMath.difficulty", selectedDifficulty);
    renderDifficulty();
    scheduleUserProfileSave();
  });
});
soloTimeLimitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSoloTimeLimit = normalizeSoloTimeLimit(button.dataset.soloTimeLimit);
    localStorage.setItem("diceMath.soloTimeLimit", String(selectedSoloTimeLimit));
    renderSoloTimeLimitOptions();
    scheduleUserProfileSave();
  });
});

soloButton.addEventListener("click", openSoloSheet);
onlineButton.addEventListener("click", openOnlineDifficultySheet);
onlineBackButton.addEventListener("click", handleOnlineBackClick);
leaveRoomButton.addEventListener("click", leaveCurrentRoom);
createRoomButton.addEventListener("click", () => createOnlineRoom("비공개 친구 방", 4, createRoomButton));
largeRoomButton.addEventListener("click", openSpeedrunCreateSheet);
joinRoomButton.addEventListener("click", openJoinCodeSheet);
joinCodeBackdrop.addEventListener("click", closeJoinCodeSheet);
joinCodeClose.addEventListener("click", closeJoinCodeSheet);
joinCodeSubmit.addEventListener("click", joinRoomWithCode);
joinCodeInput.addEventListener("input", () => {
  joinCodeInput.value = joinCodeInput.value.toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, "");
});
matchSizeButtons.forEach((button) => {
  button.addEventListener("click", () => joinAutoMatch(Number(button.dataset.matchSize), button));
});
battleGoalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedBattleTargetScore = normalizeBattleTargetScore(button.dataset.scoreGoal);
    localStorage.setItem("diceMath.battleTargetScore", String(selectedBattleTargetScore));
    renderBattleGoalOptions();
    scheduleUserProfileSave();
  });
});
roomTimeLimitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRoomTimeLimit = normalizeTimeLimit(button.dataset.roomTimeLimit);
    localStorage.setItem("diceMath.roomTimeLimit", String(selectedRoomTimeLimit));
    renderRoomTimeLimitOptions();
    scheduleUserProfileSave();
  });
});
speedrunTimeLimitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSpeedrunTimeLimit = normalizeSpeedrunTimeLimit(button.dataset.speedrunTimeLimit);
    localStorage.setItem("diceMath.speedrunTimeLimit", String(selectedSpeedrunTimeLimit));
    renderSpeedrunTimeLimitOptions();
  });
});
speedrunProblemTimeLimitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSpeedrunProblemTimeLimit = normalizeTimeLimit(button.dataset.speedrunProblemTimeLimit);
    localStorage.setItem("diceMath.speedrunProblemTimeLimit", String(selectedSpeedrunProblemTimeLimit));
    renderSpeedrunProblemTimeLimitOptions();
  });
});
onlineReadyButton.addEventListener("click", handleOnlineReadyClick);
hostControlButton.addEventListener("click", handleHostControl);
battleFinalClose.addEventListener("click", closeBattleFinalModal);
speedrunCreateBackdrop.addEventListener("click", closeSpeedrunCreateSheet);
speedrunCreateClose.addEventListener("click", closeSpeedrunCreateSheet);
speedrunCreateSubmit.addEventListener("click", () => createSpeedrunRoom(speedrunCreateSubmit));
settingsOpenButtons.forEach((button) => {
  button.addEventListener("click", openSettingsSheet);
});
settingsBackdrop.addEventListener("click", closeSettingsSheet);
settingsClose.addEventListener("click", closeSettingsSheet);
settingsNicknameInput.addEventListener("input", handleSettingsNicknameInput);
soundToggleButton.addEventListener("click", toggleSoundSetting);
resetDataButton.addEventListener("click", resetLocalData);
onlineDifficultyBackdrop.addEventListener("click", closeOnlineDifficultySheet);
onlineDifficultyClose.addEventListener("click", closeOnlineDifficultySheet);
onlineDifficultyStart.addEventListener("click", () => {
  closeOnlineDifficultySheet();
  openOnlineScreen();
});
onlineDifficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedOnlineDifficulty = button.dataset.onlineDifficulty === "power" ? "power" : "basic";
    localStorage.setItem("diceMath.onlineDifficulty", selectedOnlineDifficulty);
    renderOnlineDifficulty();
    scheduleUserProfileSave();
  });
});
sheetBackdrop.addEventListener("click", closeSoloSheet);
sheetClose.addEventListener("click", closeSoloSheet);
sheetStart.addEventListener("click", openGameScreen);
gameBackButton.addEventListener("click", openHome);
answerCheckButton.addEventListener("click", checkAnswer);
clearExpressionButton.addEventListener("click", clearExpression);
undoButton.addEventListener("click", undo);
battleAnswerCheckButton.addEventListener("click", checkAnswer);
battleClearExpressionButton.addEventListener("click", clearExpression);
battlePassButton.addEventListener("click", handleSpeedrunPass);
battleUndoButton.addEventListener("click", undo);
resultRewardButton.addEventListener("click", () => {
  if (pendingRewardSkin) openRewardReveal(pendingRewardSkin);
});
resultNextButton.addEventListener("click", () => {
  closeSuccessResult();
  startRound();
});
resultHomeButton.addEventListener("click", () => {
  closeSuccessResult();
  openHome();
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.op;
    if (value === "power") {
      addOperator("^");
      return;
    }
    addOperator(value);
  });
});

expressionPreview.addEventListener("dragover", (event) => event.preventDefault());
expressionPreview.addEventListener("drop", (event) => {
  event.preventDefault();
  const dieId = event.dataTransfer.getData("text/plain");
  addDieToExpression(dieId);
});
battleExpressionPreview.addEventListener("dragover", (event) => event.preventDefault());
battleExpressionPreview.addEventListener("drop", (event) => {
  event.preventDefault();
  const dieId = event.dataTransfer.getData("text/plain");
  addDieToExpression(dieId);
});

previewDice.forEach((die) => {
  die.draggable = false;
  die.addEventListener("dragstart", (event) => event.preventDefault());
});

window.setTimeout(applyPreviewFromUrl, 0);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") syncFirebaseRoundClock();
});
window.addEventListener("focus", syncFirebaseRoundClock);
window.addEventListener("pageshow", syncFirebaseRoundClock);

function applyPreviewFromUrl() {
  const preview = new URLSearchParams(window.location.search).get("preview");
  if (!preview) return;

  splash.classList.add("done");

  if (preview === "online") {
    openOnlineScreen();
    return;
  }

  if (preview === "lobby") {
    openOnlineScreen();
    openBattleLobby("비공개 친구 방", 4, "A7K2Q9");
    return;
  }

  if (preview === "battle") {
    openOnlineScreen();
    openBattleLobby("비공개 친구 방", 4, "A7K2Q9");
    openBattleRoundPreview();
    return;
  }

  if (preview === "result") {
    openOnlineScreen();
    openBattleLobby("비공개 친구 방", 4, "A7K2Q9");
    openBattleRoundPreview();
    seedBattlePreviewSubmissions();
    showMockBattleResult();
  }
}

function openBattleRoundPreview() {
  clearBattleTimers();
  const problem = createSolvableProblem();
  battleState.currentProblem = problem;
  battleState.statusMap = {};
  battleState.submissions = [];
  applyProblemToGame(problem, "battle");
  game.isRevealed = true;
  battleState.roundStartedAt = performance.now() - 1110;
  setOnlinePhase("playing");
  battleRoundPanel.hidden = false;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "라운드 진행 중";
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${battleState.round + 1}라운드`;
  battleElapsed.textContent = "01.11";

  const me = battleState.players[0];
  const second = battleState.players[1];
  if (me) battleState.statusMap[me.id] = "입력중";
  if (second) battleState.statusMap[second.id] = "완료";

  setFeedback("미리보기입니다. 실제 라운드에서는 직접 식을 입력해 제출합니다.");
  renderGame();
  renderBattleStatuses(battleState.statusMap);
}

function seedBattlePreviewSubmissions() {
  const expression = findBasicSolution(game.dice.map((die) => die.value), game.target) || stringifyTokens(game.tokens) || "정답식";
  battleState.submissions = battleState.players.slice(0, Math.min(2, battleState.players.length)).map((player, index) => ({
    id: player.id,
    name: player.name,
    time: 8420 + index * 3150,
    expression,
    timedOut: false,
  }));
  battleState.statusMap = Object.fromEntries(battleState.submissions.map((submission) => [submission.id, "완료"]));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createId(prefix) {
  nextId += 1;
  return `${prefix}-${Date.now()}-${nextId}`;
}

function applySkin(skin, options = {}) {
  selectedSkin = skin;
  localStorage.setItem("diceMath.skin", skin);
  skinButtons.forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-skin="${skin}"]`)?.classList.add("active");
  currentSkinName.textContent = skinNames[skin] || "기본";
  currentSkinSwatch.className = `swatch ${skin}`;
  appFrame.classList.remove(...skinClasses);
  appFrame.classList.add(`theme-${skin}`);
  if (options.closeSheet !== false) closeSkinSheet();
  if (!options.skipProfileSave) scheduleUserProfileSave();
}

function claimSkin(skin) {
  claimedSkinIds.add(skin);
  localStorage.setItem("diceMath.claimedSkins", JSON.stringify([...claimedSkinIds]));
  scheduleUserProfileSave();
}

function renderProgress() {
  const onlineRatio = Math.min(progress.clears / progress.onlineGoal, 1);
  pendingRewardSkin = getPendingRewardSkin();
  const rewardStatus = getNextRewardStatus();

  soloClearCount.textContent = `${progress.clears}개`;
  unlockText.textContent =
    progress.clears >= progress.onlineGoal
      ? "온라인 대전 해금 완료"
      : `정답 ${progress.clears} / ${progress.onlineGoal}`;
  unlockFill.style.width = `${Math.round(onlineRatio * 100)}%`;
  renderOnlineProgress(onlineRatio);
  nextRewardProgress.textContent = `${progress.clears} / ${rewardStatus.nextGoal}`;
  skinSheetProgress.textContent = `${progress.clears} / ${rewardStatus.nextGoal}`;
  nextRewardText.textContent = rewardStatus.shortMessage;
  skinSheetNextReward.textContent = rewardStatus.shortMessage;

  skinButtons.forEach((button) => {
    const unlockAt = Number(button.dataset.unlock || 0);
    const isLocked = progress.clears < unlockAt;
    const isClaimed = claimedSkinIds.has(button.dataset.skin);
    button.classList.toggle("locked", isLocked);
    button.classList.toggle("unclaimed", !isLocked && !isClaimed);
    button.disabled = isLocked;
  });

  skinRewardButton.hidden = !pendingRewardSkin;
}

function renderOnlineProgress(onlineRatio = Math.min(progress.clears / progress.onlineGoal, 1)) {
  onlineProgressCount.textContent = "온라인 준비";
  onlineProgressFill.style.width = "100%";
  firebaseStatus.textContent = `${firebaseState.status} · ${APP_BUILD}`;
  firebaseStatus.dataset.connected = firebaseState.ready ? "true" : "false";
  onlineStateLabel.textContent = "바로 입장 가능";
  onlineStateCopy.textContent = "친구와 방 코드로 만나거나 자동매칭으로 바로 대전할 수 있어요.";
  unlockText.textContent = "바로 입장";
  unlockFill.style.width = "100%";
  onlineButton.classList.add("unlocked");
  return;

  const isUnlocked = progress.clears >= progress.onlineGoal;
  onlineProgressCount.textContent = isUnlocked
    ? `${progress.clears}개 클리어`
    : `${progress.clears} / ${progress.onlineGoal}`;
  onlineProgressFill.style.width = `${Math.round(onlineRatio * 100)}%`;
  firebaseStatus.textContent = `${firebaseState.status} · ${APP_BUILD}`;
  firebaseStatus.dataset.connected = firebaseState.ready ? "true" : "false";
  onlineStateLabel.textContent = isUnlocked ? "온라인 대전 입장 가능" : "100개 달성 후 해금";
  onlineStateCopy.textContent = isUnlocked
    ? "친구와 방을 만들거나 자동 매칭으로 같은 문제를 동시에 풀 수 있어요."
    : `혼자하기 ${progress.onlineGoal - progress.clears}개를 더 클리어하면 정식 온라인 대전이 열려요. 지금은 화면 흐름을 미리 볼 수 있어요.`;
  onlineButton.classList.toggle("unlocked", isUnlocked);
}

async function initFirebaseConnection() {
  if (!window.diceFirebase) {
    firebaseState.ready = false;
    firebaseState.status = "Firebase SDK 없음 · 목업 모드";
    renderOnlineProgress();
    return;
  }

  const result = await window.diceFirebase.init();
  firebaseState.authReady = Boolean(result.enabled);
  firebaseState.ready = Boolean(result.enabled && result.databaseReady);
  if (result.enabled && result.databaseReady) {
    firebaseState.status = "Firebase 연결됨 · 온라인 준비";
    await loadFirebaseUserProfile();
    runFirebaseRoomCleanup();
  } else if (result.enabled) {
    firebaseState.status = "Firebase 로그인됨 · DB URL 필요";
  } else {
    firebaseState.status = "Firebase 설정 전 · 목업 모드";
  }
  renderOnlineProgress();
}

function getClaimedSkinMap() {
  return [...claimedSkinIds].reduce((map, skin) => {
    map[skin] = true;
    return map;
  }, {});
}

function getLocalUserProfile() {
  return {
    nickname: cleanLocalNickname(nicknameInput.value),
    clearCount: progress.clears,
    claimedSkins: getClaimedSkinMap(),
    selectedSkin,
    selectedDifficulty,
    selectedOnlineDifficulty,
    battleTargetScore: selectedBattleTargetScore,
    soloTimeLimit: selectedSoloTimeLimit,
    roomTimeLimit: selectedRoomTimeLimit,
    soundEnabled,
  };
}

function applyUserProfile(profile = {}) {
  suppressProfileSave = true;

  firebaseUserProfile = profile;
  firebaseProfileReady = true;
  nicknameInput.value = profile.nickname || nicknameInput.value || "";
  settingsNicknameInput.value = nicknameInput.value;
  nicknamePreview.textContent = nicknameInput.value || "닉네임을 정해주세요";
  progress.clears = Math.max(0, Number(profile.clearCount || 0));

  claimedSkinIds.clear();
  const remoteSkins = profile.claimedSkins || {};
  Object.entries(remoteSkins).forEach(([skin, enabled]) => {
    if (enabled) claimedSkinIds.add(skin);
  });
  if (!claimedSkinIds.size) {
    defaultClaimedSkins.forEach((skin) => claimedSkinIds.add(skin));
  }

  selectedDifficulty = profile.selectedDifficulty === "power" ? "power" : "basic";
  selectedOnlineDifficulty = profile.selectedOnlineDifficulty === "power" ? "power" : "basic";
  selectedBattleTargetScore = normalizeBattleTargetScore(profile.battleTargetScore || DEFAULT_BATTLE_TARGET_SCORE);
  selectedSoloTimeLimit = normalizeSoloTimeLimit(profile.soloTimeLimit ?? DEFAULT_TIME_LIMIT_MS);
  selectedRoomTimeLimit = normalizeTimeLimit(profile.roomTimeLimit || DEFAULT_TIME_LIMIT_MS);
  soundEnabled = profile.soundEnabled !== false;
  selectedSkin = skinClasses.includes(`theme-${profile.selectedSkin}`) ? profile.selectedSkin : "basic";

  localStorage.setItem("diceMath.clearCount", String(progress.clears));
  localStorage.setItem("diceMath.claimedSkins", JSON.stringify([...claimedSkinIds]));
  localStorage.setItem("diceMath.difficulty", selectedDifficulty);
  localStorage.setItem("diceMath.onlineDifficulty", selectedOnlineDifficulty);
  localStorage.setItem("diceMath.battleTargetScore", String(selectedBattleTargetScore));
  localStorage.setItem("diceMath.soloTimeLimit", String(selectedSoloTimeLimit));
  localStorage.setItem("diceMath.roomTimeLimit", String(selectedRoomTimeLimit));
  localStorage.setItem("diceMath.soundEnabled", String(soundEnabled));
  localStorage.setItem("diceMath.skin", selectedSkin);

  applySkin(selectedSkin, { closeSheet: false, skipProfileSave: true });
  renderProgress();
  renderDifficulty();
  renderOnlineDifficulty();
  renderBattleGoalOptions();
  renderSoloTimeLimitOptions();
  renderRoomTimeLimitOptions();
  renderSettings();

  suppressProfileSave = false;
}

async function loadFirebaseUserProfile() {
  if (!window.diceFirebase?.ensureUserProfile || !firebaseState.ready) return;

  try {
    const profile = await window.diceFirebase.ensureUserProfile(getLocalUserProfile());
    applyUserProfile(profile);
  } catch (error) {
    console.warn("Firebase 사용자 정보 불러오기 실패:", error);
  }
}

function scheduleUserProfileSave() {
  if (suppressProfileSave || !firebaseProfileReady || !firebaseState.ready || !window.diceFirebase?.saveUserProfile) return;
  if (profileSaveTimerId) clearTimeout(profileSaveTimerId);
  profileSaveTimerId = window.setTimeout(saveUserProfileNow, 450);
}

async function saveUserProfileNow() {
  profileSaveTimerId = null;
  if (!firebaseProfileReady || !firebaseState.ready || !window.diceFirebase?.saveUserProfile) return;

  try {
    firebaseUserProfile = {
      ...(firebaseUserProfile || {}),
      ...(await window.diceFirebase.saveUserProfile(getLocalUserProfile())),
    };
    renderSettings();
  } catch (error) {
    console.warn("Firebase 사용자 정보 저장 실패:", error);
  }
}

async function runFirebaseRoomCleanup() {
  if (!window.diceFirebase?.cleanupUserRooms) return;

  try {
    const userRoomResult = await window.diceFirebase.cleanupUserRooms();
    const removedCount = Number(userRoomResult.removedCount || 0);
    if (removedCount > 0) {
      firebaseState.status = `Firebase 연결됨 · 오래된 기록 ${removedCount}개 정리`;
      renderOnlineProgress();
    }
  } catch (error) {
    console.warn("Firebase 방 정리 실패:", error);
  }
}

function getNextRewardStatus() {
  const rewardSkin = getPendingRewardSkin();
  const pendingRewardGoal = rewardSkin
    ? Number(document.querySelector(`[data-skin="${rewardSkin}"]`)?.dataset.unlock || 0)
    : 0;
  const nextGoal = pendingRewardGoal || Math.ceil((progress.clears + 1) / 100) * 100;
  const remaining = nextGoal - progress.clears;
  const shortMessage = remaining <= 0 ? "새 스킨을 받을 수 있어요" : `다음 스킨까지 ${remaining}개`;

  return {
    nextGoal,
    remaining,
    shortMessage,
    resultMessage: remaining <= 0 ? "새 스킨을 받을 수 있어요." : `다음 스킨까지 ${remaining}개 남았어요.`,
  };
}

function getPendingRewardSkin() {
  const rewardButton = [...skinButtons].find((button) => {
    const unlockAt = Number(button.dataset.unlock || 0);
    return unlockAt > 0 && progress.clears >= unlockAt && !claimedSkinIds.has(button.dataset.skin);
  });
  return rewardButton?.dataset.skin || null;
}

function openRewardReveal(skin) {
  const unlockAt = document.querySelector(`[data-skin="${skin}"]`)?.dataset.unlock || 100;
  rewardKicker.textContent = `${unlockAt}개 달성!`;
  rewardTitle.textContent = "새 스킨 획득!";
  rewardCopy.textContent = `${skinNames[skin]}을 받았어요.`;
  rewardSwatch.className = `reward-swatch ${skin}`;
  rewardShell.classList.remove("breaking");
  rewardReveal.hidden = false;
  playRewardSound();

  window.setTimeout(() => {
    rewardShell.classList.add("breaking");
  }, 60);
}

function closeRewardReveal() {
  rewardReveal.hidden = true;
  rewardShell.classList.remove("breaking");
  renderProgress();
  updateSuccessRewardButton();
}

function openSkinSheet() {
  skinSheet.hidden = false;
}

function closeSkinSheet() {
  skinSheet.hidden = true;
}

function openSettingsSheet() {
  settingsNicknameInput.value = nicknameInput.value;
  renderSettings();
  settingsSheet.hidden = false;
  window.setTimeout(() => settingsNicknameInput.focus(), 40);
}

function closeSettingsSheet() {
  settingsSheet.hidden = true;
}

function renderSettings() {
  settingsVersion.textContent = APP_BUILD;
  settingsPublicId.textContent = firebaseUserProfile?.publicId || (firebaseState.ready ? "발급 중..." : "온라인 연결 후 표시됩니다");
  soundToggleButton.textContent = soundEnabled ? "켜짐" : "꺼짐";
  soundToggleButton.setAttribute("aria-pressed", String(soundEnabled));
  soundToggleButton.classList.toggle("off", !soundEnabled);
  settingsNicknameHelp.textContent = getNicknameWarning(settingsNicknameInput.value)
    || "닉네임은 온라인 대전에서 표시됩니다.";
}

function handleSettingsNicknameInput() {
  nicknameInput.value = settingsNicknameInput.value;
  const value = settingsNicknameInput.value.trim();
  nicknamePreview.textContent = value
    ? getNicknameWarning(value) || value
    : "닉네임을 정해주세요";
  renderSettings();
  scheduleUserProfileSave();
}

function toggleSoundSetting() {
  soundEnabled = !soundEnabled;
  localStorage.setItem("diceMath.soundEnabled", String(soundEnabled));
  renderSettings();
  scheduleUserProfileSave();
}

function resetLocalData() {
  if (!window.confirm("클리어 수와 스킨 보상을 초기화할까요?")) return;

  Object.keys(localStorage)
    .filter((key) => key.startsWith("diceMath:record:"))
    .forEach((key) => localStorage.removeItem(key));
  progress.clears = 0;
  localStorage.setItem("diceMath.clearCount", "0");
  claimedSkinIds.clear();
  defaultClaimedSkins.forEach((skin) => claimedSkinIds.add(skin));
  localStorage.setItem("diceMath.claimedSkins", JSON.stringify([...claimedSkinIds]));
  selectedDifficulty = "basic";
  selectedOnlineDifficulty = "basic";
  selectedBattleTargetScore = DEFAULT_BATTLE_TARGET_SCORE;
  soundEnabled = true;
  localStorage.setItem("diceMath.difficulty", selectedDifficulty);
  localStorage.setItem("diceMath.onlineDifficulty", selectedOnlineDifficulty);
  localStorage.setItem("diceMath.battleTargetScore", String(selectedBattleTargetScore));
  localStorage.setItem("diceMath.soundEnabled", "true");
  applySkin("basic", { closeSheet: false });
  renderDifficulty();
  renderOnlineDifficulty();
  renderBattleGoalOptions();
  renderProgress();
  renderSettings();
  scheduleUserProfileSave();
}

function renderDifficulty() {
  difficultyCards.forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === selectedDifficulty);
  });
  gameDifficultyLabel.textContent = selectedDifficulty === "power" ? "지수 포함" : "사칙연산";
  gamePowerOp.classList.toggle("hidden-op", selectedDifficulty !== "power");
  battlePowerOp.classList.toggle("hidden-op", selectedDifficulty !== "power");
  renderInputState();
}

function normalizeBattleTargetScore(value) {
  const score = Math.min(MAX_BATTLE_TARGET_SCORE, Math.max(100, Number(value || DEFAULT_BATTLE_TARGET_SCORE)));
  if ([100, 200, 300, 500].includes(score)) return score;
  return DEFAULT_BATTLE_TARGET_SCORE;
}

function normalizeTimeLimit(value) {
  const limit = Number(value || DEFAULT_TIME_LIMIT_MS);
  return limit === SHORT_TIME_LIMIT_MS ? SHORT_TIME_LIMIT_MS : DEFAULT_TIME_LIMIT_MS;
}

function normalizeSoloTimeLimit(value) {
  const limit = Number(value ?? DEFAULT_TIME_LIMIT_MS);
  if (limit === UNLIMITED_TIME_LIMIT_MS) return UNLIMITED_TIME_LIMIT_MS;
  return normalizeTimeLimit(limit);
}

function normalizeSpeedrunTimeLimit(value) {
  const limit = Number(value || DEFAULT_SPEEDRUN_TIME_LIMIT_MS);
  if (limit >= DEFAULT_SPEEDRUN_TIME_LIMIT_MS
    && limit <= MAX_SPEEDRUN_TIME_LIMIT_MS
    && limit % DEFAULT_SPEEDRUN_TIME_LIMIT_MS === 0) {
    return limit;
  }
  return DEFAULT_SPEEDRUN_TIME_LIMIT_MS;
}

function renderBattleGoalOptions() {
  battleGoalButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.scoreGoal) === selectedBattleTargetScore);
  });
}

function renderSoloTimeLimitOptions() {
  soloTimeLimitButtons.forEach((button) => {
    button.classList.toggle("active", normalizeSoloTimeLimit(button.dataset.soloTimeLimit) === selectedSoloTimeLimit);
  });
}

function renderRoomTimeLimitOptions() {
  roomTimeLimitButtons.forEach((button) => {
    button.classList.toggle("active", normalizeTimeLimit(button.dataset.roomTimeLimit) === selectedRoomTimeLimit);
  });
}

function renderSpeedrunTimeLimitOptions() {
  speedrunTimeLimitButtons.forEach((button) => {
    button.classList.toggle("active", normalizeSpeedrunTimeLimit(button.dataset.speedrunTimeLimit) === selectedSpeedrunTimeLimit);
  });
}

function renderSpeedrunProblemTimeLimitOptions() {
  speedrunProblemTimeLimitButtons.forEach((button) => {
    button.classList.toggle("active", normalizeTimeLimit(button.dataset.speedrunProblemTimeLimit) === selectedSpeedrunProblemTimeLimit);
  });
}

function openSoloSheet() {
  selectedDifficulty = localStorage.getItem("diceMath.difficulty") || "basic";
  selectedSoloTimeLimit = normalizeSoloTimeLimit(localStorage.getItem("diceMath.soloTimeLimit") ?? selectedSoloTimeLimit);
  renderDifficulty();
  renderSoloTimeLimitOptions();
  soloSheet.hidden = false;
}

function closeSoloSheet() {
  soloSheet.hidden = true;
}

function openJoinCodeSheet() {
  joinCodeInput.value = "";
  joinCodeSheet.hidden = false;
  window.setTimeout(() => joinCodeInput.focus(), 40);
}

function closeJoinCodeSheet() {
  joinCodeSheet.hidden = true;
}

function openSpeedrunCreateSheet() {
  if (blockInvalidNicknameEntry()) return;
  renderSpeedrunTimeLimitOptions();
  renderSpeedrunProblemTimeLimitOptions();
  speedrunCreateSheet.hidden = false;
}

function closeSpeedrunCreateSheet() {
  speedrunCreateSheet.hidden = true;
}

function openOnlineDifficultySheet() {
  if (blockInvalidNicknameEntry()) return;
  renderOnlineDifficulty();
  onlineDifficultySheet.hidden = false;
}

function closeOnlineDifficultySheet() {
  onlineDifficultySheet.hidden = true;
}

function renderOnlineDifficulty() {
  onlineDifficultyButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.onlineDifficulty === selectedOnlineDifficulty);
  });
}

async function joinRoomWithCode() {
  if (blockInvalidNicknameEntry()) return;
  const code = joinCodeInput.value.trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{6}$/.test(code)) {
    joinCodeInput.focus();
    return;
  }
  closeJoinCodeSheet();
  await joinOnlineRoom(code);
}

async function createOnlineRoom(mode, playerCount, sourceButton) {
  if (blockInvalidNicknameEntry()) return;
  await firebaseInitPromise;

  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) {
    openBattleLobby(mode, playerCount);
    battleRuleNote.textContent = `${getBattleRuleNote(mode)} · 목업 방`;
    return;
  }

  setButtonBusy(sourceButton, "방 만드는 중...");

  try {
    const result = await window.diceFirebase.createRoom({
      mode,
      playerCount,
      nickname: getOnlineNickname(),
      difficulty: selectedOnlineDifficulty,
      targetScore: selectedBattleTargetScore,
      timeLimit: selectedRoomTimeLimit,
    });
    openBattleLobby(mode, playerCount, result.code, {
      firebaseRoomCode: result.code,
      isHost: true,
      room: result.room,
    });
    battleRuleNote.textContent = `${getBattleRuleNote(mode)} · Firebase 방 생성됨`;
  } catch (error) {
    console.warn("Firebase 방 생성 실패:", error);
    openBattleLobby(mode, playerCount);
    battleRuleNote.textContent = `${getBattleRuleNote(mode)} · Firebase 실패, 목업 방`;
  } finally {
    clearButtonBusy(sourceButton);
  }
}

async function createSpeedrunRoom(sourceButton) {
  if (blockInvalidNicknameEntry()) return;
  await firebaseInitPromise;

  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) {
    battleRuleNote.textContent = "Firebase 연결 후 스피드런 대회방을 만들 수 있습니다.";
    return;
  }

  setButtonBusy(sourceButton, "대회방 만드는 중...");

  try {
    const result = await window.diceFirebase.createSpeedrunRoom({
      nickname: getOnlineNickname(),
      difficulty: selectedOnlineDifficulty,
      timeLimit: selectedSpeedrunTimeLimit,
      problemTimeLimit: selectedSpeedrunProblemTimeLimit,
      playerLimit: SPEEDRUN_PLAYER_LIMIT,
      targetSolves: SPEEDRUN_TARGET_SOLVES,
    });
    closeSpeedrunCreateSheet();
    openBattleLobby(SPEEDRUN_MODE_NAME, SPEEDRUN_PLAYER_LIMIT, result.code, {
      firebaseRoomCode: result.code,
      isHost: true,
      room: result.room,
    });
    battleRuleNote.textContent = getBattleRuleNote(SPEEDRUN_MODE_NAME);
  } catch (error) {
    console.warn("Firebase 스피드런 대회방 생성 실패:", error);
    const message = error?.code ? `스피드런 대회방 생성 실패: ${error.code}` : "스피드런 대회방 생성에 실패했습니다.";
    battleRuleNote.textContent = `${message} Firebase 규칙 게시와 최신 파일 업로드를 확인해 주세요.`;
  } finally {
    clearButtonBusy(sourceButton);
  }
}

async function joinAutoMatch(playerCount, sourceButton) {
  if (blockInvalidNicknameEntry()) return;
  const mode = `${playerCount}인 자동매칭`;
  await firebaseInitPromise;

  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) {
    battleRuleNote.textContent = "Firebase 연결 후 자동매칭을 다시 시도해 주세요.";
    return;
  }

  setButtonBusy(sourceButton, "매칭 중...");

  try {
    const result = await window.diceFirebase.findOrCreateMatch({
      playerCount,
      nickname: getOnlineNickname(),
      difficulty: selectedOnlineDifficulty,
      targetScore: selectedBattleTargetScore,
    });
    openBattleLobby(mode, playerCount, result.code, {
      firebaseRoomCode: result.code,
      isHost: result.room?.hostUid === window.diceFirebase.getUid(),
      room: result.room,
    });
    battleRuleNote.textContent = `${getBattleRuleNote(mode)} · Firebase 자동매칭 대기 중`;
  } catch (error) {
    console.warn("Firebase 자동매칭 실패:", error);
    battleRuleNote.textContent = "자동매칭에 실패했습니다. 잠시 후 다시 시도해 주세요.";
  } finally {
    clearButtonBusy(sourceButton);
  }
}

async function joinOnlineRoom(code) {
  await firebaseInitPromise;

  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) {
    openBattleLobby("코드 참가 방", 4, code, { isHost: false });
    battleRuleNote.textContent = `${getBattleRuleNote("코드 참가 방")} · 목업 방`;
    return;
  }

  setButtonBusy(joinCodeSubmit, "참가 중...");

  try {
    const result = await window.diceFirebase.joinRoom(code, {
      nickname: getOnlineNickname(),
    });
    const mode = result.room?.mode || "코드 참가 방";
    const playerCount = Number(result.room?.playerCount || 4);
    openBattleLobby(mode, playerCount, result.code, {
      firebaseRoomCode: result.code,
      isHost: result.room?.hostUid === window.diceFirebase.getUid(),
      room: result.room,
    });
    battleRuleNote.textContent = `${getBattleRuleNote(mode)} · Firebase 방 참가됨`;
  } catch (error) {
    console.warn("Firebase 방 참가 실패:", error);
    openJoinCodeSheet();
    joinCodeInput.value = code;
    joinCodeInput.focus();
  } finally {
    clearButtonBusy(joinCodeSubmit);
  }
}

function getOnlineNickname() {
  const nickname = cleanLocalNickname(nicknameInput.value);
  if (nicknameInput.value.trim() && nickname === DEFAULT_NICKNAME) {
    nicknamePreview.textContent = "사용할 수 없는 닉네임이에요";
  }
  if (nicknameInput.value.trim() && nickname === "나의 닉네임") {
    nicknamePreview.textContent = "사용할 수 없는 닉네임이에요";
  }
  return nickname;
}

function hasInvalidNicknameEntry() {
  const value = nicknameInput.value.trim();
  return Boolean(value && !isNicknameAllowed(value));
}

function blockInvalidNicknameEntry() {
  if (!hasInvalidNicknameEntry()) return false;

  const message = "닉네임을 먼저 수정해 주세요.";
  nicknamePreview.textContent = "사용할 수 없는 닉네임이에요";
  if (settingsSheet.hidden) {
    openSettingsSheet();
  }
  settingsNicknameHelp.textContent = message;
  settingsNicknameInput.focus();
  return true;
}

function normalizeNicknameText(value) {
  return String(value || "")
    .normalize("NFKC")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "")
    .toLowerCase();

  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^\p{L}\p{N}ㄱ-ㅎㅏ-ㅣ가-힣]/gu, "")
    .toLowerCase();
}

function isNicknameAllowed(value) {
  const normalized = normalizeNicknameText(value);
  if (!normalized) return true;
  return ![...bannedNicknamePatterns, ...extraBannedNicknamePatterns]
    .some((pattern) => pattern.test(normalized));
}

function getNicknameWarning(value) {
  return isNicknameAllowed(value) ? "" : "사용할 수 없는 닉네임이에요";
}

function cleanLocalNickname(value) {
  const cleaned = String(value || "").trim().slice(0, 10);
  if (!cleaned || !isNicknameAllowed(cleaned)) return "나의 닉네임";
  return cleaned;
}

function setButtonBusy(button, label) {
  if (!button) return;
  button.dataset.originalHtml = button.innerHTML;
  button.disabled = true;
  button.textContent = label;
}

function clearButtonBusy(button) {
  if (!button) return;
  button.disabled = false;
  if (button.dataset.originalHtml) {
    button.innerHTML = button.dataset.originalHtml;
    delete button.dataset.originalHtml;
  }
}

function openOnlineScreen() {
  closeSoloSheet();
  closeJoinCodeSheet();
  closeSpeedrunCreateSheet();
  closeSettingsSheet();
  closeOnlineDifficultySheet();
  closeSuccessResult();
  battleFinalModal.hidden = true;
  applyOnlineDifficulty(selectedOnlineDifficulty);
  stopTimer();
  clearCountdown();
  clearRoll();
  clearRoomSubscription();
  renderOnlineProgress();
  resetMockBattle();
  home.classList.remove("active");
  gameScreen.classList.remove("active");
  onlineScreen.classList.add("active");
  setOnlinePhase("menu");
}

function handleOnlineBackClick() {
  if (battleState.phase === "menu") {
    openHome();
    return;
  }

  leaveCurrentRoom();
}

function openBattleLobby(mode, playerCount = 4, roomCode = createRoomCode(), options = {}) {
  clearRoomSubscription();
  clearBattleTimers();
  battleState.roomMode = mode;
  battleState.playerCount = playerCount;
  battleState.targetScore = normalizeBattleTargetScore(options.room?.targetScore || selectedBattleTargetScore);
  battleState.timeLimit = isSpeedrunMode(mode)
    ? normalizeSpeedrunTimeLimit(options.room?.timeLimit || selectedSpeedrunTimeLimit)
    : normalizeTimeLimit(options.room?.timeLimit || selectedRoomTimeLimit);
  battleState.round = 0;
  battleState.players = options.firebaseRoomCode || options.room ? [] : createMockPlayers(playerCount);
  battleState.phase = "lobby";
  battleState.firebaseRoomCode = options.firebaseRoomCode || null;
  battleState.isHost = options.isHost ?? !mode.includes("자동매칭");
  battleState.statusMap = {};
  battleState.submissions = [];
  battleState.currentProblem = null;
  battleState.firebaseRoomSnapshot = null;
  battleState.firebaseSolveStartedAt = null;
  battleState.autoStartPaused = false;
  battleState.firebaseResultShown = false;
  battleState.firebaseResultRound = null;
  battleState.firebaseAutoStartKey = null;
  battleState.firebaseTimeoutKey = null;
  battleState.speedrunProblemIndex = 0;
  battleState.speedrunStartKey = null;
  battleState.speedrunFinishKey = null;
  battlePassButton.hidden = true;
  battleState.speedrunProblemIndex = 0;
  battleState.speedrunStartKey = null;
  battleState.speedrunFinishKey = null;
  roomCodeLabel.textContent = roomCode;
  updateBattleRoomCode(roomCode);
  lobbyModeLabel.textContent = progress.clears >= progress.onlineGoal ? mode : `${mode} 미리보기`;
  battleRuleNote.textContent = getBattleRuleNote(mode);
  if (options.room) applyFirebaseRoomSnapshot(options.room);
  else renderLobbyPlayers();
  onlinePlayerName.textContent = getCurrentBattlePlayer()?.name || battleState.players[0]?.name || getOnlineNickname();
  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  onlineReadyButton.disabled = false;
  onlineReadyButton.textContent = "모두 준비 완료 미리보기";
  if (battleState.firebaseRoomCode) {
    lobbyModeLabel.textContent = `${mode} · Firebase`;
    subscribeToFirebaseRoom(battleState.firebaseRoomCode);
  }
  updateRoomActionState();
  updateHostControlButton();
  renderScoreBoard();
  renderBattleTimeLimit();
  setOnlinePhase("lobby");
}

async function leaveCurrentRoom() {
  await leaveFirebaseRoomIfNeeded();
  openOnlineScreen();
}

async function leaveFirebaseRoomIfNeeded() {
  const roomCode = battleState.firebaseRoomCode;
  const canLeaveFirebaseRoom = Boolean(roomCode && firebaseState.ready && window.diceFirebase?.isEnabled());

  clearRoomSubscription();

  if (canLeaveFirebaseRoom) {
    try {
      await window.diceFirebase.leaveRoom(roomCode);
    } catch (error) {
      console.warn("Firebase 방 나가기 실패:", error);
    }
  }
}

function subscribeToFirebaseRoom(roomCode) {
  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) return;

  try {
    battleState.roomUnsubscribe = window.diceFirebase.watchRoom(roomCode, (room) => {
      if (!room) {
        clearRoomSubscription();
        if (window.diceFirebase?.cleanupUserRooms) {
          window.diceFirebase.cleanupUserRooms().catch((error) => {
            console.warn("Firebase userRooms 정리 실패:", error);
          });
        }
        battleRuleNote.textContent = "방장이 나가서 방이 종료되었습니다.";
        openOnlineScreen();
        return;
      }
      applyFirebaseRoomSnapshot(room);
    });
  } catch (error) {
    console.warn("Firebase 방 구독 실패:", error);
  }
}

function clearRoomSubscription() {
  clearSoloLobbyWaitTimer();
  if (!battleState.roomUnsubscribe) return;
  battleState.roomUnsubscribe();
  battleState.roomUnsubscribe = null;
}

function clearSoloLobbyWaitTimer() {
  if (battleState.soloLobbyTimerId) {
    clearTimeout(battleState.soloLobbyTimerId);
    battleState.soloLobbyTimerId = null;
  }
  battleState.soloLobbyDeadline = null;
}

function scheduleSoloLobbyWaitTimer(room) {
  const playerTotal = Object.keys(room.players || {}).length;
  const shouldTrackSoloRoom = battleState.firebaseRoomCode
    && playerTotal === 1
    && (
      (room.speedrun === true && room.phase !== "final")
      || (room.speedrun !== true && room.phase === "lobby")
    );

  if (!shouldTrackSoloRoom) {
    clearSoloLobbyWaitTimer();
    return;
  }

  if (room.speedrun === true && battleState.soloLobbyTimerId && battleState.soloLobbyDeadline) {
    return;
  }

  const baseAt = Number(room.updatedAt || room.createdAt || Date.now());
  const deadline = baseAt + SOLO_LOBBY_MAX_WAIT_MS;
  if (battleState.soloLobbyDeadline === deadline && battleState.soloLobbyTimerId) return;

  clearSoloLobbyWaitTimer();
  battleState.soloLobbyDeadline = deadline;
  battleState.soloLobbyTimerId = window.setTimeout(async () => {
    battleState.soloLobbyTimerId = null;
    battleState.soloLobbyDeadline = null;
    const snapshot = battleState.firebaseRoomSnapshot || {};
    const stillSoloLobby = Object.keys(snapshot.players || {}).length === 1
      && (
        (snapshot.speedrun === true && snapshot.phase !== "final")
        || (snapshot.speedrun !== true && snapshot.phase === "lobby")
      );
    if (!stillSoloLobby) return;

    battleRuleNote.textContent = snapshot.speedrun === true
      ? "혼자 남은 지 2분이 지나 스피드런 방이 정리되었습니다."
      : "1인 대기가 2분을 넘어 방이 정리되었습니다. 다시 신청해 주세요.";
    await leaveCurrentRoom();
  }, Math.max(0, deadline - getFirebaseNow()));
}

function applyFirebaseRoomSnapshot(room) {
  const uid = window.diceFirebase?.getUid();
  const incomingRound = Number(room.round || battleState.round);
  const roundChanged = incomingRound !== battleState.round;

  if (roundChanged) {
    battleState.firebaseResultShown = false;
    battleState.firebaseResultRound = null;
    battleState.firebaseAutoStartKey = null;
    battleState.firebaseTimeoutKey = null;
    clearAutoStartTimers();
  }

  const players = Object.entries(room.players || {})
    .map(([id, player]) => {
      const joinedAt = Number(player.joinedAt || 0);
      return {
        id,
        name: player.name || "이름 없음",
        score: Number(player.score || 0),
        status: player.status || "준비 전",
        ready: Boolean(player.ready || player.status === "준비 완료"),
        isHost: Boolean(player.isHost || room.hostUid === id),
        activeRound: Number(player.activeRound || 0),
        waitingNextRound: Boolean(player.waitingNextRound || player.status === "다음 라운드 대기"),
        solvedCount: Number(player.solvedCount || 0),
        passedCount: Number(player.passedCount || 0),
        currentIndex: Number(player.currentIndex || 0),
        finished: Boolean(player.finished),
        finishTime: Number(player.finishTime || 0),
        problemStartedAt: Number(player.problemStartedAt || 0),
        joinedAt: Number.isFinite(joinedAt) ? joinedAt : 0,
      };
    })
    .sort((a, b) => {
      if (a.id === uid) return -1;
      if (b.id === uid) return 1;
      if (a.isHost !== b.isHost) return a.isHost ? -1 : 1;
      return a.joinedAt - b.joinedAt;
    });

  const currentPlayer = players.find((player) => player.id === uid) || null;
  const isCurrentUserHost = Boolean(currentPlayer?.isHost || room.hostUid === uid);

  battleState.roomMode = room.mode || battleState.roomMode;
  battleState.targetScore = normalizeBattleTargetScore(room.targetScore || battleState.targetScore);
  battleState.firebaseRoomSnapshot = room;
  battleState.timeLimit = isSpeedrunMode(room.mode)
    ? normalizeSpeedrunTimeLimit(room.timeLimit || battleState.timeLimit || selectedSpeedrunTimeLimit)
    : normalizeTimeLimit(room.timeLimit || battleState.timeLimit);
  battleState.playerCount = Number(room.playerCount || battleState.playerCount);
  battleState.round = incomingRound;
  battleState.players = players.length ? players : battleState.players;
  battleState.isHost = isCurrentUserHost;
  battleState.autoStartPaused = Boolean(room.autoStartPaused);
  applyOnlineDifficulty(room.difficulty);

  lobbyModeLabel.textContent = isAutoMatchRoom()
    ? `${battleState.roomMode} · Firebase`
    : `${battleState.roomMode} · Firebase · ${battleState.isHost ? "방장" : "참가자"}`;
  battleRuleNote.textContent = getBattleRuleNote(battleState.roomMode);
  onlinePlayerName.textContent = getCurrentBattlePlayer()?.name || getOnlineNickname();
  renderLobbyPlayers();
  renderScoreBoard();
  renderBattleTimeLimit();
  updateRoomActionState();
  updateHostControlButton();
  scheduleSoloLobbyWaitTimer(room);

  if (isSpeedrunMode(room.mode)) {
    handleSpeedrunRoomUpdate(room, currentPlayer);
    return;
  }

  if (room.phase === "playing" && currentPlayer?.waitingNextRound) {
    enterFirebaseNextRoundWaiting(room);
    return;
  }

  maybeStartFullAutoMatch(room);

  if (room.phase === "playing" && !battleState.firebaseResultShown) {
    enterFirebaseRound(room);
    handleFirebaseRoundCompletion(room);
    return;
  }

  if (room.phase === "result") {
    enterFirebaseResult(room);
    return;
  }

  if (room.phase === "final") {
    enterFirebaseFinal(room);
  }
}

function applyOnlineDifficulty(difficulty) {
  const nextDifficulty = difficulty === "power" ? "power" : "basic";
  if (selectedDifficulty === nextDifficulty) return;
  selectedDifficulty = nextDifficulty;
  renderDifficulty();
}

function renderLobbyPlayers() {
  const uid = window.diceFirebase?.getUid();
  playerList.replaceChildren(
    ...battleState.players.map((player, index) => {
      const isMe = player.id === uid || (!uid && index === 0);
      const row = document.createElement("div");
      const badge = document.createElement("span");
      const name = document.createElement("strong");
      const score = document.createElement("em");
      const status = document.createElement("small");

      row.className = `player-row${isMe ? " me" : ""}`;
      badge.className = "player-badge";
      badge.textContent = isMe ? "나" : String(index + 1);
      name.textContent = player.isHost && !isAutoMatchRoom() ? `${player.name} 방장` : player.name;
      score.textContent = isSpeedrunMode()
        ? `${Number(player.solvedCount || 0)}/${SPEEDRUN_TARGET_SOLVES}`
        : `${Number(player.score || 0)}점`;
      status.textContent = isSpeedrunMode() && player.passedCount
        ? `${player.status || "진행 중"} · 패스 ${player.passedCount}`
        : player.status || (isMe ? "준비 전" : "기다리는 중");
      row.append(badge, name, score, status);
      return row;
    })
  );
}

function enterFirebaseNextRoundWaiting(room) {
  clearBattleTimers();
  setOnlinePhase("lobby");
  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${Number(room.round || battleState.round)}라운드 진행 중`;
  updateBattleRoomCode(room.code || battleState.firebaseRoomCode);
  battleRuleNote.textContent = "이미 시작된 라운드라서 다음 문제부터 참가합니다.";
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "다음 라운드 대기";
  renderLobbyPlayers();
  renderScoreBoard();
}

function getCurrentBattlePlayer() {
  const uid = window.diceFirebase?.getUid();
  return battleState.players.find((player) => player.id === uid) || battleState.players[0] || null;
}

function updateRoomActionState() {
  if (!battleState.firebaseRoomCode) return;

  if (battleState.phase === "lobby") {
    const currentPlayer = getCurrentBattlePlayer();

    if (isSpeedrunMode()) {
      const isReady = isPlayerReady(currentPlayer);
      const hasEnoughPlayers = battleState.players.length >= SPEEDRUN_MIN_START_PLAYERS;
      const allReady = hasEnoughPlayers && battleState.players.every(isPlayerReady);

      if (!isReady) {
        onlineReadyButton.disabled = false;
        onlineReadyButton.textContent = "대회 준비하기";
        return;
      }

      if (!battleState.isHost) {
        onlineReadyButton.disabled = true;
        onlineReadyButton.textContent = "준비 완료 · 방장 시작 대기";
        return;
      }

      onlineReadyButton.disabled = !allReady;
      onlineReadyButton.textContent = allReady
        ? "스피드런 시작"
        : `참가자 준비 대기 ${battleState.players.length}/${SPEEDRUN_MIN_START_PLAYERS}+`;
      return;
    }

    if (isAutoMatchRoom()) {
      const matched = Math.min(battleState.players.length, battleState.playerCount);
      onlineReadyButton.disabled = true;
      onlineReadyButton.textContent = matched >= battleState.playerCount
        ? "매칭 완료 · 곧 시작"
        : `매칭 중 ${matched}/${battleState.playerCount}`;
      return;
    }

    if (currentPlayer?.waitingNextRound) {
      onlineReadyButton.disabled = true;
      onlineReadyButton.textContent = "다음 라운드 대기";
      return;
    }

    const isReady = isPlayerReady(currentPlayer);
    const hasEnoughPlayers = battleState.players.length >= 2;
    const allReady = hasEnoughPlayers && battleState.players.every(isPlayerReady);

    if (!isReady) {
      onlineReadyButton.disabled = false;
      onlineReadyButton.textContent = "준비하기";
      return;
    }

    if (!battleState.isHost) {
      onlineReadyButton.disabled = true;
      onlineReadyButton.textContent = "준비 완료 · 방장 시작 대기";
      return;
    }

    onlineReadyButton.disabled = !allReady;
    onlineReadyButton.textContent = allReady ? "게임 시작" : "다른 참가자 준비 대기";
    return;
  }

  if (battleState.phase === "result" && !battleState.isHost) {
    onlineReadyButton.disabled = true;
    onlineReadyButton.textContent = "방장 다음 문제 대기";
  }
}

function isPlayerReady(player) {
  return Boolean(player?.ready || player?.status === "준비 완료");
}

async function handleOnlineReadyClick() {
  if (!battleState.firebaseRoomCode) {
    startMockBattleRound();
    return;
  }

  const currentPlayer = getCurrentBattlePlayer();

  if (!isPlayerReady(currentPlayer)) {
    await setCurrentPlayerReady();
    return;
  }

  const minPlayers = isSpeedrunMode() ? SPEEDRUN_MIN_START_PLAYERS : 2;
  const allReady = battleState.players.length >= minPlayers && battleState.players.every(isPlayerReady);

  if (!battleState.isHost || !allReady) {
    updateRoomActionState();
    return;
  }

  if (isSpeedrunMode()) {
    await startSpeedrunSignal();
    return;
  }

  await startFirebaseRoundSignal();
}

async function startFirebaseRoundSignal() {
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.isEnabled()) return;

  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "게임 시작 중...";

  try {
    await window.diceFirebase.startRound(battleState.firebaseRoomCode, createSolvableProblem());
  } catch (error) {
    console.warn("Firebase 라운드 시작 실패:", error);
    battleRuleNote.textContent = "라운드 시작에 실패했습니다. 준비 상태를 확인해 주세요.";
    updateRoomActionState();
  }
}

async function startSpeedrunSignal() {
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.isEnabled()) return;

  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "대회 시작 중...";

  try {
    const problemSet = createSpeedrunProblemSet();
    await window.diceFirebase.startSpeedrun(battleState.firebaseRoomCode, {
      problemSet,
      timeLimit: battleState.timeLimit || selectedSpeedrunTimeLimit,
      targetSolves: SPEEDRUN_TARGET_SOLVES,
    });
  } catch (error) {
    console.warn("Firebase 스피드런 시작 실패:", error);
    battleRuleNote.textContent = "스피드런 시작에 실패했습니다. 준비 상태를 확인해 주세요.";
    updateRoomActionState();
  }
}

function maybeStartFullAutoMatch(room) {
  if (!isAutoMatchRoom() || room.phase !== "lobby" || !battleState.isHost) return;
  if (battleState.players.length < battleState.playerCount) return;

  const autoStartKey = `${battleState.firebaseRoomCode}:${room.round || 0}:${battleState.players.length}`;
  if (battleState.firebaseAutoStartKey === autoStartKey) return;
  battleState.firebaseAutoStartKey = autoStartKey;

  window.setTimeout(() => {
    if (battleState.phase === "lobby" && isAutoMatchRoom()) {
      startFirebaseRoundSignal();
    }
  }, 700);
}

function getFirebaseNow() {
  return window.diceFirebase?.getServerNow ? window.diceFirebase.getServerNow() : Date.now();
}

function getFirebaseSolveStartedAt(room) {
  const rawStartedAt = Number(room?.roundStartedAt || 0);
  if (Number.isFinite(rawStartedAt) && rawStartedAt > 0) {
    return rawStartedAt + FIREBASE_REVEAL_DELAY_MS;
  }

  return battleState.firebaseSolveStartedAt || getFirebaseNow();
}

function getFirebaseRoundElapsedMs() {
  if (!battleState.firebaseSolveStartedAt) return 0;
  const limit = getBattleTimeLimitMs();
  return Math.max(0, Math.min(limit, getFirebaseNow() - battleState.firebaseSolveStartedAt));
}

function getBattleElapsedMs() {
  if (battleState.firebaseRoomCode) return getFirebaseRoundElapsedMs();
  return Math.max(0, performance.now() - battleState.roundStartedAt);
}

function getBattleTimeLimitMs() {
  return normalizeTimeLimit(battleState.timeLimit || DEFAULT_TIME_LIMIT_MS);
}

function getTimeLimitSeconds(limit = getBattleTimeLimitMs()) {
  return Math.round(normalizeTimeLimit(limit) / 1000);
}

function renderBattleTimeLimit() {
  if (battleTimeLimitLabel) {
    battleTimeLimitLabel.textContent = isSpeedrunMode()
      ? `총 남은 ${formatDurationClock(battleState.timeLimit || selectedSpeedrunTimeLimit)}`
      : `제한시간 ${getTimeLimitSeconds()}초`;
  }
}

function startFirebaseRoundClock(room) {
  battleState.firebaseSolveStartedAt = getFirebaseSolveStartedAt(room);

  if (battleState.roundTimerId) clearInterval(battleState.roundTimerId);
  if (battleState.roundEndTimerId) clearTimeout(battleState.roundEndTimerId);

  const updateClock = () => {
    const elapsed = getFirebaseRoundElapsedMs();
    const limit = getBattleTimeLimitMs();
    updateBattleElapsed(elapsed);
    if (elapsed >= limit) {
      maybeSubmitFirebaseTimeouts(battleState.firebaseRoomSnapshot);
      handleFirebaseRoundTimeout();
    }
  };

  updateClock();
  battleState.roundTimerId = window.setInterval(updateClock, 250);
  battleState.roundEndTimerId = window.setTimeout(updateClock, Math.max(0, getBattleTimeLimitMs() - getFirebaseRoundElapsedMs()));
}

function syncFirebaseRoundClock() {
  if (battleState.phase !== "playing" || !battleState.firebaseRoomCode || !battleState.firebaseSolveStartedAt) return;
  const elapsed = getFirebaseRoundElapsedMs();
  const limit = getBattleTimeLimitMs();
  updateBattleElapsed(elapsed);
  if (elapsed >= limit) {
    maybeSubmitFirebaseTimeouts(battleState.firebaseRoomSnapshot);
    handleFirebaseRoundTimeout();
  }
}

function handleSpeedrunRoomUpdate(room, currentPlayer) {
  battlePassButton.hidden = room.phase !== "playing";

  if (room.phase === "lobby") {
    setOnlinePhase("lobby");
    battleRoundPanel.hidden = true;
    battleResultSummary.hidden = true;
    battleResultList.hidden = true;
    battleResultList.replaceChildren();
    battleAdSlot.hidden = true;
    updateRoomActionState();
    return;
  }

  if (room.phase === "playing") {
    enterSpeedrunRound(room, currentPlayer);
    maybeFinishSpeedrun(room);
    return;
  }

  if (room.phase === "final") {
    enterSpeedrunFinal(room);
  }
}

function getSpeedrunSolveStartedAt(room) {
  const rawStartedAt = Number(room?.startedAt || 0);
  if (Number.isFinite(rawStartedAt) && rawStartedAt > 0) {
    return rawStartedAt + FIREBASE_REVEAL_DELAY_MS;
  }
  return battleState.firebaseSolveStartedAt || getFirebaseNow();
}

function getSpeedrunElapsedMs() {
  if (!battleState.firebaseSolveStartedAt) return 0;
  const limit = normalizeSpeedrunTimeLimit(battleState.timeLimit);
  return Math.max(0, Math.min(limit, getFirebaseNow() - battleState.firebaseSolveStartedAt));
}

function getSpeedrunProblemTimeLimitMs(room = battleState.firebaseRoomSnapshot || {}) {
  return normalizeTimeLimit(room.problemTimeLimit || selectedSpeedrunProblemTimeLimit);
}

function getSpeedrunProblemElapsedMs(player = getCurrentBattlePlayer()) {
  const rawStartedAt = Number(player?.problemStartedAt || 0);
  const startedAt = Math.max(rawStartedAt || 0, battleState.firebaseSolveStartedAt || 0) || getFirebaseNow();
  return Math.max(0, getFirebaseNow() - startedAt);
}

function updateSpeedrunClockDisplay(room = battleState.firebaseRoomSnapshot || {}) {
  const totalLimit = normalizeSpeedrunTimeLimit(battleState.timeLimit || room.timeLimit);
  const totalRemaining = Math.max(0, totalLimit - getSpeedrunElapsedMs());
  const problemLimit = getSpeedrunProblemTimeLimitMs(room);
  const problemRemaining = Math.max(0, problemLimit - getSpeedrunProblemElapsedMs());

  if (battleTimeLimitLabel) {
    battleTimeLimitLabel.textContent = `총 남은 ${formatDurationClock(totalRemaining)}`;
  }
  battleElapsed.textContent = `문제 ${formatDurationClock(problemRemaining)}`;
}

function getSpeedrunProblemSet(room) {
  const rawSet = Array.isArray(room.problemSet)
    ? room.problemSet
    : Object.keys(room.problemSet || {})
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => room.problemSet[key]);
  return rawSet.map(normalizeFirebaseProblem).filter(Boolean);
}

function enterSpeedrunRound(room, currentPlayer) {
  clearAutoStartTimers();
  setOnlinePhase("playing");
  battleRoundPanel.hidden = false;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  battlePassButton.hidden = false;
  battleState.firebaseSolveStartedAt = getSpeedrunSolveStartedAt(room);
  battleState.timeLimit = normalizeSpeedrunTimeLimit(room.timeLimit || battleState.timeLimit);
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${formatMinutes(battleState.timeLimit)}분`;
  updateBattleRoomCode(room.code || battleState.firebaseRoomCode);
  renderBattleStatuses();
  renderScoreBoard();
  startSpeedrunClock(room);

  if (getFirebaseNow() < battleState.firebaseSolveStartedAt) {
    beginSpeedrunRevealCountdown(room, currentPlayer);
    return;
  }

  renderSpeedrunCurrentProblem(room, currentPlayer);
}

function beginSpeedrunRevealCountdown(room, currentPlayer) {
  const startKey = `${battleState.firebaseRoomCode}:${room.startedAt || 0}`;
  if (battleState.speedrunStartKey === startKey && battleState.countdownTimerId) return;
  battleState.speedrunStartKey = startKey;
  if (battleState.countdownTimerId) clearInterval(battleState.countdownTimerId);

  setBattleInputEnabled(false);
  battlePassButton.disabled = true;
  battleCountdownLayer.hidden = false;
  const updateCountdown = () => {
    const count = Math.ceil(Math.max(0, battleState.firebaseSolveStartedAt - getFirebaseNow()) / 1000);
    battleCountdownNumber.textContent = Math.max(1, count);
    onlineReadyButton.textContent = `${Math.max(1, count)}초 후 시작`;
    if (count > 0) return;

    clearInterval(battleState.countdownTimerId);
    battleState.countdownTimerId = null;
    battleCountdownLayer.hidden = true;
    renderSpeedrunCurrentProblem(room, currentPlayer);
  };
  updateCountdown();
  battleState.countdownTimerId = window.setInterval(updateCountdown, 250);
}

function startSpeedrunClock(room) {
  if (battleState.roundTimerId) return;

  const updateClock = () => {
    const elapsed = getSpeedrunElapsedMs();
    updateSpeedrunClockDisplay(battleState.firebaseRoomSnapshot || room);
    if (elapsed >= normalizeSpeedrunTimeLimit(battleState.timeLimit)) {
      setBattleInputEnabled(false);
      battlePassButton.disabled = true;
      onlineReadyButton.disabled = true;
      onlineReadyButton.textContent = "시간 종료";
      submitSpeedrunTimeoutIfNeeded();
      maybeFinishSpeedrun(battleState.firebaseRoomSnapshot || room);
      return;
    }
    maybeAutoPassSpeedrunProblem(battleState.firebaseRoomSnapshot || room);
  };

  updateClock();
  battleState.roundTimerId = window.setInterval(updateClock, 250);
}

function renderSpeedrunCurrentProblem(room, currentPlayer = getCurrentBattlePlayer()) {
  if (!currentPlayer) return;
  const problemSet = getSpeedrunProblemSet(room);
  const targetSolves = Number(room.targetSolves || SPEEDRUN_TARGET_SOLVES);
  const currentIndex = Number(currentPlayer.currentIndex || 0);
  const isDone = currentPlayer.finished || Number(currentPlayer.solvedCount || 0) >= targetSolves;

  if (isDone) {
    game.isSolved = true;
    setBattleInputEnabled(false);
    battlePassButton.disabled = true;
    onlineReadyButton.disabled = true;
    onlineReadyButton.textContent = "완주 · 결과 대기";
    setFeedback(`정답 ${targetSolves}개를 완료했습니다. 최종 결과를 기다려 주세요.`, "success");
    return;
  }

  const problem = problemSet[currentIndex];
  if (!problem) {
    setBattleInputEnabled(false);
    battlePassButton.disabled = true;
    setFeedback("준비된 문제를 모두 사용했습니다. 결과를 기다려 주세요.", "error");
    return;
  }

  if (battleState.speedrunProblemIndex !== currentIndex || game.mode !== "speedrun") {
    battleState.speedrunProblemIndex = currentIndex;
    battleState.speedrunProblemTimeoutKey = null;
    applyProblemToGame(problem, "speedrun");
  }

  game.isRevealed = true;
  renderGame();
  setBattleInputEnabled(true);
  battlePassButton.disabled = false;
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = `정답 ${Number(currentPlayer.solvedCount || 0)}/${targetSolves}`;
  setFeedback(`${currentIndex + 1}번 문제 · 문제당 ${Math.round(getSpeedrunProblemTimeLimitMs(room) / 1000)}초 · 정답 ${Number(currentPlayer.solvedCount || 0)}/${targetSolves} · 패스 가능`);
}

async function handleSpeedrunCorrectAnswer(time, expression) {
  const me = getCurrentBattlePlayer();
  if (!me || !battleState.firebaseRoomCode) return;

  game.isSolved = true;
  setBattleInputEnabled(false);
  battlePassButton.disabled = true;
  playSuccessSound();
  setFeedback("정답! 바로 다음 문제로 이동합니다.", "success");
  renderGame();

  try {
    await window.diceFirebase.submitSpeedrunSolve(battleState.firebaseRoomCode, {
      problemIndex: Number(me.currentIndex || 0),
      expression,
      elapsed: time,
    });
  } catch (error) {
    console.warn("스피드런 정답 저장 실패:", error);
    setFeedback("정답 처리 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.", "error");
    game.isSolved = false;
    setBattleInputEnabled(true);
    battlePassButton.disabled = false;
  }
}

async function handleSpeedrunPass() {
  if (game.mode !== "speedrun" || game.isSolved || !battleState.firebaseRoomCode) return;
  const me = getCurrentBattlePlayer();
  if (!me) return;

  game.isSolved = true;
  setBattleInputEnabled(false);
  battlePassButton.disabled = true;
  setFeedback("패스했습니다. 다음 문제로 이동합니다.");

  try {
    await window.diceFirebase.submitSpeedrunPass(battleState.firebaseRoomCode, {
      problemIndex: Number(me.currentIndex || 0),
      elapsed: getSpeedrunElapsedMs(),
    });
  } catch (error) {
    console.warn("스피드런 패스 저장 실패:", error);
    setFeedback("패스 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.", "error");
    game.isSolved = false;
    setBattleInputEnabled(true);
    battlePassButton.disabled = false;
  }
}

async function maybeAutoPassSpeedrunProblem(room) {
  if (!room || game.mode !== "speedrun" || game.isSolved || !battleState.firebaseRoomCode) return;
  const me = getCurrentBattlePlayer();
  if (!me || me.finished) return;
  const problemLimit = getSpeedrunProblemTimeLimitMs(room);
  if (getSpeedrunProblemElapsedMs(me) < problemLimit) return;

  const timeoutKey = `${battleState.firebaseRoomCode}:${me.id}:${me.currentIndex}:problem-timeout`;
  if (battleState.speedrunProblemTimeoutKey === timeoutKey) return;
  battleState.speedrunProblemTimeoutKey = timeoutKey;

  game.isSolved = true;
  setBattleInputEnabled(false);
  battlePassButton.disabled = true;
  setFeedback("문제 제한시간이 지나 자동 패스됩니다.");

  try {
    await window.diceFirebase.submitSpeedrunPass(battleState.firebaseRoomCode, {
      problemIndex: Number(me.currentIndex || 0),
      elapsed: getSpeedrunElapsedMs(),
    });
  } catch (error) {
    battleState.speedrunProblemTimeoutKey = null;
    console.warn("스피드런 자동 패스 저장 실패:", error);
  }
}

async function submitSpeedrunTimeoutIfNeeded() {
  const me = getCurrentBattlePlayer();
  if (!me || me.finished || !battleState.firebaseRoomCode || !window.diceFirebase?.submitSpeedrunTimeout) return;
  const timeoutKey = `${battleState.firebaseRoomCode}:${me.id}:timeout`;
  if (battleState.firebaseTimeoutKey === timeoutKey) return;
  battleState.firebaseTimeoutKey = timeoutKey;

  try {
    await window.diceFirebase.submitSpeedrunTimeout(battleState.firebaseRoomCode, {
      elapsed: normalizeSpeedrunTimeLimit(battleState.timeLimit),
    });
  } catch (error) {
    battleState.firebaseTimeoutKey = null;
    console.warn("스피드런 시간 종료 저장 실패:", error);
  }
}

async function maybeFinishSpeedrun(room) {
  if (!room || !battleState.isHost || room.phase !== "playing" || !window.diceFirebase?.finishSpeedrunRoom) return;
  const elapsed = getSpeedrunElapsedMs();
  const targetSolves = Number(room.targetSolves || SPEEDRUN_TARGET_SOLVES);
  const players = Object.values(room.players || {});
  const allFinished = players.length > 0 && players.every((player) => player.finished || Number(player.solvedCount || 0) >= targetSolves);
  const timeEnded = elapsed >= normalizeSpeedrunTimeLimit(room.timeLimit || battleState.timeLimit);
  if (!allFinished && !timeEnded) return;

  const finishKey = `${battleState.firebaseRoomCode}:${room.startedAt || 0}:${allFinished ? "all" : "time"}`;
  if (battleState.speedrunFinishKey === finishKey) return;
  battleState.speedrunFinishKey = finishKey;

  try {
    await window.diceFirebase.finishSpeedrunRoom(battleState.firebaseRoomCode);
  } catch (error) {
    battleState.speedrunFinishKey = null;
    console.warn("스피드런 최종 결과 저장 실패:", error);
  }
}

function enterSpeedrunFinal(room) {
  clearBattleTimers();
  setOnlinePhase("result");
  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = false;
  battleResultList.hidden = false;
  battleAdSlot.hidden = false;
  battlePassButton.hidden = true;
  const finalResults = getSpeedrunFinalResults(room);
  battleResultKicker.textContent = "스피드런 결과";
  battleResultTitle.textContent = "최종 순위";
  battleResultMeta.textContent = `정답 ${SPEEDRUN_TARGET_SOLVES}개 완주자는 시간순, 미완주자는 정답 수순입니다.`;
  renderSpeedrunResultList(finalResults);
  showSpeedrunFinalModal(finalResults, room);
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "게임 종료";
}

function getSpeedrunFinalResults(room) {
  const storedResults = Array.isArray(room.finalResults)
    ? room.finalResults
    : Object.values(room.finalResults || {});
  if (storedResults.length) return storedResults.map(normalizeSpeedrunResult);
  return getSpeedrunStandings(Object.entries(room.players || {}).map(([id, player]) => ({ id, ...player })));
}

function normalizeSpeedrunResult(result) {
  return {
    id: String(result.id || ""),
    name: String(result.name || "이름 없음"),
    solvedCount: Number(result.solvedCount || 0),
    passedCount: Number(result.passedCount || 0),
    finishTime: Number(result.finishTime || 0),
    finished: Boolean(result.finished),
    rankLabel: String(result.rankLabel || ""),
  };
}

function getSpeedrunStandings(players) {
  return [...players]
    .map((player) => ({
      id: String(player.id || ""),
      name: String(player.name || "이름 없음"),
      solvedCount: Number(player.solvedCount || 0),
      passedCount: Number(player.passedCount || 0),
      finishTime: Number(player.finishTime || 0),
      finished: Boolean(player.finished || Number(player.solvedCount || 0) >= SPEEDRUN_TARGET_SOLVES),
    }))
    .sort((a, b) => {
      if (a.finished !== b.finished) return a.finished ? -1 : 1;
      if (a.finished && b.finished) return a.finishTime - b.finishTime;
      if (a.solvedCount !== b.solvedCount) return b.solvedCount - a.solvedCount;
      if (a.passedCount !== b.passedCount) return a.passedCount - b.passedCount;
      return a.name.localeCompare(b.name, "ko");
    })
    .map((player, index) => ({
      ...player,
      rankLabel: String(index + 1),
    }));
}

function renderSpeedrunResultList(results) {
  battleResultList.replaceChildren(
    ...results.map((result) => {
      const item = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const detail = document.createElement("small");
      rank.textContent = `${result.rankLabel || ""}위`;
      name.textContent = result.name;
      detail.textContent = result.finished
        ? `정답 ${result.solvedCount}개 · 완주 ${formatTime(result.finishTime)} · 패스 ${result.passedCount}개`
        : `정답 ${result.solvedCount}개 · 패스 ${result.passedCount}개`;
      item.append(rank, name, detail);
      return item;
    })
  );
}

function showSpeedrunFinalModal(results, room) {
  battleFinalModal.hidden = false;
  const winner = results[0];
  battleFinalTitle.textContent = winner ? `${winner.name} 우승!` : "스피드런 종료";
  battleFinalMessage.textContent = `${formatMinutes(room.timeLimit || battleState.timeLimit)}분 대회가 종료되었습니다.`;
  battleFinalList.replaceChildren(
    ...results.map((player) => {
      const row = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const score = document.createElement("em");
      rank.textContent = `${player.rankLabel}위`;
      name.textContent = player.name;
      score.textContent = player.finished
        ? `${formatTime(player.finishTime)}`
        : `${player.solvedCount}개`;
      row.append(rank, name, score);
      return row;
    })
  );
}

function enterFirebaseRound(room) {
  if (battleState.phase === "playing") {
    if (room.currentProblem && !battleState.countdownTimerId) renderFirebaseProblem(room.currentProblem, room);
    renderBattleStatuses(Object.fromEntries(battleState.players.map((player) => [player.id, player.status || "풀이중"])));
    syncFirebaseRoundClock();
    return;
  }

  clearBattleTimers();
  setOnlinePhase("playing");
  battleRoundPanel.hidden = false;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  battleCountdownLayer.hidden = true;
  battleElapsed.textContent = "00.00";
  renderBattleTimeLimit();
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${Number(room.round || battleState.round)}라운드`;
  updateBattleRoomCode(room.code || battleState.firebaseRoomCode);
  if (room.currentProblem) {
    prepareHiddenFirebaseProblem(room.currentProblem);
    beginFirebaseRevealCountdown(room.currentProblem, room);
  } else {
    battleTensDie.textContent = "?";
    battleOnesDie.textContent = "?";
    battleTargetLabel.textContent = "목표 ?";
    battleDiceTray.hidden = true;
    battleDiceTray.replaceChildren();
    battleExpressionPreview.replaceChildren();
    const message = document.createElement("span");
    message.className = "empty-expression";
    message.textContent = "문제 데이터를 기다리고 있습니다.";
    battleExpressionPreview.append(message);
    setBattleInputEnabled(false);
  }
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "3초 후 시작";
  battleRuleNote.textContent = "3, 2, 1 후 같은 문제가 공개됩니다.";
  renderBattleStatuses(Object.fromEntries(battleState.players.map((player) => [player.id, player.status || "풀이중"])));
}

function prepareHiddenFirebaseProblem(problem) {
  const normalizedProblem = normalizeFirebaseProblem(problem);
  if (!normalizedProblem) return;
  applyProblemToGame(normalizedProblem, "battle");
  game.isRevealed = false;
  renderGame();
  setBattleInputEnabled(false);
}

function beginFirebaseRevealCountdown(problem, room) {
  if (battleState.countdownTimerId) return;

  const solveStartedAt = getFirebaseSolveStartedAt(room);
  battleState.firebaseSolveStartedAt = solveStartedAt;
  let count = Math.ceil(Math.max(0, solveStartedAt - getFirebaseNow()) / 1000);
  if (count <= 0) {
    battleCountdownLayer.hidden = true;
    renderFirebaseProblem(problem, room);
    return;
  }

  battleCountdownLayer.hidden = false;
  battleCountdownNumber.textContent = count;
  onlineReadyButton.textContent = `${count}초 후 시작`;

  battleState.countdownTimerId = window.setInterval(() => {
    count = Math.ceil(Math.max(0, solveStartedAt - getFirebaseNow()) / 1000);
    if (count > 0) {
      battleCountdownNumber.textContent = count;
      onlineReadyButton.textContent = `${count}초 후 시작`;
      return;
    }

    clearInterval(battleState.countdownTimerId);
    battleState.countdownTimerId = null;
    battleCountdownLayer.hidden = true;
    renderFirebaseProblem(problem, room);
  }, 1000);
}

function renderFirebaseProblem(problem, room) {
  const normalizedProblem = normalizeFirebaseProblem(problem);

  if (!normalizedProblem) return;

  const currentDiceValues = game.dice.map((die) => die.value).join(",");
  const nextDiceValues = normalizedProblem.dice.join(",");
  const isSameProblem = game.mode === "battle"
    && game.target === normalizedProblem.target
    && currentDiceValues === nextDiceValues;

  if (!isSameProblem) {
    applyProblemToGame(normalizedProblem, "battle");
  }

  game.isRevealed = true;
  if (!battleState.firebaseSolveStartedAt) {
    battleState.firebaseSolveStartedAt = getFirebaseSolveStartedAt(room);
  }
  if (!battleState.roundTimerId) {
    startFirebaseRoundClock(room);
  }
  renderGame();
  setFeedback("시작! 정답을 제출하면 상대 파티창에 완료로 표시됩니다.", "success");
  setBattleInputEnabled(true);
}

function normalizeFirebaseProblem(problem) {
  const normalizedProblem = {
    tens: Number(problem.tens),
    ones: Number(problem.ones),
    target: Number(problem.target),
    dice: Array.isArray(problem.dice) ? problem.dice.map(Number) : [],
  };

  if (!normalizedProblem.tens || !normalizedProblem.ones || normalizedProblem.dice.length !== 5) return null;
  return normalizedProblem;
}

async function handleFirebaseRoundTimeout() {
  if (battleState.phase !== "playing" || !battleState.firebaseRoomCode) return;

  const me = getCurrentBattlePlayer();
  if (!me || me.status === "완료" || me.status === "시간초과") return;

  game.isSolved = true;
  battleState.statusMap[me.id] = "시간초과";
  stopBattleRoundTimerAt(getBattleTimeLimitMs());
  setBattleInputEnabled(false);
  setFeedback("시간초과! 이번 라운드는 시간초과로 제출됩니다.", "error");
  renderGame();
  renderBattleStatuses(battleState.statusMap);

  if (!firebaseState.ready || !window.diceFirebase?.isEnabled()) return;

  try {
    await window.diceFirebase.submitTimeout(battleState.firebaseRoomCode);
  } catch (error) {
    console.warn("Firebase 시간초과 저장 실패:", error);
  }
}

function setBattleInputEnabled(enabled) {
  const shouldEnable = enabled && !game.isSolved;
  battleAnswerCheckButton.disabled = !shouldEnable;
  if (shouldEnable) {
    battleAnswerCheckButton.textContent = game.mode === "speedrun" ? "정답" : "제출";
    battleAnswerCheckButton.classList.remove("submitted");
  } else if (!game.isSolved) {
    battleAnswerCheckButton.textContent = game.mode === "speedrun" ? "정답" : "제출";
    battleAnswerCheckButton.classList.remove("submitted");
  }
  battleClearExpressionButton.disabled = !shouldEnable;
  battlePassButton.disabled = !shouldEnable;
  battleUndoButton.disabled = !shouldEnable;
  document.querySelectorAll(".battle-operator-bar button").forEach((button) => {
    button.disabled = !shouldEnable;
  });
}

function markBattleAnswerSubmitted() {
  battleAnswerCheckButton.disabled = true;
  battleAnswerCheckButton.textContent = "정답";
  battleAnswerCheckButton.classList.add("submitted");
}

function stopBattleRoundTimerAt(time) {
  if (battleState.roundTimerId) {
    clearInterval(battleState.roundTimerId);
    battleState.roundTimerId = null;
  }
  if (battleState.roundEndTimerId) {
    clearTimeout(battleState.roundEndTimerId);
    battleState.roundEndTimerId = null;
  }
  updateBattleElapsed(time);
}

function handleFirebaseRoundCompletion(room) {
  if (battleState.phase !== "playing") return;
  const players = getFirebaseRoundPlayerEntries(room);
  if (players.length < 2) return;

  maybeSubmitFirebaseTimeouts(room, players);

  const allDone = players.every(([, player]) => isFirebasePlayerDone(player));
  if (!allDone) return;

  const results = createFirebaseRoundResults(room);

  stopBattleRoundTimerAt(results.find((result) => result.id === window.diceFirebase?.getUid())?.time || 0);
  setBattleInputEnabled(false);
  showFirebaseRoundResult(results);

  if (battleState.isHost) {
    saveFirebaseRoundResult(results);
  }
}

async function maybeSubmitFirebaseTimeouts(room, players = getFirebaseRoundPlayerEntries(room)) {
  if (!room) return;
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.submitTimeouts) return;
  if (getFirebaseRoundElapsedMs() < getBattleTimeLimitMs()) return;

  const timedOutIds = players
    .filter(([, player]) => !isFirebasePlayerDone(player))
    .map(([id]) => id);
  if (!timedOutIds.length) return;

  const timeoutKey = `${battleState.firebaseRoomCode}:${room.round || battleState.round}:${timedOutIds.sort().join(",")}`;
  if (battleState.firebaseTimeoutKey === timeoutKey) return;
  battleState.firebaseTimeoutKey = timeoutKey;

  try {
    await window.diceFirebase.submitTimeouts(battleState.firebaseRoomCode, timedOutIds);
  } catch (error) {
    battleState.firebaseTimeoutKey = null;
    console.warn("Firebase 미제출 시간초과 동기화 실패:", error);
  }
}

function isFirebasePlayerDone(player) {
  return player?.status === "완료" || player?.status === "시간초과";
}

function isFirebaseRoundPlayer(player, room) {
  if (player?.waitingNextRound === true || player?.status === "다음 라운드 대기") return false;
  const activeRound = Number(player?.activeRound || room.round || 0);
  return activeRound === Number(room.round || 0);
}

function getFirebaseRoundPlayerEntries(room) {
  return Object.entries(room.players || {}).filter(([, player]) => isFirebaseRoundPlayer(player, room));
}

function createFirebaseRoundResults(room) {
  const players = getFirebaseRoundPlayerEntries(room);
  const submissions = room.submissions || {};
  const solvedResults = players
    .map(([id, player]) => {
      const submission = submissions[id] || {};
      if (submission.timedOut === true || player.status === "시간초과") return null;
      return {
        id,
        name: player.name || "이름 없음",
        expression: submission.expression || "식 없음",
        time: Number(submission.time || 0),
        timedOut: false,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time)
    .map((result, index) => ({
      ...result,
      rankLabel: String(index + 1),
      points: (players.length - index) * 10,
      timeLabel: formatTime(result.time),
    }));

  const solvedIds = new Set(solvedResults.map((result) => result.id));
  const timeoutResults = players
    .filter(([id]) => !solvedIds.has(id))
    .map(([id, player]) => ({
      id,
      name: player.name || "이름 없음",
      rankLabel: "초과",
      points: 5,
      time: getBattleTimeLimitMs(),
      timeLabel: formatTime(getBattleTimeLimitMs()),
      expression: "",
      timedOut: true,
    }));

  return [...solvedResults, ...timeoutResults];
}

function getFirebaseStoredRoundResults(room) {
  const storedResults = Array.isArray(room.roundResults)
    ? room.roundResults
    : Object.values(room.roundResults || {});

  return storedResults.map((result) => ({
    id: String(result.id || ""),
    name: String(result.name || "이름 없음"),
    expression: String(result.expression || ""),
    time: Number(result.time || 0),
    timedOut: Boolean(result.timedOut),
    rankLabel: String(result.rankLabel || ""),
    points: Number(result.points || 0),
    timeLabel: String(result.timeLabel || formatTime(Number(result.time || 0))),
  }));
}

async function saveFirebaseRoundResult(results) {
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.isEnabled()) return;
  if (battleState.firebaseResultRound === battleState.round) return;

  battleState.firebaseResultRound = battleState.round;

  try {
    await window.diceFirebase.finishRound(battleState.firebaseRoomCode, {
      round: battleState.round,
      results,
    });
  } catch (error) {
    battleState.firebaseResultRound = null;
    console.warn("Firebase 라운드 결과 저장 실패:", error);
  }
}

function enterFirebaseResult(room) {
  const results = getFirebaseStoredRoundResults(room);
  showFirebaseRoundResult(results.length ? results : createFirebaseRoundResults(room));
}

function enterFirebaseFinal(room) {
  const results = getFirebaseStoredRoundResults(room);
  const standings = getBattleFinalStandings(room.finalResults || room.players);
  showFirebaseRoundResult(results.length ? results : createFirebaseRoundResults(room), { final: true });
  showBattleFinalModal(standings, normalizeBattleTargetScore(room.targetScore || battleState.targetScore));
}

function showFirebaseRoundResult(roundResults, options = {}) {
  if (!battleState.firebaseResultShown) {
    battleState.firebaseResultShown = true;
  }
  setOnlinePhase("result");
  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = false;
  battleResultKicker.textContent = `${battleState.round}라운드 결과`;
  battleResultTitle.textContent = "이번 라운드 순위";
  battleResultMeta.textContent = createBattleResultMeta(roundResults);
  battleResultList.replaceChildren(
    ...roundResults.map((result) => {
      const row = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const time = document.createElement("em");
      const expression = document.createElement("small");
      rank.textContent = result.rankLabel;
      name.textContent = result.name;
      time.textContent = result.timedOut ? "시간초과" : `${result.timeLabel}초`;
      expression.textContent = result.timedOut
        ? `120초 초과 · +${result.points}점`
        : `${result.expression} · +${result.points}점`;
      row.classList.toggle("timeout", result.timedOut);
      row.append(rank, name, time, expression);
      return row;
    })
  );
  battleResultList.hidden = false;
  battleAdSlot.hidden = false;
  onlineReadyButton.disabled = true;
  if (options.final) {
    clearAutoStartTimers();
    onlineReadyButton.textContent = "게임 종료";
    return;
  }

  startFirebaseNextRoundCountdown();
}

function getBattleFinalStandings(source = battleState.players) {
  const entries = Array.isArray(source)
    ? source
    : Object.entries(source || {}).map(([id, player]) => ({ id, ...player }));

  return entries
    .map((player) => ({
      id: String(player.id || ""),
      name: String(player.name || "이름 없음"),
      score: Number(player.score || 0),
      rankLabel: String(player.rankLabel || ""),
    }))
    .sort((a, b) => b.score - a.score)
    .map((player, index) => ({
      ...player,
      rankLabel: player.rankLabel || String(index + 1),
    }));
}

function showBattleFinalModal(standings, targetScore = battleState.targetScore) {
  const winner = standings[0];
  battleFinalTitle.textContent = winner ? `${winner.name} 우승!` : "축하합니다!";
  battleFinalMessage.textContent = `${targetScore}점에 먼저 도달해서 게임이 종료되었습니다.`;
  battleFinalList.replaceChildren(
    ...standings.map((player) => {
      const row = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const score = document.createElement("em");
      rank.textContent = `${player.rankLabel}위`;
      name.textContent = player.name;
      score.textContent = `${player.score}점`;
      row.append(rank, name, score);
      return row;
    })
  );
  battleFinalModal.hidden = false;
}

async function closeBattleFinalModal() {
  battleFinalModal.hidden = true;
  await leaveCurrentRoom();
}

async function setCurrentPlayerReady() {
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.isEnabled()) return;

  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "준비 저장 중...";

  try {
    await window.diceFirebase.setReady(battleState.firebaseRoomCode, true);
  } catch (error) {
    console.warn("Firebase 준비 상태 저장 실패:", error);
    battleRuleNote.textContent = "준비 상태 저장에 실패했습니다. 다시 시도해 주세요.";
    updateRoomActionState();
  }
}

function resetMockBattle() {
  clearBattleTimers();
  clearRoomSubscription();
  battleState.roomMode = "비공개 친구 방";
  battleState.playerCount = 4;
  battleState.targetScore = selectedBattleTargetScore;
  battleState.round = 0;
  battleState.players = createMockPlayers(4);
  battleState.phase = "lobby";
  battleState.firebaseRoomCode = null;
  battleState.isHost = false;
  battleState.statusMap = {};
  battleState.submissions = [];
  battleState.currentProblem = null;
  battleState.firebaseRoomSnapshot = null;
  battleState.firebaseSolveStartedAt = null;
  battleState.autoStartPaused = false;
  battleState.firebaseResultShown = false;
  battleState.firebaseResultRound = null;
  battleState.firebaseAutoStartKey = null;
  battleState.firebaseTimeoutKey = null;
  lobbyModeLabel.textContent = "비공개 대기방";
  battleRuleNote.textContent = getBattleRuleNote(battleState.roomMode);
  roomCodeLabel.textContent = "A7K2Q9";
  renderLobbyPlayers();
  onlinePlayerName.textContent = battleState.players[0].name;
  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  onlineReadyButton.disabled = false;
  onlineReadyButton.textContent = "모두 준비 완료 미리보기";
  updateRoomActionState();
  updateHostControlButton();
  renderScoreBoard();
}

function setOnlinePhase(phase) {
  battleState.phase = phase;
  onlineScreen.classList.remove("phase-menu", "phase-lobby", "phase-playing", "phase-result");
  onlineScreen.classList.add(`phase-${phase}`);
  onlineBackButton.textContent = phase === "menu" ? "홈" : "←";
  onlineBackButton.setAttribute("aria-label", phase === "menu" ? "홈으로 가기" : "온라인 메뉴로 돌아가기");
  updateRoomActionState();
  updateHostControlButton();
}

function getBattleRuleNote(mode) {
  const goalText = `${battleState.targetScore || selectedBattleTargetScore}점 먼저 도달`;
  if (isSpeedrunMode(mode)) {
    const room = battleState.firebaseRoomSnapshot || {};
    const problemSeconds = Math.round(normalizeTimeLimit(room.problemTimeLimit || selectedSpeedrunProblemTimeLimit) / 1000);
    return `${formatMinutes(battleState.timeLimit || selectedSpeedrunTimeLimit)}분 스피드런 · 문제당 ${problemSeconds}초 · 정답 ${SPEEDRUN_TARGET_SOLVES}개 목표 · 패스 가능 · 2~${SPEEDRUN_PLAYER_LIMIT}명`;
  }

  if (mode.includes("자동매칭")) {
    return `${goalText} · 방장 없음 · 중간 참가 없음 · 결과 후 5초 자동 시작`;
  }

  return `${goalText} · 방장 있음 · 진행 중 참가는 다음 라운드부터 · 자동 시작 일시정지 가능`;
}

function isSpeedrunMode(mode = battleState.roomMode) {
  const room = battleState.firebaseRoomSnapshot || {};
  return room.speedrun === true || String(mode || "").includes("스피드런") || String(mode || "").includes("5인 이상");
}

function formatMinutes(ms) {
  return Math.round(Number(ms || 0) / 60000);
}

function createMockPlayers(playerCount) {
  const names = [
    nicknameInput.value.trim() || "나의 닉네임",
    "번개 계산왕",
    "칠판 마스터",
    "주사위 박사",
    "암산 스프린터",
    "괄호 해결사",
    "연산 챔피언",
    "빠른 손",
  ];
  return names.slice(0, playerCount).map((name, index) => ({
    id: `player-${index + 1}`,
    name,
    score: 0,
  }));
}

function createRoomCode() {
  const codeChars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  do {
    code = Array.from({ length: 6 }, () => codeChars[randomInt(0, codeChars.length - 1)]).join("");
  } while (usedMockRoomCodes.has(code));
  usedMockRoomCodes.add(code);
  return code;
}

function updateBattleRoomCode(code = battleState.firebaseRoomCode || roomCodeLabel.textContent) {
  if (!battleRoomCode) return;
  battleRoomCode.textContent = `코드 ${String(code || "------").toUpperCase()}`;
}

function clearBattleTimers() {
  if (battleState.roundTimerId) clearInterval(battleState.roundTimerId);
  if (battleState.roundEndTimerId) clearTimeout(battleState.roundEndTimerId);
  if (battleState.countdownTimerId) clearInterval(battleState.countdownTimerId);
  clearAutoStartTimers();
  battleState.statusTimerIds.forEach((timerId) => clearTimeout(timerId));
  battleState.roundTimerId = null;
  battleState.roundEndTimerId = null;
  battleState.countdownTimerId = null;
  battleState.statusTimerIds = [];
  battleState.roundStartedAt = null;
  battleState.firebaseSolveStartedAt = null;
  battleState.autoStartPaused = false;
  battleCountdownLayer.hidden = true;
  updateHostControlButton();
}

function clearAutoStartTimers() {
  if (battleState.autoStartTimerId) clearTimeout(battleState.autoStartTimerId);
  if (battleState.autoStartIntervalId) clearInterval(battleState.autoStartIntervalId);
  battleState.autoStartTimerId = null;
  battleState.autoStartIntervalId = null;
}

function startMockBattleRound() {
  if (battleState.firebaseRoomCode && !battleState.isHost) {
    onlineReadyButton.disabled = true;
    onlineReadyButton.textContent = "방장 시작 대기";
    battleRuleNote.textContent = "참가자는 방장이 시작할 때까지 기다립니다.";
    return;
  }

  if (!battleState.players.length) resetMockBattle();
  clearBattleTimers();
  const problem = createSolvableProblem();
  battleState.currentProblem = problem;
  battleState.statusMap = {};
  battleState.submissions = [];
  battleState.autoStartPaused = false;
  battleState.firebaseResultShown = false;
  battleState.firebaseResultRound = null;
  battleState.firebaseAutoStartKey = null;
  applyProblemToGame(problem, "battle");
  game.isRevealed = false;
  setOnlinePhase("playing");
  battleRoundPanel.hidden = false;
  battleResultSummary.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  battleAdSlot.hidden = true;
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "3초 후 시작";
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${battleState.round + 1}라운드`;
  battleElapsed.textContent = "00.00";
  setFeedback("준비하세요. 카운트다운 후 문제가 공개됩니다.");
  renderGame();
  renderBattleStatuses(battleState.statusMap);
  beginBattleCountdown();
}

function beginBattleCountdown() {
  let count = 3;
  battleCountdownLayer.hidden = false;
  battleCountdownNumber.textContent = count;

  battleState.countdownTimerId = window.setInterval(() => {
    count -= 1;
    if (count > 0) {
      battleCountdownNumber.textContent = count;
      onlineReadyButton.textContent = `${count}초 후 시작`;
      return;
    }

    clearInterval(battleState.countdownTimerId);
    battleState.countdownTimerId = null;
    battleCountdownLayer.hidden = true;
    revealBattleRound();
  }, 1000);
}

function revealBattleRound() {
  game.isRevealed = true;
  battleState.roundStartedAt = performance.now();
  onlineReadyButton.textContent = "라운드 진행 중";
  setFeedback("시작! 흰 주사위 5개를 모두 한 번씩 사용해 제출하세요.");
  renderGame();

  battleState.roundTimerId = window.setInterval(() => {
    updateBattleElapsed(performance.now() - battleState.roundStartedAt);
  }, 47);

  battleState.statusTimerIds = battleState.players.slice(1).map((player, index) => (
    window.setTimeout(() => submitMockOpponent(player, index), 5600 + index * 2100)
  ));
  battleState.roundEndTimerId = window.setTimeout(finishBattleRoundByTimeout, getBattleTimeLimitMs());
}

function renderBattleStatuses(statusMap = {}) {
  battleStatusList.replaceChildren(
    ...battleState.players.map((player, index) => {
      const status = isSpeedrunMode()
        ? `${Number(player.solvedCount || 0)}/${SPEEDRUN_TARGET_SOLVES}`
        : statusMap[player.id] || "풀이중";
      const row = document.createElement("div");
      const avatar = document.createElement("span");
      const name = document.createElement("strong");
      const score = document.createElement("em");
      avatar.className = "party-avatar";
      avatar.textContent = status;
      name.textContent = player.name;
      score.textContent = isSpeedrunMode()
        ? `${player.finished ? "완료" : player.status || "도전 중"} · 패스 ${Number(player.passedCount || 0)}`
        : `${Number(player.score || 0)}점`;
      row.className = "party-member";
      row.dataset.status = status;
      row.append(avatar, name, score);
      return row;
    })
  );
}

function submitMockOpponent(player, index) {
  if (battleState.phase !== "playing") return;
  const expression = findBasicSolution(game.dice.map((die) => die.value), game.target) || "검증 완료 식";
  const time = Math.min(performance.now() - battleState.roundStartedAt, getBattleTimeLimitMs() - 1000);
  battleState.statusMap[player.id] = "완료";
  battleState.submissions.push({
    id: player.id,
    name: player.name,
    time: time + index * 340,
    expression,
    timedOut: false,
  });
  renderBattleStatuses(battleState.statusMap);
  maybeFinishBattleRound();
}

function maybeFinishBattleRound() {
  if (battleState.phase !== "playing") return;
  if (battleState.submissions.length >= battleState.players.length) {
    showMockBattleResult();
  }
}

function finishBattleRoundByTimeout() {
  if (battleState.phase !== "playing") return;
  showMockBattleResult();
}

function showMockBattleResult() {
  clearBattleTimers();
  if (!battleState.players.length) resetMockBattle();
  setOnlinePhase("result");
  battleState.round += 1;
  const roundResults = createMockRoundResults();

  roundResults.forEach((result) => {
    const player = battleState.players.find((item) => item.id === result.id);
    if (player) player.score += result.points;
  });

  battleRoundPanel.hidden = true;
  battleResultSummary.hidden = false;
  battleResultKicker.textContent = `${battleState.round}라운드 결과`;
  battleResultTitle.textContent = "이번 라운드 순위";
  battleResultMeta.textContent = createBattleResultMeta(roundResults);
  battleResultList.replaceChildren(
    ...roundResults.map((result) => {
      const row = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const time = document.createElement("em");
      const expression = document.createElement("small");
      rank.textContent = result.rankLabel;
      name.textContent = result.name;
      time.textContent = result.timedOut ? "시간초과" : `${result.timeLabel}초`;
      expression.textContent = result.timedOut
        ? `120초 초과 · +${result.points}점`
        : `${result.expression} · +${result.points}점`;
      row.classList.toggle("timeout", result.timedOut);
      row.append(rank, name, time, expression);
      return row;
    })
  );
  battleResultList.hidden = false;
  battleAdSlot.hidden = false;
  onlineReadyButton.disabled = true;
  if (battleState.players.some((player) => Number(player.score || 0) >= battleState.targetScore)) {
    clearAutoStartTimers();
    onlineReadyButton.textContent = "게임 종료";
    showBattleFinalModal(getBattleFinalStandings(), battleState.targetScore);
    renderScoreBoard();
    return;
  }
  startAutoNextRoundCountdown();
  renderScoreBoard();
}

function startAutoNextRoundCountdown() {
  clearAutoStartTimers();
  battleState.autoStartPaused = false;
  updateHostControlButton();
  let remaining = 5;
  onlineReadyButton.textContent = `${remaining}초 후 다음 문제 자동시작`;
  battleState.autoStartIntervalId = window.setInterval(() => {
    remaining -= 1;
    if (remaining > 0) {
      onlineReadyButton.textContent = `${remaining}초 후 다음 문제 자동시작`;
    }
  }, 1000);
  battleState.autoStartTimerId = window.setTimeout(() => {
    if (battleState.autoStartIntervalId) clearInterval(battleState.autoStartIntervalId);
    battleState.autoStartIntervalId = null;
    onlineReadyButton.disabled = false;
    startMockBattleRound();
  }, 5000);
}

function startFirebaseNextRoundCountdown() {
  if (!battleState.firebaseRoomCode) return;
  if (battleState.autoStartTimerId || battleState.autoStartIntervalId) return;

  battleState.autoStartPaused = false;
  updateHostControlButton();

  let remaining = 5;
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = `${remaining}초 후 다음 문제 자동시작`;

  battleState.autoStartIntervalId = window.setInterval(() => {
    remaining -= 1;
    if (remaining > 0) {
      onlineReadyButton.textContent = `${remaining}초 후 다음 문제 자동시작`;
    }
  }, 1000);

  battleState.autoStartTimerId = window.setTimeout(async () => {
    if (battleState.autoStartIntervalId) clearInterval(battleState.autoStartIntervalId);
    battleState.autoStartIntervalId = null;
    battleState.autoStartTimerId = null;

    if (!battleState.isHost) {
      onlineReadyButton.textContent = "방장 다음 문제 대기";
      return;
    }

    onlineReadyButton.textContent = "다음 문제 준비 중...";
    await startNextFirebaseRoundSignal();
  }, 5000);
}

async function startNextFirebaseRoundSignal() {
  if (!battleState.firebaseRoomCode || !firebaseState.ready || !window.diceFirebase?.isEnabled()) return;
  if (!battleState.isHost || battleState.phase !== "result") return;

  try {
    await window.diceFirebase.startNextRound(battleState.firebaseRoomCode, createSolvableProblem());
  } catch (error) {
    console.warn("Firebase 다음 라운드 시작 실패:", error);
    onlineReadyButton.textContent = "다음 문제 시작 실패";
  }
}

function handleHostControl() {
  if (!isHostControlledRoom() || !battleState.isHost || battleState.phase !== "result") return;

  if (battleState.firebaseRoomCode) {
    if (!battleState.autoStartPaused) {
      clearAutoStartTimers();
      battleState.autoStartPaused = true;
      onlineReadyButton.disabled = true;
      onlineReadyButton.textContent = "방장이 다음 문제 시작을 일시정지했습니다";
      updateHostControlButton();
      return;
    }

    startNextFirebaseRoundSignal();
    return;
  }

  if (!battleState.autoStartPaused) {
    clearAutoStartTimers();
    battleState.autoStartPaused = true;
    onlineReadyButton.disabled = true;
    onlineReadyButton.textContent = "방장이 다음 문제 시작을 일시정지했습니다";
    updateHostControlButton();
    return;
  }

  startMockBattleRound();
}

function isHostControlledRoom() {
  return !battleState.roomMode.includes("자동매칭");
}

function isAutoMatchRoom(mode = battleState.roomMode) {
  return String(mode || "").includes("자동매칭");
}

function updateHostControlButton() {
  if (!hostControlButton) return;
  const shouldShow = battleState.phase === "result" && isHostControlledRoom() && battleState.isHost;
  hostControlButton.hidden = !shouldShow;
  hostControlButton.textContent = battleState.autoStartPaused ? "다음 문제 시작" : "자동시작 일시정지";
}

function createBattleResultMeta(roundResults) {
  const solved = roundResults.filter((result) => !result.timedOut);
  const timedOut = roundResults.length - solved.length;
  const winner = solved[0];
  if (!winner) return `성공자 없음 · 시간초과 ${timedOut}명 · 모두 5점`;
  return `1위 ${winner.name} ${winner.timeLabel}초 · 성공 ${solved.length}명 · 시간초과 ${timedOut}명`;
}

function createMockRoundResults() {
  const submissionMap = new Map(battleState.submissions.map((submission) => [submission.id, submission]));
  const solvedResults = battleState.players
    .map((player) => submissionMap.get(player.id))
    .filter(Boolean)
    .sort((a, b) => a.time - b.time)
    .map((submission, index) => ({
      ...submission,
      rankLabel: String(index + 1),
      points: (battleState.playerCount - index) * 10,
      timeLabel: formatTime(submission.time),
      timedOut: false,
    }));

  const timeoutResults = battleState.players
    .filter((player) => !submissionMap.has(player.id))
    .map((player) => ({
      ...player,
      rankLabel: "초과",
      points: 5,
      timeLabel: formatTime(getBattleTimeLimitMs()),
      expression: "",
      timedOut: true,
    }));

  return [...solvedResults, ...timeoutResults];
}

function renderScoreBoard() {
  if (isSpeedrunMode()) {
    const sortedPlayers = getSpeedrunStandings(battleState.players);
    scoreBoard.replaceChildren(
      ...sortedPlayers.map((player, index) => {
        const row = document.createElement("div");
        const rank = document.createElement("span");
        const name = document.createElement("strong");
        const score = document.createElement("em");
        rank.textContent = `${index + 1}위`;
        name.textContent = player.name;
        score.textContent = player.finished
          ? `${player.solvedCount}개 · ${formatTime(player.finishTime)}`
          : `${player.solvedCount}개 · 패스 ${player.passedCount}`;
        row.append(rank, name, score);
        return row;
      })
    );
    return;
  }

  const sortedPlayers = [...battleState.players].sort((a, b) => b.score - a.score);
  scoreBoard.replaceChildren(
    ...sortedPlayers.map((player, index) => {
      const row = document.createElement("div");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const score = document.createElement("em");
      rank.textContent = `${index + 1}위`;
      name.textContent = player.name;
      score.textContent = `${player.score}점`;
      row.append(rank, name, score);
      return row;
    })
  );
}

function openGameScreen() {
  closeSoloSheet();
  closeSettingsSheet();
  closeOnlineDifficultySheet();
  closeSuccessResult();
  clearBattleTimers();
  home.classList.remove("active");
  onlineScreen.classList.remove("active");
  gameScreen.classList.add("active");
  game.mode = "solo";
  startRound();
}

function openHome() {
  void leaveFirebaseRoomIfNeeded();
  closeSoloSheet();
  closeSettingsSheet();
  closeOnlineDifficultySheet();
  closeSpeedrunCreateSheet();
  closeSuccessResult();
  stopTimer();
  clearCountdown();
  clearRoll();
  clearBattleTimers();
  clearRoomSubscription();
  gameScreen.classList.remove("active");
  onlineScreen.classList.remove("active");
  home.classList.add("active");
  renderProgress();
}

function startRound() {
  stopTimer();
  clearCountdown();
  clearRoll();
  const problem = createSolvableProblem();
  applyProblemToGame(problem, "solo");
  game.timeLimit = selectedSoloTimeLimit;
  gameTimer.textContent = "00.00";
  setFeedback("카운트다운 후 숫자가 공개됩니다.");
  renderGame();
  beginCountdown();
}

function applyProblemToGame(problem, mode) {
  game.mode = mode;
  game.tens = problem.tens;
  game.ones = problem.ones;
  game.target = problem.target;
  game.dice = problem.dice.map((value, index) => ({
    id: createId("die"),
    value,
    used: false,
    order: index + 1,
  }));
  game.tokens = [];
  game.insertIndex = null;
  game.powerMode = false;
  game.powerBaseId = null;
  game.isRevealed = false;
  game.isSolved = false;
  game.startedAt = null;
  game.elapsed = 0;
}

function createSolvableProblem() {
  for (let attempt = 0; attempt < 300; attempt += 1) {
    const tens = randomInt(1, 6) * 10;
    const ones = randomInt(1, 6);
    const target = tens + ones;
    const dice = Array.from({ length: 5 }, () => randomInt(1, 6));
    if (canSolveWithBasicOps(dice, target)) {
      return { tens, ones, target, dice };
    }
  }

  return {
    tens: 40,
    ones: 5,
    target: 45,
    dice: [6, 3, 2, 5, 1],
  };
}

function createSpeedrunProblemSet() {
  return Array.from({ length: SPEEDRUN_PROBLEM_COUNT }, () => createSolvableProblem());
}

function canSolveWithBasicOps(values, target) {
  const memo = new Map();

  function solve(items) {
    const key = items.slice().sort((a, b) => a - b).join(",");
    if (memo.has(key)) return memo.get(key);
    if (items.length === 1) {
      const result = new Set([roundValue(items[0])]);
      memo.set(key, result);
      return result;
    }

    const results = new Set();
    const n = items.length;
    const maxMask = 1 << n;

    for (let mask = 1; mask < maxMask - 1; mask += 1) {
      if ((mask & 1) === 0) continue;
      const left = [];
      const right = [];

      for (let index = 0; index < n; index += 1) {
        if (mask & (1 << index)) left.push(items[index]);
        else right.push(items[index]);
      }

      const leftResults = solve(left);
      const rightResults = solve(right);

      for (const a of leftResults) {
        for (const b of rightResults) {
          addResult(results, a + b);
          addResult(results, a - b);
          addResult(results, b - a);
          addResult(results, a * b);
          if (Math.abs(b) > 1e-9) addResult(results, a / b);
          if (Math.abs(a) > 1e-9) addResult(results, b / a);
        }
      }
    }

    memo.set(key, results);
    return results;
  }

  return solve(values).has(roundValue(target));
}

function findBasicSolution(values, target) {
  const seen = new Set();
  const initialItems = values.map((value) => ({ value, expression: String(value) }));

  function solve(items) {
    const key = items.map((item) => roundValue(item.value)).sort((a, b) => a - b).join(",");
    if (seen.has(key)) return null;
    seen.add(key);

    if (items.length === 1) {
      return Math.abs(roundValue(items[0].value) - roundValue(target)) < 1e-9
        ? items[0].expression
        : null;
    }

    for (let leftIndex = 0; leftIndex < items.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < items.length; rightIndex += 1) {
        const left = items[leftIndex];
        const right = items[rightIndex];
        const rest = items.filter((_, index) => index !== leftIndex && index !== rightIndex);
        const candidates = [
          { value: left.value + right.value, expression: `(${left.expression}+${right.expression})` },
          { value: left.value - right.value, expression: `(${left.expression}-${right.expression})` },
          { value: right.value - left.value, expression: `(${right.expression}-${left.expression})` },
          { value: left.value * right.value, expression: `(${left.expression}×${right.expression})` },
        ];

        if (Math.abs(right.value) > 1e-9) {
          candidates.push({ value: left.value / right.value, expression: `(${left.expression}÷${right.expression})` });
        }
        if (Math.abs(left.value) > 1e-9) {
          candidates.push({ value: right.value / left.value, expression: `(${right.expression}÷${left.expression})` });
        }

        for (const candidate of candidates) {
          if (!Number.isFinite(candidate.value) || Math.abs(candidate.value) > 10000) continue;
          const answer = solve([...rest, { value: roundValue(candidate.value), expression: candidate.expression }]);
          if (answer) return answer;
        }
      }
    }

    return null;
  }

  return solve(initialItems);
}

function addResult(results, value) {
  if (!Number.isFinite(value) || Math.abs(value) > 10000) return;
  results.add(roundValue(value));
}

function roundValue(value) {
  return Math.round(value * 1e6) / 1e6;
}

function getGameUi(mode = game.mode) {
  if (mode === "battle" || mode === "speedrun") {
    return {
      mode,
      tensDie: battleTensDie,
      onesDie: battleOnesDie,
      targetLabel: battleTargetLabel,
      diceTray: battleDiceTray,
      expressionPreview: battleExpressionPreview,
      feedback: battleFeedback,
      answerCheckButton: battleAnswerCheckButton,
      clearExpressionButton: battleClearExpressionButton,
      undoButton: battleUndoButton,
      operatorButtons: [...document.querySelectorAll(".battle-operator-bar [data-op]")],
      recordLine: null,
      felt: null,
    };
  }

  return {
    mode: "solo",
    tensDie,
    onesDie,
    targetLabel,
    diceTray,
    expressionPreview,
    feedback: gameFeedback,
    answerCheckButton,
    clearExpressionButton,
    undoButton,
    operatorButtons: [...document.querySelectorAll(".game-screen .operator-bar [data-op]")],
    recordLine,
    felt: gameFelt,
  };
}

function getAllGameUis() {
  const onlineMode = game.mode === "speedrun" ? "speedrun" : "battle";
  return [getGameUi("solo"), getGameUi(onlineMode)];
}

function renderGame() {
  const ui = getGameUi();
  ui.felt?.classList.toggle("revealed", game.isRevealed);
  ui.tensDie.textContent = game.isRevealed ? game.tens : "?";
  ui.onesDie.textContent = game.isRevealed ? game.ones : "?";
  ui.targetLabel.textContent = `목표 ${game.isRevealed ? game.target : "?"}`;
  renderDice();
  renderExpression();
  renderRecord();
  renderInputState();
}

function renderDice() {
  const ui = getGameUi();
  ui.diceTray.replaceChildren();
  ui.diceTray.hidden = !game.isRevealed;
  if (!game.isRevealed) return;

  for (const die of game.dice) {
    const button = document.createElement("button");
    button.className = `game-die white${die.used ? " used" : ""}`;
    button.type = "button";
    button.textContent = game.isRevealed ? die.value : "?";
    button.disabled = !game.isRevealed || game.isSolved || die.used;
    button.draggable = game.isRevealed && !game.isSolved && !die.used;
    button.dataset.id = die.id;
    button.setAttribute("aria-label", `흰 주사위 ${die.value}`);
    button.addEventListener("click", () => addDieToExpression(die.id));
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", die.id);
    });
    ui.diceTray.append(button);
  }
}

function renderExpression() {
  const ui = getGameUi();
  ui.expressionPreview.replaceChildren();

  if (game.tokens.length === 0) {
    ui.expressionPreview.append(createInsertSlot(0));
    const hint = document.createElement("span");
    hint.className = "empty-expression";
    hint.textContent = game.isRevealed ? "주사위와 연산자를 눌러 식을 만드세요." : "카운트다운 후 시작합니다.";
    ui.expressionPreview.append(hint);
    return;
  }

  for (const [index, token] of game.tokens.entries()) {
    ui.expressionPreview.append(createInsertSlot(index));
    ui.expressionPreview.append(token.type === "number" ? createNumberToken(token, index) : createOperatorToken(token, index));
  }

  ui.expressionPreview.append(createInsertSlot(game.tokens.length));
}

function createInsertSlot(index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `insert-slot${getInsertIndex() === index ? " active" : ""}`;
  button.setAttribute("aria-label", `${index + 1}번째 위치에 입력`);
  button.addEventListener("click", () => setInsertIndex(index));
  return button;
}

function createOperatorToken(token, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "expression-token operator-token";
  button.textContent = displayOperator(token.value);
  button.addEventListener("click", () => setInsertIndex(index + 1));
  button.addEventListener("dblclick", () => removeToken(token.id));
  return button;
}

function createNumberToken(token, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `expression-token number-token${game.powerBaseId === token.id ? " selected" : ""}`;
  button.textContent = token.value;
  button.addEventListener("click", () => handleNumberTokenTap(token.id, index));
  button.addEventListener("dblclick", () => removeToken(token.id));
  button.addEventListener("dragover", (event) => event.preventDefault());
  button.addEventListener("drop", (event) => {
    event.preventDefault();
    addPower(token.id, event.dataTransfer.getData("text/plain"));
  });

  if (token.power) {
    const power = document.createElement("sup");
    power.textContent = token.power.value;
    button.append(power);
  }

  return button;
}

function renderRecord() {
  const ui = getGameUi();
  if (!ui.recordLine) return;
  ui.recordLine.textContent = game.isRevealed
    ? "흰 주사위와 연산자를 눌러 식을 만드세요."
    : "문제가 곧 공개됩니다.";
  return;

  if (!game.isRevealed) {
    ui.recordLine.textContent = "문제가 곧 공개됩니다.";
    return;
  }

  const record = getBestRecord();
  ui.recordLine.textContent = record
    ? `이 문제 최고 기록 ${formatTime(record.time)} · ${record.expression}`
    : "이 문제의 최고 기록은 아직 없습니다.";
}

function renderInputState() {
  getAllGameUis().forEach((ui) => {
    const disabled = ui.mode !== game.mode || !game.isRevealed || game.isSolved;
    ui.answerCheckButton.disabled = disabled;
    ui.clearExpressionButton.disabled = disabled || game.tokens.length === 0;
    ui.undoButton.disabled = disabled || game.tokens.length === 0;
    ui.operatorButtons.forEach((button) => {
      if (button.dataset.op === "power") {
        button.hidden = selectedDifficulty !== "power";
        button.disabled = disabled || selectedDifficulty !== "power";
        button.classList.remove("mode-on");
        return;
      }
      button.disabled = disabled;
    });
  });
}

function setInsertIndex(index) {
  if (game.isSolved) return;
  game.insertIndex = Math.max(0, Math.min(index, game.tokens.length));
  setFeedback("선택한 위치에 다음 입력이 들어갑니다.");
  renderExpression();
}

function getInsertIndex() {
  return game.insertIndex == null ? game.tokens.length : game.insertIndex;
}

function canPlaceNumber() {
  const index = getInsertIndex();
  const previous = game.tokens[index - 1];
  return !isNumberLike(previous);
}

function canPlaceOperator(value) {
  if (value === "^" && selectedDifficulty !== "power") return false;
  return true;
}

function isNumberLike(token) {
  return token?.type === "number";
}

function isBinaryOperator(value) {
  return ["+", "-", "*", "/", "^"].includes(value);
}

function isBinaryOperatorToken(token) {
  return token?.type === "operator" && isBinaryOperator(token.value);
}

function insertToken(token) {
  const index = getInsertIndex();
  game.tokens.splice(index, 0, token);
  game.insertIndex = index + 1;
}

function addDieToExpression(dieId) {
  if (!game.isRevealed || game.isSolved) return;

  if (game.powerMode && game.powerBaseId) {
    addPower(game.powerBaseId, dieId);
    return;
  }

  const die = game.dice.find((item) => item.id === dieId);
  if (!die || die.used) return;

  if (!canPlaceNumber()) {
    setFeedback("숫자 사이에는 연산자를 먼저 넣어 주세요.", "error");
    return;
  }

  die.used = true;
  insertToken({
    id: createId("token"),
    type: "number",
    dieId: die.id,
    value: die.value,
    power: null,
  });
  game.powerMode = false;
  game.powerBaseId = null;
  setFeedback("좋아요. 연산자를 넣어 식을 완성하세요.");
  renderGame();
}

function addOperator(value) {
  if (!game.isRevealed || game.isSolved) return;
  if (!canPlaceOperator(value)) {
    setFeedback("지수는 지수 포함 난이도에서 사용할 수 있습니다.", "error");
    return;
  }

  game.powerMode = false;
  game.powerBaseId = null;

  if (replaceAdjacentOperator(value)) {
    setFeedback("연산기호를 바꿨습니다.");
    renderGame();
    return;
  }

  insertToken({
    id: createId("token"),
    type: "operator",
    value,
  });
  setFeedback("식을 계속 이어가세요.");
  renderGame();
}

function replaceAdjacentOperator(value) {
  if (!isBinaryOperator(value)) return false;

  const index = getInsertIndex();
  const previous = game.tokens[index - 1];
  const next = game.tokens[index];

  if (isBinaryOperatorToken(next)) {
    next.value = value;
    game.insertIndex = index + 1;
    return true;
  }

  if (isBinaryOperatorToken(previous)) {
    previous.value = value;
    game.insertIndex = index;
    return true;
  }

  return false;
}

function togglePowerMode() {
  if (!game.isRevealed || game.isSolved) return;
  if (selectedDifficulty !== "power") {
    setFeedback("지수는 지수 포함 난이도에서 사용할 수 있습니다.", "error");
    return;
  }

  game.powerMode = !game.powerMode;
  game.powerBaseId = null;
  game.insertIndex = null;
  setFeedback(game.powerMode ? "지수 모드입니다. 밑이 될 숫자를 누르세요." : "지수 모드를 껐습니다.");
  renderGame();
}

function handleNumberTokenTap(tokenId, index) {
  if (!game.powerMode) {
    setInsertIndex(index + 1);
    return;
  }

  const token = game.tokens.find((item) => item.id === tokenId);
  if (!token || token.type !== "number") return;
  if (token.power) {
    setFeedback("이미 지수가 있는 숫자입니다.", "error");
    return;
  }
  game.powerBaseId = tokenId;
  setFeedback("이제 지수로 사용할 흰 주사위를 누르세요.");
  renderExpression();
}

function addPower(baseTokenId, dieId) {
  if (!game.isRevealed || game.isSolved || selectedDifficulty !== "power") return;

  const token = game.tokens.find((item) => item.id === baseTokenId);
  const die = game.dice.find((item) => item.id === dieId);
  if (!token || token.type !== "number" || token.power || !die || die.used) return;

  die.used = true;
  token.power = {
    dieId: die.id,
    value: die.value,
  };
  game.powerMode = false;
  game.powerBaseId = null;
  setFeedback("지수가 추가되었습니다.");
  renderGame();
}

function removeToken(tokenId) {
  const index = game.tokens.findIndex((token) => token.id === tokenId);
  if (index === -1) return;

  const [token] = game.tokens.splice(index, 1);
  if (game.powerBaseId === token.id) game.powerBaseId = null;
  if (game.insertIndex != null) game.insertIndex = Math.min(game.insertIndex, game.tokens.length);
  releaseDiceFromToken(token);
  setFeedback("선택한 입력을 지웠습니다.");
  renderGame();
}

function undo() {
  if (!game.isRevealed || game.isSolved) return;

  const deleteIndex = game.insertIndex == null ? game.tokens.length - 1 : game.insertIndex - 1;
  if (deleteIndex < 0) return;
  const [token] = game.tokens.splice(deleteIndex, 1);
  if (!token) return;
  if (game.powerBaseId === token.id) game.powerBaseId = null;
  game.insertIndex = deleteIndex;
  releaseDiceFromToken(token);
  setFeedback("선택 위치 앞 입력을 지웠습니다.");
  renderGame();
}

function clearExpression() {
  if (!game.isRevealed || game.isSolved) return;

  game.tokens = [];
  game.insertIndex = null;
  game.powerMode = false;
  game.powerBaseId = null;
  game.dice.forEach((die) => {
    die.used = false;
  });
  setFeedback("식을 모두 지웠습니다.");
  renderGame();
}

function releaseDiceFromToken(token) {
  if (token.type !== "number") return;
  const die = game.dice.find((item) => item.id === token.dieId);
  if (die) die.used = false;
  if (token.power) {
    const powerDie = game.dice.find((item) => item.id === token.power.dieId);
    if (powerDie) powerDie.used = false;
  }
}

function checkAnswer() {
  if (!game.isRevealed || game.isSolved) return;

  const validation = validateExpression();
  if (!validation.ok) {
    setFeedback(validation.message, "error");
    return;
  }

  let value;
  try {
    value = evaluateTokens(game.tokens);
  } catch {
    setFeedback("식을 계산할 수 없습니다. 괄호와 연산자 순서를 확인하세요.", "error");
    return;
  }

  if (!Number.isFinite(value)) {
    setFeedback("0으로 나누는 식은 사용할 수 없습니다.", "error");
    return;
  }

  if (Math.abs(value - game.target) > 1e-9) {
    setFeedback(`계산값은 ${trimNumber(value)}입니다. 목표 ${game.target}에 다시 도전하세요.`, "error");
    return;
  }

  const time = game.mode === "battle"
    ? getBattleElapsedMs()
    : game.mode === "speedrun"
      ? getSpeedrunElapsedMs()
    : stopTimer();
  const expression = stringifyTokens(game.tokens);
  if (game.mode === "speedrun") {
    handleSpeedrunCorrectAnswer(time, expression);
    return;
  }

  if (game.mode === "battle") {
    handleBattleCorrectAnswer(time, expression);
    return;
  }

  game.isSolved = true;
  setFeedback("정답!");
  renderGame();
  handleCorrectAnswer(time);
}

async function handleBattleCorrectAnswer(time, expression) {
  const me = getCurrentBattlePlayer();
  if (!me) return;
  battleState.submissions = battleState.submissions.filter((submission) => submission.id !== me.id);
  battleState.submissions.push({
    id: me.id,
    name: me.name,
    time,
    expression,
    timedOut: false,
  });
  battleState.statusMap[me.id] = "완료";
  game.isSolved = true;
  markBattleAnswerSubmitted();
  stopBattleRoundTimerAt(time);
  playSuccessSound();
  setFeedback("제출 완료! 다른 사람의 식은 라운드 종료 후 공개됩니다.");
  renderGame();
  renderBattleStatuses(battleState.statusMap);

  if (battleState.firebaseRoomCode && firebaseState.ready && window.diceFirebase?.isEnabled()) {
    try {
      await window.diceFirebase.submitAnswer(battleState.firebaseRoomCode, { expression, time });
    } catch (error) {
      console.warn("Firebase 제출 상태 저장 실패:", error);
      setFeedback("제출은 완료했지만 온라인 상태 저장에 실패했습니다.", "error");
    }
  }

  maybeFinishBattleRound();
}

function validateExpression() {
  const usedCount = game.dice.filter((die) => die.used).length;
  if (usedCount !== 5) return { ok: false, message: `흰 주사위 ${5 - usedCount}개를 더 사용해야 합니다.` };
  if (game.tokens.length === 0) return { ok: false, message: "식을 먼저 만들어 주세요." };

  const syntax = validateSyntax();
  if (!syntax.ok) return syntax;
  return { ok: true };
}

function validateSyntax() {
  let balance = 0;
  let previous = "start";

  for (const token of game.tokens) {
    if (token.type === "number") {
      if (previous === "number" || previous === "close") return { ok: false, message: "숫자 사이에 연산자를 넣어 주세요." };
      previous = "number";
      continue;
    }

    if (token.value === "(") {
      if (previous === "number" || previous === "close") return { ok: false, message: "괄호 앞에는 연산자가 필요합니다." };
      balance += 1;
      previous = "open";
      continue;
    }

    if (token.value === ")") {
      if (balance === 0 || previous === "operator" || previous === "open" || previous === "start") {
        return { ok: false, message: "닫는 괄호 위치를 확인해 주세요." };
      }
      balance -= 1;
      previous = "close";
      continue;
    }

    if (previous !== "number" && previous !== "close") {
      return { ok: false, message: "연산자 앞에는 숫자나 닫는 괄호가 필요합니다." };
    }
    previous = "operator";
  }

  if (balance !== 0) return { ok: false, message: "괄호가 아직 닫히지 않았습니다." };
  if (previous === "operator" || previous === "open") return { ok: false, message: "식이 연산자나 여는 괄호로 끝날 수 없습니다." };
  return { ok: true };
}

function evaluateTokens(tokens) {
  const source = tokens.map((token) => {
    if (token.type === "operator") return token.value === "^" ? "**" : token.value;
    if (token.power) return `(${token.value}**${token.power.value})`;
    return String(token.value);
  }).join("");

  if (!/^[\d+\-*/().\s*]+$/.test(source)) throw new Error("Invalid expression");
  return Function(`"use strict"; return (${source});`)();
}

function stringifyTokens(tokens) {
  return tokens.map((token) => {
    if (token.type === "operator") return displayOperator(token.value);
    if (token.power) return `${token.value}^${token.power.value}`;
    return String(token.value);
  }).join(" ");
}

function displayOperator(value) {
  return {
    "*": "×",
    "/": "÷",
    "-": "−",
  }[value] ?? value;
}

function beginCountdown() {
  let count = 3;
  countdownLayer.hidden = false;
  countdownNumber.textContent = count;
  setFeedback("준비하세요.");

  game.countdownTimerId = window.setInterval(() => {
    count -= 1;
    if (count > 0) {
      countdownNumber.textContent = count;
      return;
    }

    clearCountdown();
    playRollReveal();
  }, 1000);
}

function playRollReveal() {
  playRollSound();
  rollStage.replaceChildren();
  rollLayer.hidden = false;

  const stageRect = rollStage.getBoundingClientRect();
  const dieSize = 50;
  const wall = 18;
  const minX = wall;
  const minY = wall;
  const maxX = Math.max(minX, stageRect.width - wall - dieSize);
  const maxY = Math.max(minY, stageRect.height - wall - dieSize);
  const centerX = (minX + maxX) / 2;
  const topRowY = minY + (maxY - minY) * 0.17;
  const trayY = minY + (maxY - minY) * 0.8;
  const bounded = (x, y) => ({
    x: clamp(x, minX, maxX),
    y: clamp(y, minY, maxY),
  });
  const randomWithin = (min, max) => {
    if (max <= min) return Math.round(min);
    return randomInt(Math.round(min), Math.round(max));
  };

  const rollDice = [
    { value: game.tens, tone: "black", ...bounded(centerX - 32, topRowY) },
    { value: game.ones, tone: "black", ...bounded(centerX + 24, topRowY) },
    ...game.dice.map((die, index) => ({
      value: die.value,
      tone: "white",
      ...bounded(minX + (maxX - minX) * (0.16 + index * 0.17), trayY),
    })),
  ];

  rollDice.forEach((die, index) => {
    const fromLeft = index % 2 === 0;
    const start = bounded(
      centerX + randomWithin(-24, 24),
      minY + randomWithin(6, 34)
    );
    const firstBounce = bounded(
      fromLeft ? minX + randomWithin(0, 20) : maxX - randomWithin(0, 20),
      randomWithin(minY + 8, maxY - 8)
    );
    const secondBounce = bounded(
      fromLeft ? maxX - randomWithin(0, 22) : minX + randomWithin(0, 22),
      randomWithin(minY + 8, maxY - 8)
    );

    const item = document.createElement("div");
    item.className = `roll-die ${die.tone}`;
    item.textContent = die.value;
    item.style.setProperty("--x0", `${start.x}px`);
    item.style.setProperty("--y0", `${start.y}px`);
    item.style.setProperty("--x1", `${firstBounce.x}px`);
    item.style.setProperty("--y1", `${firstBounce.y}px`);
    item.style.setProperty("--x2", `${secondBounce.x}px`);
    item.style.setProperty("--y2", `${secondBounce.y}px`);
    item.style.setProperty("--x3", `${die.x}px`);
    item.style.setProperty("--y3", `${die.y}px`);
    item.style.setProperty("--spin", `${randomInt(-420, 420)}deg`);
    item.style.setProperty("--spin-back", `${randomInt(-260, 260)}deg`);
    item.style.setProperty("--delay", `${index * 45}ms`);
    rollStage.append(item);
  });

  game.rollTimerId = window.setTimeout(() => {
    clearRoll();
    revealRound();
  }, 1080);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function revealRound() {
  game.isRevealed = true;
  game.elapsed = 0;
  game.startedAt = null;
  renderGame();
  startTimer();
  setFeedback("시작! 흰 주사위 5개를 모두 한 번씩 사용하세요.");
}

function clearCountdown() {
  if (game.countdownTimerId) {
    clearInterval(game.countdownTimerId);
    game.countdownTimerId = null;
  }
  countdownLayer.hidden = true;
}

function clearRoll() {
  if (game.rollTimerId) {
    clearTimeout(game.rollTimerId);
    game.rollTimerId = null;
  }
  rollLayer.hidden = true;
  rollStage.replaceChildren();
}

function startTimer() {
  if (game.startedAt) return;
  game.startedAt = performance.now() - game.elapsed;
  game.timerId = window.setInterval(updateTimer, 47);
}

function stopTimer() {
  if (!game.startedAt) return game.elapsed;
  updateTimer();
  clearInterval(game.timerId);
  game.timerId = null;
  game.startedAt = null;
  return game.elapsed;
}

function updateTimer() {
  if (!game.startedAt) return;
  const elapsed = performance.now() - game.startedAt;
  const limit = game.mode === "solo" ? normalizeSoloTimeLimit(game.timeLimit) : elapsed;
  game.elapsed = game.mode === "solo" && limit > 0 ? Math.min(elapsed, limit) : elapsed;
  gameTimer.textContent = formatTime(game.elapsed);
  if (game.mode === "solo" && limit > 0 && elapsed >= limit) {
    handleSoloTimeout();
  }
}

function handleSoloTimeout() {
  if (game.isSolved) return;
  game.isSolved = true;
  stopTimer();
  setFeedback("시간초과! 제한시간을 다시 선택하거나 다음 문제에 도전해 보세요.", "error");
  renderGame();
  openTimeoutResult(game.elapsed);
}

function formatTime(ms) {
  return (ms / 1000).toFixed(2).padStart(5, "0");
}

function formatBattleClock(ms) {
  const totalSeconds = Math.floor(Math.max(0, ms) / 1000);
  if (totalSeconds >= 60) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  return `${totalSeconds}초`;
}

function formatDurationClock(ms) {
  const totalSeconds = Math.ceil(Math.max(0, Number(ms || 0)) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateBattleElapsed(time) {
  battleElapsed.textContent = battleState.firebaseRoomCode
    ? formatBattleClock(time)
    : formatTime(time);
}

function trimNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function problemKey() {
  const diceValues = game.dice.map((die) => die.value).sort((a, b) => a - b).join(",");
  return `diceMath:record:${selectedDifficulty}:${game.target}:${diceValues}`;
}

function getBestRecord() {
  const raw = localStorage.getItem(problemKey());
  return raw ? JSON.parse(raw) : null;
}

function saveRecord(time, expression) {
  const key = problemKey();
  const current = getBestRecord();
  if (current && current.time <= time) return false;
  localStorage.setItem(key, JSON.stringify({ time, expression, savedAt: new Date().toISOString() }));
  return true;
}

function setFeedback(message, tone = "") {
  const ui = getGameUi();
  ui.feedback.textContent = message;
  ui.feedback.className = `${ui.mode === "battle" ? "game-feedback battle-feedback" : "game-feedback"}${tone ? ` ${tone}` : ""}`;
}

function handleCorrectAnswer(time) {
  progress.clears += 1;
  localStorage.setItem("diceMath.clearCount", String(progress.clears));
  renderProgress();
  scheduleUserProfileSave();
  playSuccessSound();
  openSuccessResult(time);
}

function openSuccessResult(time) {
  if (resultKicker) resultKicker.textContent = "정답!";
  const rewardStatus = getNextRewardStatus();

  resultTime.textContent = `${formatTime(time)}초`;
  resultClearCount.textContent = `${progress.clears}개`;
  resultNextReward.textContent = `${progress.clears} / ${rewardStatus.nextGoal}`;
  resultMessage.textContent = rewardStatus.resultMessage;
  updateSuccessRewardButton();
  successResult.hidden = false;
}

function openTimeoutResult(time) {
  const rewardStatus = getNextRewardStatus();

  if (resultKicker) resultKicker.textContent = "시간초과 입니다.";
  resultTime.textContent = `${formatTime(time)}초`;
  resultClearCount.textContent = `${progress.clears}개`;
  resultNextReward.textContent = `${progress.clears} / ${rewardStatus.nextGoal}`;
  resultMessage.textContent = "다음 문제에 다시 도전해 보세요.";
  resultRewardButton.hidden = true;
  successResult.hidden = false;
}

function updateSuccessRewardButton() {
  pendingRewardSkin = getPendingRewardSkin();
  resultRewardButton.hidden = !pendingRewardSkin;
}

function closeSuccessResult() {
  successResult.hidden = true;
}

function createGameAudio() {
  if (!soundEnabled) return null;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  return AudioContext ? new AudioContext() : null;
}

function playRollSound() {
  const audio = createGameAudio();
  if (!audio) return;
  const now = audio.currentTime;
  [180, 230, 165, 260, 205, 300].forEach((frequency, index) => {
    playClick(audio, now + index * 0.055, frequency);
  });
  window.setTimeout(() => audio.close(), 720);
}

function playSuccessSound() {
  const audio = createGameAudio();
  if (!audio) return;
  const now = audio.currentTime;
  playTone(audio, now + 0.02, 523, 0.1);
  playTone(audio, now + 0.12, 659, 0.11);
  playTone(audio, now + 0.24, 784, 0.16);
  playClap(audio, now + 0.12);
  playClap(audio, now + 0.28);
  window.setTimeout(() => audio.close(), 900);
}

function playRewardSound() {
  if (!soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audio = new AudioContext();
  const now = audio.currentTime;

  playClick(audio, now + 0.08, 240);
  playClick(audio, now + 0.28, 190);
  playClick(audio, now + 0.48, 150);
  playTone(audio, now + 0.78, 523, 0.09);
  playTone(audio, now + 0.9, 659, 0.1);
  playTone(audio, now + 1.04, 784, 0.16);

  window.setTimeout(() => audio.close(), 1500);
}

function playClick(audio, startAt, frequency) {
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.001, startAt);
  gain.gain.exponentialRampToValueAtTime(0.18, startAt + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.08);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + 0.09);
}

function playTone(audio, startAt, frequency, length) {
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.001, startAt);
  gain.gain.exponentialRampToValueAtTime(0.12, startAt + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, startAt + length);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + length + 0.02);
}

function playClap(audio, startAt) {
  const sampleRate = audio.sampleRate;
  const buffer = audio.createBuffer(1, Math.floor(sampleRate * 0.07), sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
  }

  const source = audio.createBufferSource();
  const filter = audio.createBiquadFilter();
  const gain = audio.createGain();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1400, startAt);
  gain.gain.setValueAtTime(0.001, startAt);
  gain.gain.exponentialRampToValueAtTime(0.09, startAt + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.001, startAt + 0.07);
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(audio.destination);
  source.start(startAt);
  source.stop(startAt + 0.08);
}
