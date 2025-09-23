const score = document.querySelector(".score");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
document.addEventListener("click", start);
let keys = {
  space: false,
};
let player = {
  score: 0,
  speed: 2,
  inplay: false,
};

function start() {
  gameMessage.classList.add("hide");
  player.inplay = true;
  player.plane = document.createElement("div");
  player.plane.setAttribute("class", "plane");
  gameArea.appendChild(player.plane);
  window.requestAnimationFrame(playGame);
  player.x = player.plane.offsetLeft;
}

function playGame() {
  if (player.inplay) {
    if (keys.ArrowUp) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight) {
      player.x += player.speed;
    }
    player.plane.style.left = player.x + "px";
    player.plane.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
  }
}

function pressOn(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = true;
}

function pressOff(e) {
  e.preventDefault();
  let tempKey = e.key == " " ? "space" : e.key;
  keys[tempKey] = false;
}
