const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "yellow"];

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

button.addEventListener("click", () => {
  if (!inPlay) {
    player();
  }
});

window.addEventListener("load", setup);

function setup() {
  for (let i = 0; i < colors.length; i++) {
    let div = eleFactor("div");
    div.style.backgroundColor = colors[i];
    div.classList.add("box");
    div.style.opacity = "0.5";
    div.myColor = colors[i];
    div.addEventListener("click", (e) => {
      let el = e.target;
      console.log(el.myColor);
    });
    gamearea.appendChild(div);
  }
}

function eleFactor(eleType) {
  let ele = document.createElement(eleType);
  return ele;
}

function player() {}
