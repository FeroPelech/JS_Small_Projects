let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.querySelector(".date");

setInterval(() => {
  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;

  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
  date.innerHTML =
    currentTime.getDate() + ":" + month + ":" + currentTime.getFullYear();
}, 1000);
