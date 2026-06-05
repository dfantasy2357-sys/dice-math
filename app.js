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
const onlineBackButton = document.querySelector("#onlineBackButton");
const leaveRoomButton = document.querySelector("#leaveRoomButton");
const onlineStateLabel = document.querySelector("#onlineStateLabel");
const onlineStateCopy = document.querySelector("#onlineStateCopy");
const onlineProgressCount = document.querySelector("#onlineProgressCount");
const onlineProgressFill = document.querySelector("#onlineProgressFill");
const createRoomButton = document.querySelector("#createRoomButton");
const joinRoomButton = document.querySelector("#joinRoomButton");
const joinCodeSheet = document.querySelector("#joinCodeSheet");
const joinCodeBackdrop = document.querySelector("#joinCodeBackdrop");
const joinCodeClose = document.querySelector("#joinCodeClose");
const joinCodeInput = document.querySelector("#joinCodeInput");
const joinCodeSubmit = document.querySelector("#joinCodeSubmit");
const matchSizeButtons = document.querySelectorAll("[data-match-size]");
const friendInviteButton = document.querySelector("#friendInviteButton");
const roomCodeLabel = document.querySelector("#roomCodeLabel");
const lobbyModeLabel = document.querySelector("#lobbyModeLabel");
const onlinePlayerName = document.querySelector("#onlinePlayerName");
const scoreBoard = document.querySelector("#scoreBoard");
const onlineReadyButton = document.querySelector("#onlineReadyButton");
const battleRoundPanel = document.querySelector("#battleRoundPanel");
const battleElapsed = document.querySelector("#battleElapsed");
const battleStatusList = document.querySelector("#battleStatusList");
const battleResultList = document.querySelector("#battleResultList");
const soloSheet = document.querySelector("#soloSheet");
const sheetBackdrop = document.querySelector("#sheetBackdrop");
const sheetClose = document.querySelector("#sheetClose");
const sheetStart = document.querySelector("#sheetStart");
const difficultyCards = document.querySelectorAll("[data-difficulty]");
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
  clears: Number(localStorage.getItem("diceMath.clearCount") || 37),
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
};

let selectedDifficulty = localStorage.getItem("diceMath.difficulty") || "basic";
let selectedSkin = localStorage.getItem("diceMath.skin") || "basic";
let pendingRewardSkin = null;
let nextId = 0;
const usedMockRoomCodes = new Set(["A7K2Q9"]);
const battleState = {
  roomMode: "비공개 친구 방",
  playerCount: 4,
  round: 0,
  players: [],
  phase: "lobby",
  roundStartedAt: null,
  roundTimerId: null,
  roundEndTimerId: null,
  autoStartTimerId: null,
  autoStartIntervalId: null,
  statusTimerIds: [],
};

setTimeout(() => {
  splash.classList.add("done");
}, 1450);

renderProgress();
renderDifficulty();
applySkin(selectedSkin, { closeSheet: false });
renderGame();

nicknameInput.addEventListener("input", () => {
  const value = nicknameInput.value.trim();
  nicknamePreview.textContent = value || "닉네임을 정해주세요";
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
  });
});

soloButton.addEventListener("click", openSoloSheet);
onlineButton.addEventListener("click", openOnlineScreen);
onlineBackButton.addEventListener("click", openHome);
leaveRoomButton.addEventListener("click", openOnlineScreen);
createRoomButton.addEventListener("click", () => openBattleLobby("비공개 친구 방", 4));
joinRoomButton.addEventListener("click", openJoinCodeSheet);
joinCodeBackdrop.addEventListener("click", closeJoinCodeSheet);
joinCodeClose.addEventListener("click", closeJoinCodeSheet);
joinCodeSubmit.addEventListener("click", joinRoomWithCode);
joinCodeInput.addEventListener("input", () => {
  joinCodeInput.value = joinCodeInput.value.toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, "");
});
matchSizeButtons.forEach((button) => {
  button.addEventListener("click", () => openBattleLobby(`${button.dataset.matchSize}인 자동매칭`, Number(button.dataset.matchSize)));
});
friendInviteButton.addEventListener("click", () => openBattleLobby("친구 초대 방", 4));
onlineReadyButton.addEventListener("click", startMockBattleRound);
sheetBackdrop.addEventListener("click", closeSoloSheet);
sheetClose.addEventListener("click", closeSoloSheet);
sheetStart.addEventListener("click", openGameScreen);
gameBackButton.addEventListener("click", openHome);
answerCheckButton.addEventListener("click", checkAnswer);
clearExpressionButton.addEventListener("click", clearExpression);
undoButton.addEventListener("click", undo);
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

previewDice.forEach((die) => {
  die.draggable = false;
  die.addEventListener("dragstart", (event) => event.preventDefault());
});

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
}

function claimSkin(skin) {
  claimedSkinIds.add(skin);
  localStorage.setItem("diceMath.claimedSkins", JSON.stringify([...claimedSkinIds]));
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
  const isUnlocked = progress.clears >= progress.onlineGoal;
  onlineProgressCount.textContent = isUnlocked
    ? `${progress.clears}개 클리어`
    : `${progress.clears} / ${progress.onlineGoal}`;
  onlineProgressFill.style.width = `${Math.round(onlineRatio * 100)}%`;
  onlineStateLabel.textContent = isUnlocked ? "온라인 대전 입장 가능" : "100개 달성 후 해금";
  onlineStateCopy.textContent = isUnlocked
    ? "친구와 방을 만들거나 자동 매칭으로 같은 문제를 동시에 풀 수 있어요."
    : `혼자하기 ${progress.onlineGoal - progress.clears}개를 더 클리어하면 정식 온라인 대전이 열려요. 지금은 화면 흐름을 미리 볼 수 있어요.`;
  onlineButton.classList.toggle("unlocked", isUnlocked);
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

function renderDifficulty() {
  difficultyCards.forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === selectedDifficulty);
  });
  gameDifficultyLabel.textContent = selectedDifficulty === "power" ? "지수 포함" : "사칙연산";
  gamePowerOp.classList.toggle("hidden-op", selectedDifficulty !== "power");
  renderInputState();
}

function openSoloSheet() {
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

function joinRoomWithCode() {
  const code = joinCodeInput.value.trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{6}$/.test(code)) {
    joinCodeInput.focus();
    return;
  }
  closeJoinCodeSheet();
  openBattleLobby("코드 참가 방", 4, code);
}

function openOnlineScreen() {
  closeSoloSheet();
  closeJoinCodeSheet();
  closeSuccessResult();
  stopTimer();
  clearCountdown();
  clearRoll();
  renderOnlineProgress();
  resetMockBattle();
  home.classList.remove("active");
  gameScreen.classList.remove("active");
  onlineScreen.classList.add("active");
  setOnlinePhase("menu");
}

function openBattleLobby(mode, playerCount = 4, roomCode = createRoomCode()) {
  clearBattleTimers();
  battleState.roomMode = mode;
  battleState.playerCount = playerCount;
  battleState.round = 0;
  battleState.players = createMockPlayers(playerCount);
  battleState.phase = "lobby";
  roomCodeLabel.textContent = roomCode;
  lobbyModeLabel.textContent = progress.clears >= progress.onlineGoal ? mode : `${mode} 미리보기`;
  onlinePlayerName.textContent = battleState.players[0].name;
  battleRoundPanel.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  onlineReadyButton.disabled = false;
  onlineReadyButton.textContent = "모두 준비 완료 미리보기";
  renderScoreBoard();
  setOnlinePhase("lobby");
}

function resetMockBattle() {
  clearBattleTimers();
  battleState.roomMode = "비공개 친구 방";
  battleState.playerCount = 4;
  battleState.round = 0;
  battleState.players = createMockPlayers(4);
  battleState.phase = "lobby";
  lobbyModeLabel.textContent = "비공개 대기방";
  roomCodeLabel.textContent = "A7K2Q9";
  onlinePlayerName.textContent = battleState.players[0].name;
  battleRoundPanel.hidden = true;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  onlineReadyButton.disabled = false;
  onlineReadyButton.textContent = "모두 준비 완료 미리보기";
  renderScoreBoard();
}

function setOnlinePhase(phase) {
  battleState.phase = phase;
  onlineScreen.classList.remove("phase-menu", "phase-lobby", "phase-playing", "phase-result");
  onlineScreen.classList.add(`phase-${phase}`);
}

function createMockPlayers(playerCount) {
  const names = [
    nicknameInput.value.trim() || "나의 닉네임",
    "번개 계산왕",
    "칠판 마스터",
    "주사위 박사",
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

function clearBattleTimers() {
  if (battleState.roundTimerId) clearInterval(battleState.roundTimerId);
  if (battleState.roundEndTimerId) clearTimeout(battleState.roundEndTimerId);
  if (battleState.autoStartTimerId) clearTimeout(battleState.autoStartTimerId);
  if (battleState.autoStartIntervalId) clearInterval(battleState.autoStartIntervalId);
  battleState.statusTimerIds.forEach((timerId) => clearTimeout(timerId));
  battleState.roundTimerId = null;
  battleState.roundEndTimerId = null;
  battleState.autoStartTimerId = null;
  battleState.autoStartIntervalId = null;
  battleState.statusTimerIds = [];
  battleState.roundStartedAt = null;
}

function startMockBattleRound() {
  if (!battleState.players.length) resetMockBattle();
  clearBattleTimers();
  setOnlinePhase("playing");
  battleState.roundStartedAt = performance.now();
  battleRoundPanel.hidden = false;
  battleResultList.hidden = true;
  battleResultList.replaceChildren();
  onlineReadyButton.disabled = true;
  onlineReadyButton.textContent = "라운드 진행 중";
  lobbyModeLabel.textContent = `${battleState.roomMode} · ${battleState.round + 1}라운드`;
  battleElapsed.textContent = "00.00";
  renderBattleStatuses({});

  battleState.roundTimerId = window.setInterval(() => {
    battleElapsed.textContent = formatTime(performance.now() - battleState.roundStartedAt);
  }, 47);

  battleState.statusTimerIds = [
    window.setTimeout(() => renderBattleStatuses({ [battleState.players[0].id]: "입력중" }), 650),
    window.setTimeout(() => renderBattleStatuses({ [battleState.players[0].id]: "완료" }), 1050),
    window.setTimeout(() => {
      const statusMap = {};
      battleState.players.slice(0, Math.max(1, battleState.playerCount - 2)).forEach((player) => {
        statusMap[player.id] = "완료";
      });
      renderBattleStatuses(statusMap);
    }, 1600),
  ];
  battleState.roundEndTimerId = window.setTimeout(showMockBattleResult, 2600);
}

function renderBattleStatuses(statusMap = {}) {
  battleStatusList.replaceChildren(
    ...battleState.players.map((player, index) => {
      const status = statusMap[player.id] || "풀이중";
      const row = document.createElement("div");
      const avatar = document.createElement("span");
      const name = document.createElement("strong");
      const state = document.createElement("span");
      avatar.className = "party-avatar";
      avatar.textContent = index === 0 ? "나" : String(index + 1);
      name.textContent = player.name;
      state.textContent = status;
      row.className = "party-member";
      row.dataset.status = status;
      row.append(avatar, name, state);
      return row;
    })
  );
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
  battleResultList.replaceChildren(
    ...roundResults.map((result) => {
      const row = document.createElement("li");
      const rank = document.createElement("span");
      const name = document.createElement("strong");
      const time = document.createElement("em");
      const expression = document.createElement("small");
      rank.textContent = result.rankLabel;
      name.textContent = result.name;
      time.textContent = result.timedOut ? "시간초과" : `${result.time}초`;
      expression.textContent = result.timedOut
        ? `120초 초과 · +${result.points}점`
        : `${result.expression} · +${result.points}점`;
      row.classList.toggle("timeout", result.timedOut);
      row.append(rank, name, time, expression);
      return row;
    })
  );
  battleResultList.hidden = false;
  onlineReadyButton.disabled = true;
  startAutoNextRoundCountdown();
  renderScoreBoard();
}

function startAutoNextRoundCountdown() {
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

function createMockRoundResults() {
  const solvedCount = battleState.playerCount === 2 ? 1 : Math.min(2, battleState.playerCount);
  const solvedPlayers = battleState.players.slice(0, solvedCount);
  const timeoutPlayers = battleState.players.slice(solvedCount);
  const expressions = ["6×(5+2)-4", "(4+5)×3-2", "5×5-6+4", "2^(4-2)+6"];
  const times = ["08.42", "19.18", "31.07", "44.63"];

  return [
    ...solvedPlayers.map((player, index) => ({
      ...player,
      rankLabel: String(index + 1),
      points: (battleState.playerCount - index) * 10,
      time: times[index],
      expression: expressions[index],
      timedOut: false,
    })),
    ...timeoutPlayers.map((player) => ({
      ...player,
      rankLabel: "초과",
      points: 5,
      time: "120.00",
      expression: "",
      timedOut: true,
    })),
  ];
}

function renderScoreBoard() {
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
  closeSuccessResult();
  clearBattleTimers();
  home.classList.remove("active");
  onlineScreen.classList.remove("active");
  gameScreen.classList.add("active");
  startRound();
}

function openHome() {
  closeSuccessResult();
  stopTimer();
  clearCountdown();
  clearRoll();
  clearBattleTimers();
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
  gameTimer.textContent = "00.00";
  setFeedback("카운트다운 후 숫자가 공개됩니다.");
  renderGame();
  beginCountdown();
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

function addResult(results, value) {
  if (!Number.isFinite(value) || Math.abs(value) > 10000) return;
  results.add(roundValue(value));
}

function roundValue(value) {
  return Math.round(value * 1e6) / 1e6;
}

function renderGame() {
  gameFelt.classList.toggle("revealed", game.isRevealed);
  tensDie.textContent = game.isRevealed ? game.tens : "?";
  onesDie.textContent = game.isRevealed ? game.ones : "?";
  targetLabel.textContent = `목표 ${game.isRevealed ? game.target : "?"}`;
  renderDice();
  renderExpression();
  renderRecord();
  renderInputState();
}

function renderDice() {
  diceTray.replaceChildren();
  diceTray.hidden = !game.isRevealed;
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
    diceTray.append(button);
  }
}

function renderExpression() {
  expressionPreview.replaceChildren();

  if (game.tokens.length === 0) {
    expressionPreview.append(createInsertSlot(0));
    const hint = document.createElement("span");
    hint.className = "empty-expression";
    hint.textContent = game.isRevealed ? "주사위와 연산자를 눌러 식을 만드세요." : "카운트다운 후 시작합니다.";
    expressionPreview.append(hint);
    return;
  }

  for (const [index, token] of game.tokens.entries()) {
    expressionPreview.append(createInsertSlot(index));
    expressionPreview.append(token.type === "number" ? createNumberToken(token, index) : createOperatorToken(token, index));
  }

  expressionPreview.append(createInsertSlot(game.tokens.length));
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
  if (!game.isRevealed) {
    recordLine.textContent = "문제가 곧 공개됩니다.";
    return;
  }

  const record = getBestRecord();
  recordLine.textContent = record
    ? `이 문제 최고 기록 ${formatTime(record.time)} · ${record.expression}`
    : "이 문제의 최고 기록은 아직 없습니다.";
}

function renderInputState() {
  const disabled = !game.isRevealed || game.isSolved;
  answerCheckButton.disabled = disabled;
  clearExpressionButton.disabled = disabled || game.tokens.length === 0;
  undoButton.disabled = disabled || game.tokens.length === 0;
  operatorButtons.forEach((button) => {
    if (button.dataset.op === "power") {
      button.hidden = selectedDifficulty !== "power";
      button.disabled = disabled || selectedDifficulty !== "power";
      button.classList.remove("mode-on");
      return;
    }
    button.disabled = disabled;
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

  const time = stopTimer();
  const expression = stringifyTokens(game.tokens);
  const improved = saveRecord(time, expression);
  game.isSolved = true;
  setFeedback(improved ? "정답! 이 문제 최고 기록을 세웠어요." : "정답!");
  renderGame();
  handleCorrectAnswer(time);
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
  game.elapsed = performance.now() - game.startedAt;
  gameTimer.textContent = formatTime(game.elapsed);
}

function formatTime(ms) {
  return (ms / 1000).toFixed(2).padStart(5, "0");
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
  gameFeedback.textContent = message;
  gameFeedback.className = `game-feedback${tone ? ` ${tone}` : ""}`;
}

function handleCorrectAnswer(time) {
  progress.clears += 1;
  localStorage.setItem("diceMath.clearCount", String(progress.clears));
  renderProgress();
  openSuccessResult(time);
}

function openSuccessResult(time) {
  const rewardStatus = getNextRewardStatus();

  resultTime.textContent = `${formatTime(time)}초`;
  resultClearCount.textContent = `${progress.clears}개`;
  resultNextReward.textContent = `${progress.clears} / ${rewardStatus.nextGoal}`;
  resultMessage.textContent = rewardStatus.resultMessage;
  updateSuccessRewardButton();
  successResult.hidden = false;
}

function updateSuccessRewardButton() {
  pendingRewardSkin = getPendingRewardSkin();
  resultRewardButton.hidden = !pendingRewardSkin;
}

function closeSuccessResult() {
  successResult.hidden = true;
}

function playRewardSound() {
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
