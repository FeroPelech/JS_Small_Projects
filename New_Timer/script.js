const start = document.getElementById("start");
const stopE = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
let defaultTime = 0;
let userTime;
let valueForReset;
let interval;

function updateTimer() {
  let minutes = Math.floor(userTime / 60);
  let seconds = userTime % 60;
  let formattedTime = `${minutes.toString().padStart(2, 0)}:${seconds
    .toString()
    .padStart(2, 0)}`;
  timer.innerHTML = formattedTime;
}

submit.addEventListener("click", () => {
  valueForReset = input.value * 60;
  if (input.value < 1) {
    alert("You cannot insert negative time");
  } else if (input.value < 10 && input.value > 0) {
    userTime = input.value * 60;
    timer.innerHTML = "0" + Math.floor(userTime / 60) + ":00";
    input.value = "";
  } else {
    userTime = input.value * 60;
    timer.innerHTML = Math.floor(userTime / 60) + ":00";
  }
});

start.addEventListener("click", () => {
  startTimer();
});

stopE.addEventListener("click", () => {
  stopTimer();
});

reset.addEventListener("click", () => {
  resetTimer();
});

function startTimer() {
  interval = setInterval(() => {
    userTime--;
    updateTimer();
    if (userTime === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  console.log("stop");
  clearInterval(interval);
}

function resetTimer() {
  console.log("reset");
  userTime = valueForReset;
  updateTimer();
}
