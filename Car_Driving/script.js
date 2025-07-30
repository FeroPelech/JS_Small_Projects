const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame() {
  console.log("play game");
  window.requestAnimationFrame(playGame);
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
  console.log("on", e.key);
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}
function start() {
  console.log("Click");
  window.requestAnimationFrame(playGame);
}
