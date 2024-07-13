const message = document.querySelector(".message");
const gamearea = document.querySelector(".gamearea");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "yellow"];

button.addEventListener("click", () => {
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
});
