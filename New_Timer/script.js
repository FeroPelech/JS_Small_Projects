const start = document.getElementById("start");
const stopE = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const submit = document.getElementById("submit");
const input = document.getElementById("input");
let defaultTime = 0;

submit.addEventListener("click", () => {
  defaultTime = input.value;
  if (defaultTime > 9) {
    timer.innerText = defaultTime + ":00";
  } else if (defaultTime < 9 && defaultTime > 0) {
    timer.innerText = "0" + defaultTime + ":00";
  } else {
    alert("You cannot insert negative time");
  }
});
