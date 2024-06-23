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
  el.setAttribute("type", "number");
  el.max = 9;
  el.min = 0;
  el.size = 1;
  el.style.width = "130px";
  el.order = 0;
  console.log(el);
  gameArea.appendChild(el);
}
