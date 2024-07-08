const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem("countDown") || false;

if (savedValue) {
  startClock(savedValue);
  let inputValue = new Date(savedValue);
  endDate.valueAsDate = inputValue;
}

endDate.addEventListener("change", (e) => {
  e.preventDefault();
  const temp = new Date(endDate.value);
  localStorage.setItem("countDown", temp);
  startClock(temp);
  timeStop = true;
});

function startClock(d) {
  function updateCouter() {
    let tl = timeLeft(d);
    if (tl.total <= 0) {
      timeStop = false;
    }
    for (let pro in tl) {
      let el = document.querySelector("." + pro);
      if (el) {
        el.innerHTML = tl[pro];
      }
    }
  }
  updateCouter();
  if (timeStop) {
    timeInterval = setInterval(updateCouter, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

function timeLeft(d) {
  let currentDate = new Date();
  let t = Date.parse(d) - Date.parse(currentDate);
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24) - 2;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
