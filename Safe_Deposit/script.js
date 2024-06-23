const gameArea = document.querySelector(".game");
const btn = document.querySelector("button");
let gamePlay = false;
btn.addEventListener("click", () => {
  if (!gamePlay) {
    gamePlay = true;
    btn.innerHTML = "Check Combo";
  }
});
