const score = document.querySelector(".score");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
let keys = {
  space: false,
};
function pressOn(e) {
  console.log(e);
}

function pressOff(e) {
  console.log(e);
}
