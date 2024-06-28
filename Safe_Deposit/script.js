const gameArea = document.querySelector(".game");
const btn = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gamePlay = false;
btn.addEventListener("click", () => {
  if (!gamePlay) {
    gamePlay = true;
    gameArea.innerHTML = "";
    maker();
    message.innerHTML = "Guess the combination";
    btn.innerHTML = "Check Combo";
  } else {
    score++;
    message.innerHTML = "Guesses " + score;
    const numbers = document.querySelectorAll(".numb");
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
      }
      if (winCondition === numbers.length) {
        gameEnd();
      }
    }
  }
});

function gameEnd() {
  message.innerHTML = "You solved the combination in " + score + " guesses";
  gamePlay = false;
  score = 0;
  btn.innerHTML = "Restart game";
}

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
    el.value = 0;
    gameArea.appendChild(el);
  }
}
