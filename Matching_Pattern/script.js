const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "yellow"];

button.addEventListener("click", () => {
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
});

window.addEventListener("load", setup);

function setup() {
  console.log("Setup function");
  for (let i = 0; i < colors.length; i++) {
    let div = eleFactor("div");
    gamearea;
  }
}

function eleFactor(eleType) {
  let ele = document.createElement(eleType);
  console.log("kuk");
  return ele;
}
