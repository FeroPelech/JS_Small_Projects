const monthN = document.getElementById("month-name");
const dayN = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");
const days = [""];

const date = new Date();
const month = date.getMonth();
const cMonth = date.toLocaleString("sk", { month: "long" });
const cDay = date.toLocaleString("sk", { weekday: "long" });
const cYear = date.getFullYear();

monthN.innerText = cMonth.charAt(0).toUpperCase() + cMonth.slice(1);
year.innerText = cYear;
dayN.innerText = cDay.charAt(0).toUpperCase() + cDay.slice(1);
