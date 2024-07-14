const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "yellow"];

button.addEventListener("click", () => {});

window.addEventListener("load", setup);

function setup() {
  for (let i = 0; i < colors.length; i++) {
    let div = eleFactor("div");
    div.style.backgroundColor = colors[i];
    div.classList.add("box");
    gamearea.appendChild(div);
  }
}

function eleFactor(eleType) {
  let ele = document.createElement(eleType);
  return ele;
}
