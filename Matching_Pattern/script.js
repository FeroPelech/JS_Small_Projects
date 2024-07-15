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
  runSequence();
}

function runSequence() {
  inPlay = true;
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    console.log(el.myColor);
    userClicks.push(el.myColor);
  }
  console.log(userClicks);
}
