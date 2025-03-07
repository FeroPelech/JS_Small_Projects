const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
let result = 0;
let hitPosition;
let currentTime = 60;
let countDownTimerId = setInterval(countDown, 1000);
let timerId = null;

function randomSquare() {
  squares.forEach((e) => {
    e.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

squares.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Game over! Your final score is ` + result);
  }
}
