const gameArea = document.querySelector(".game");
const btn = document.querySelector("button");
let gamePlay = false;
btn.addEventListener("click", () => {
  if (!gamePlay) {
    gamePlay = true;
    maker();
    btn.innerHTML = "Check Combo";
  } else {
    console.log("checker");
  }
});

function maker() {
  let el = document.createElement("input");
  console.log(el);
  gameArea.appendChild(el);
}
