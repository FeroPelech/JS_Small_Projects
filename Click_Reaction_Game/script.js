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
  myBox();
}

function rand(num) {
  let tempVal = Math.floor(Math.random() * num);
  console.log("som tu" + tempVal);
  return tempVal;
}

function myBox() {
  let el = document.createElement("div");
  el.classList.add("box");
  el.style.backgroundColor = "red";
  el.style.width = rand(30) + 70 + "px";
  el.style.height = rand(30) + 70 + "px";
  el.style.borderRadius = rand(50) + "%";
  el.style.position = "relative";
  el.style.top = "150px";
  el.style.left = "50px";
  gameArea.appendChild(el);
}

function messager(note) {
  message.innerHTML = note;
}
