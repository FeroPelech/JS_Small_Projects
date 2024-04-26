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
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

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
  hours.innerHTML =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  minutes.innerHTML =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  seconds.innerHTML =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
}, 1000);
