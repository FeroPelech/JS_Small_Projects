const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");

endDate.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(endDate.value);
  const temp = new Date(endDate.value);
  console.log(temp);
  startClock(temp);
});

function startClock(d) {
  console.log(timeLeft(d));
  timeLeft(d);
}

function timeLeft(d) {
  let currentDate = new Date();
  let t = Date.parse(d) - Date.parse(currentDate);
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
