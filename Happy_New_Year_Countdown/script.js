const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearDate = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const actualTime = new Date().getTime();
  console.log(actualTime + "   " + newYearDate);
  const different = newYearDate - actualTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = 366 + Math.floor(different / day);
  const h = 23 + Math.floor((different % day) / hour);
  const m = 60 + Math.floor((different % hour) / minute);
  const s = 60 + Math.floor((different % minute) / second);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountDown, 1000);
}
