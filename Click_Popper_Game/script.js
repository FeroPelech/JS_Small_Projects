const playArea = {};
const player = {};

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
console.log(playArea);

player.score = 0;
player.items = 3;

playArea.btns.forEach((e) => {
  console.log(e);
  e.addEventListener("click", handleBtn);
});

function handleBtn(e) {
  console.log(e.target.classList.contains("newGame"));
  if (e.target.classList.contains("newGame")) {
    console.log("Holla");
  }
}
