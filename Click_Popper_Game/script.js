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
      buildBoard();
    });
}

function buildBoard() {
  console.log("ola");
  let rows = 4;
  let cols = 4;
  let cnt = 0;
  playArea.game.style.width = cols * 100 + cols * 2;
  playArea.game.style.margin = "auto";
  for (let i = 0; i < cols; i++) {
    let divMain = document.createElement("div");
    divMain.setAttribute("class", "row");
    divMain.style.width = cols * 100 + cols * 2;
    for (let x = 0; x < rows; x++) {
      let div = document.createElement("div");
      div.setAttribute("class", "pop");
      cnt++;
      div.innerText = cnt;
      div.cnt = cnt;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}

function handleBtn(e) {
  if (e.target.classList.contains("newGame")) {
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove("visible");
  playArea.game.classList.add("visible");
  console.log("start");
}
