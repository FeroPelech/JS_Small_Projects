const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

let enemySpeed = 4;
let enemySpawnInterval = null;
let gameStarted = false;

let player = { speed: 5, score: 0 };

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
  let lines = document.querySelectorAll(".line");
  lines.forEach((item) => {
    if (item.y > 750) {
      item.y -= 750;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function moveEnemy(car) {
  let enemies = document.querySelectorAll(".enemy");
  enemies.forEach((item) => {
    if (isCollide(car, item)) {
      console.log("Hit");
    }
    if (item.y >= 800) {
      item.remove();
    } else {
      item.y += enemySpeed;
      item.style.top = item.y + "px";
    }
  });
}

function playGame() {
  let car = document.querySelector(".car");
  moveLines();
  moveEnemy(car);

  let road = gameArea.getBoundingClientRect();

  if (player.start) {
    if (keys.ArrowUp && player.y > 0) player.y -= player.speed;
    if (keys.ArrowDown && player.y < road.height - 150)
      player.y += player.speed;
    if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x < 150) player.x += player.speed;

    car.style.left = player.x + "px";
    car.style.top = player.y + "px";

    window.requestAnimationFrame(playGame);
    player.score++;
    score.innerText = player.score;
  }
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
}

function start() {
  if (gameStarted) return;
  gameStarted = true;

  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  player.start = true;
  player.score = 0;
  for (let x = 0; x < 5; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 150;
    div.style.top = div.y + "px";
    gameArea.appendChild(div);
  }

  let car = document.createElement("div");
  car.classList.add("car");
  car.innerText = "Car";
  gameArea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;

  if (!enemySpawnInterval) {
    enemySpawnInterval = setInterval(createEnemy, 2000);
  }

  window.requestAnimationFrame(playGame);
}

const enemyLanes = [0, 75, 150];

function createEnemy() {
  const enemies = document.querySelectorAll(".enemy");
  if (enemies.length >= 5) return;

  let attempts = 0;
  let spawned = false;

  while (attempts < 10 && !spawned) {
    const newLeft = Math.floor(Math.random() * 150);
    const newTop = -150;

    if (!isOverlapping(newTop, newLeft)) {
      let enemy = document.createElement("div");
      enemy.classList.add("enemy");
      enemy.y = newTop;
      enemy.style.top = newTop + "px";
      enemy.style.left = newLeft + "px";
      gameArea.appendChild(enemy);
      spawned = true;
    }

    attempts++;
  }
}

function isOverlapping(newTop, newLeft) {
  const enemies = document.querySelectorAll(".enemy");

  for (let enemy of enemies) {
    const existingTop = enemy.offsetTop;
    const existingLeft = enemy.offsetLeft;

    const verticalOverlap = Math.abs(existingTop - newTop) < 160;
    const horizontalOverlap = Math.abs(existingLeft - newLeft) < 55;

    if (verticalOverlap && horizontalOverlap) {
      return true;
    }
  }

  return false;
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
