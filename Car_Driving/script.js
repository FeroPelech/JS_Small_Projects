const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);

function pressOn(e) {
  e.preventDefault();
  console.log("on", e.key);
}
function start() {
  console.log("Click");
}
