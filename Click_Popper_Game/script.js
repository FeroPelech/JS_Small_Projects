const playArea = {};
const player = {};
let gameObj;

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
document.addEventListener("DOMContentLoaded", getData);

player.score = 0;
player.items = 3;

playArea.btns.forEach((e) => {
  e.addEventListener("click", handleBtn);
});

function getData() {
  playArea.main.classList.add("visible");
  fetch("https://discoveryvip.com/shared/json.php?f=game")
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      gameObj = data.data;
    });
}

function handleBtn(e) {
  if (e.target.classList.contains("newGame")) {
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  console.log("start");
}
