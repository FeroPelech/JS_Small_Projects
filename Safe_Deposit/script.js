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
  for (let x = 0; x < 4; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.value = 0;
    el.style.width = "40px";
    el.classList.add("numb");
    el.value = 0;
    el.order = x;
    gameArea.appendChild(el);
  }
}
