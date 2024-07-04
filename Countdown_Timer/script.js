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
  timeLeft();
}

function timeLeft(d) {
  let currentDate = new Date();
  console.log(Date.parse(d));
  console.log(currentDate);
  console.log(Date.parse(currentDate));
}
