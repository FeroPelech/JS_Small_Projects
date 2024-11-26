const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
let result = 0;
console.log(score);

function randomSquare() {
  squares.forEach((e) => {
    e.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  console.log(randomNumber);
}

randomSquare();
