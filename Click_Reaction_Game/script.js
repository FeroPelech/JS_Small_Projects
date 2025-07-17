const btn = document.querySelector("button");
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
let inPlay = false;
let playArea = {};
let start;
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
  playArea.timer = setTimeout(myBox, rand(3000));
}

function rand(num) {
  let tempVal = Math.floor(Math.random() * num);
  return tempVal;
}

function myBox() {
  let el = document.createElement("div");
  el.classList.add("box");
  el.style.backgroundColor = getColor();
  el.style.width = rand(30) + 70 + "px";
  el.style.height = rand(30) + 70 + "px";
  el.style.borderRadius = rand(50) + "%";
  el.style.position = "relative";
  el.style.top = rand(150) + "px";
  el.style.left = rand(50) + "px";
  el.addEventListener("click", hit);
  gameArea.appendChild(el);
}

function hit(e) {
  let end = new Date().getTime();
  let duration = (end - start) / 1000;
  messager("It took " + duration + " seconds to click.");
  clearTimeout(playArea.timer);
  gameArea.children[0].remove();
  playArea.timer = setTimeout(myBox, rand(3000));
}

function messager(note) {
  message.innerHTML = note;
}

function getColor() {
  function col() {
    let hex = rand(255).toString(16);
    return ("0" + String(hex)).slice(-2);
  }
  return "#" + col() + col() + col();
}
