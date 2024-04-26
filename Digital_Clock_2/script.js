const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let indexDate = document.getElementById("date");

setInterval(() => {
  let date = new Date();
  indexDate.innerHTML =
    days[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear();
}, 1000);
