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
    const numbers = document.querySelectorAll(".numb");
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i].value);
      console.log(numbers[i].correct);
    }
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
    el.correct = Math.floor(Math.random() * 10);
    el.value = el.correct;
    gameArea.appendChild(el);
  }
}
