const btn = document.querySelector("button");
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
let inPlay = false;
let playArea = {};
let start;
console.log(gameArea);
messager("Click start button.");

btn.addEventListener("click", () => {
  if (!inPlay) {
    inPlay = true;
    btn.style.display = "none";
    messager("Click the circle as quickly as you see them.");
    showBox();
  }
});

function showBox() {
  start = new Date().getTime();
  console.log(start);
}

function rand(num) {
  let tempVal = Math.floor(Math.random() * num);
  return tempVal;
}

function messager(note) {
  message.innerHTML = note;
}
