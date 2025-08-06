const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

let enemySpeed = 4;
let enemySpawnInterval = null;
let gameStarted = false;

let player = { speed: 5, score: 0, start: false };

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

function moveEnemies(car) {
  let enemies = document.querySelectorAll(".enemy");
  enemies.forEach((enemy) => {
    enemy.y += enemySpeed;

    if (enemy.y >= 800) {
      enemy.y = -150;
      enemy.style.left = `${Math.floor(Math.random() * 150)}px`;
      enemy.style.backgroundColor = randomColor();
    }

    enemy.style.top = enemy.y + "px";

    if (isCollide(car, enemy)) {
      endGame();
    }
  });
}

function playGame() {
  let car = document.querySelector(".car");
  moveLines();
  moveEnemies(car);

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
    score.innerText = "Score: " + player.score;
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
  gameArea.innerHTML = "";
  player.start = true;
  player.score = 0;

  // 💠 Biele čiary na ceste
  for (let x = 0; x < 5; x++) {
    let div = document.createElement("div");
    div.classList.add("line");
    div.y = x * 150;
    div.style.top = div.y + "px";
    gameArea.appendChild(div);
  }

  // 🟦 Hráčovo auto
  let car = document.createElement("div");
  car.classList.add("car");
  car.innerText = "Car";
  gameArea.appendChild(car);

  // 🔽 Umiestnime hráča dolu
  player.x = 75;
  player.y = gameArea.offsetHeight - 160;
  car.style.left = player.x + "px";
  car.style.top = player.y + "px";

  // 🔴 Spustenie generovania nepriateľov
  if (!enemySpawnInterval) {
    enemySpawnInterval = setInterval(() => {
      if (document.querySelectorAll(".enemy").length < 6) {
        createEnemy();
      }
    }, 2000);
  }

  window.requestAnimationFrame(playGame);
}

function createEnemy() {
  let enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.y = -150;
  enemy.style.top = enemy.y + "px";
  enemy.style.left = `${Math.floor(Math.random() * 150)}px`;
  enemy.style.backgroundColor = randomColor();
  gameArea.appendChild(enemy);
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

function endGame() {
  player.start = false;
  score.innerHTML = "Game Over<br>Score was: " + player.score;
  startScreen.classList.remove("hide");
  clearInterval(enemySpawnInterval);
  enemySpawnInterval = null;
  gameStarted = false;
}

function randomColor() {
  const hex = () => {
    let h = Math.floor(Math.random() * 256).toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  return "#" + hex() + hex() + hex();
}
