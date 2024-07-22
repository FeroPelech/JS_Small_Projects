const monthN = document.getElementById("month-name");
const dayN = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
const cMonth = date.toLocaleString("sk", { month: "long" });

monthN.innerText = cMonth.charAt(0).toUpperCase() + cMonth.slice(1);
