const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
let result = 0;
console.log(score);

function randomSquare() {
  squares.forEach((e) => {
    console.log(e);
  });
}

randomSquare();
