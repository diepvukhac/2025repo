//GAME SYSTEM
const clickRollButton = document.getElementById("rolling-dice");
const resetGame = document.getElementById("reset-game");
const switchUser = document.getElementById("switch-user");

// USER
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let isPlayer1Turn = true;

// Point
const currentPlayer01 = document.getElementById("currentPlayer01");
const currentPlayer02 = document.getElementById("currentPlayer02");
const player1Count = document.getElementById("player1Count");
const player2Count = document.getElementById("player2Count");
let totalPlayer1Point = 0;
let totalPlayer2Point = 0;
let currentCorePlayer01 = 0;
let currentCorePlayer02 = 0;

// ==== Handle when player click ROLL DICE button ===
const startGame = () => {
  clickRollButton.addEventListener("click", rollDiceHandler);
};
//==== Call function  for Start Game ====
const rollDiceHandler = () => {
  const diceImage = [
    "dice-img-01.jpg",
    "dice-img-02.jpg",
    "dice-img-03.jpg",
    "dice-img-04.jpg",
    "dice-img-05.jpg",
    "dice-img-06.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * 5) + 0;
  const selectImage = diceImage[randomIndex];
  document.getElementById("diceImage").src = selectImage;

  // Check and Add Dice Point
  if (isPlayer1Turn) {
    currentCorePlayer01 += randomIndex + 1; // Calculate point
    currentPlayer01.textContent = currentCorePlayer01; // Update point
    totalPlayer1Point = totalPlayer1Point + 1;
    player1Count.textContent = totalPlayer1Point;
  } else {
    currentCorePlayer02 += randomIndex + 1; // Calculate point
    currentPlayer02.textContent = currentCorePlayer02; // Update poin
    totalPlayer2Point = totalPlayer2Point + 1;
    player2Count.textContent = totalPlayer2Point;
  }
  // Manage user click on Dice Button
  if (randomIndex === 0) {
    switchPlayer();
  }
};

// ==== Handle when player click SWITCH button ===
const switchUserClick = () => {
  switchUser.addEventListener("click", switchPlayer);
};

// Switch player function
const switchPlayer = () => {
  // Chuyển đổi lượt
  if (isPlayer1Turn === true) {
    player1.classList.remove("highlight");
    player2.classList.add("highlight");
    // Reset
    document.getElementById("diceImage").src = "dice-img-01.jpg";
  } else {
    player1.classList.add("highlight");
    player2.classList.remove("highlight");
    // Reset
    document.getElementById("diceImage").src = "dice-img-01.jpg";
  }
  // Đảo ngược lượt
  isPlayer1Turn = !isPlayer1Turn;
};

// ==== Handle when player click NEW GAME button ===
const resetTheGame = () => {
  currentCorePlayer01 = 0;
  currentCorePlayer02 = 0;
  totalPlayer1Point = 0;
  totalPlayer2Point = 0;
  currentPlayer01.textContent = currentCorePlayer01;
  currentPlayer02.textContent = currentCorePlayer02;
  player1Count.textContent = totalPlayer1Point;
  player2Count.textContent = totalPlayer2Point;
  document.getElementById("diceImage").src = "dice-img-01.jpg";
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    resetTheGame();
  }
});

startGame();
switchUserClick();
resetTheGame();
