const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
const savedValue = localStorage.getItem("countDown") || false;

if (savedValue) {
  startClock(savedValue);
}

endDate.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(endDate.value);
  const temp = new Date(endDate.value);
  console.log(temp);
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
    console.log("Start Clock" + tl.days);
    for (let pro in tl) {
      console.log(pro, tl[pro]);
      let el = document.querySelector("." + pro);
      if (el) {
        console.log(el);
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
  console.log(days);

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
