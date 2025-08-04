const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let enemySpeed = 4;
let enemySpawnInterval = null;
let gameStarted = false;
let player = { speed: 5 };
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function moveLines() {
  console.log("Move lines fucntion");
  let lines = document.querySelectorAll(".line");
  lines.forEach((item) => {
    if (item.y > 750) {
      item.y -= 750;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function moveEnemy() {
  let ele = document.querySelectorAll(".enemy");
  ele.forEach((item) => {
    if (item.y >= 750) {
      item.y -= 750;
      item.style.left = Math.floor(Math.random() * 150) + "px";
    }
    item.y += enemySpeed;
    item.style.top = item.y + "px";
  });
}

function playGame() {
  console.log("play game");
  let car = document.querySelector(".car");
  moveLines();
  moveEnemy();
  let road = gameArea.getBoundingClientRect();
  if (player.start) {
    if (keys.ArrowUp && player.y > 0) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.height - 150) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < 150) {
      player.x += player.speed;
    }
    car.style.left = player.x + "px";
    car.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
  }
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}
function start() {
  if (gameStarted) return;
  gameStarted = true;

  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  player.start = true;

  for (let x = 0; x < 5; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 150;
    div.style.top = x * 150 + "px";
    gameArea.appendChild(div);
  }

  let car = document.createElement("div");
  car.innerText = "Car";
  car.setAttribute("class", "car");
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;

  function createEnemy() {
    const enemies = document.querySelectorAll(".enemy");
    if (enemies.length >= 2) return;

    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.y = -100;
    enemy.style.top = enemy.y + "px";
    enemy.style.left = Math.floor(Math.random() * 150) + "px";
    gameArea.appendChild(enemy);
  }

  if (!enemySpawnInterval) {
    enemySpawnInterval = setInterval(createEnemy, 3000);
  }

  window.requestAnimationFrame(playGame);
}

function isOverlapping(newTop, newLeft) {
  const enemies = document.querySelectorAll(".enemy");
  for (let enemy of enemies) {
    const rect = enemy.getBoundingClientRect();
    const existingTop = enemy.offsetTop;
    const existingLeft = enemy.offsetLeft;
    const distance = Math.abs(existingTop - newTop);
    const horizontalDistance = Math.abs(existingLeft - newLeft);
  }
}
