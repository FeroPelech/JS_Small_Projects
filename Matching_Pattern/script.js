const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "yellow"];

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

window.addEventListener("load", setup);

button.addEventListener("click", () => {
  if (!inPlay) {
    player();
  }
});

function setup() {
  for (let i = 0; i < colors.length; i++) {
    let div = eleFactor("div");
    div.style.backgroundColor = colors[i];
    div.classList.add("box");
    div.style.opacity = "0.5";
    div.myColor = colors[i];
    div.addEventListener("click", checkAnswer);
    gamearea.appendChild(div);
  }
}

function eleFactor(eleType) {
  let ele = document.createElement(eleType);
  return ele;
}

function player() {
  button.disabled = true;
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

function runSequence(num) {
  let squares = document.querySelectorAll(".box");
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * colors.length);
  console.log(randomNum);
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = "1";
    setTimeout(() => {
      el.style.opacity = "0.5";
    }, 500);
  }
  console.log(userClicks);
}
