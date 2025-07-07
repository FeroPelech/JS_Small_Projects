const btn = document.querySelector("button");
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
let inPlay = false;
console.log(gameArea);

btn.addEventListener("click", () => {
  if (!inPlay) {
    inPlay = true;
    btn.style.display = "none";
  }
});
