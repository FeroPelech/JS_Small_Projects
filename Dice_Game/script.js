const button1 = document.querySelector(".buttonRoll");
const button2 = document.querySelector(".buttonReset");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const output = document.querySelector(".output");
const P1Score = document.querySelector(".sumP1");
const P2Score = document.querySelector(".sumP2");
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];

let player1Sum = 0;
let player2Sum = 0;

button1.addEventListener("click", () => {
  let rolls = [roll(6), roll(6)];
  let temp;
  if (rolls[0] === rolls[1]) {
    temp = "Draw";
  } else if (rolls[0] > rolls[1]) {
    temp = "Player 1 wins";
    player1Sum++;
  } else {
    temp = "Player 2 wins";
    player2Sum++;
  }

  updateOutput(player1, rolls[0]);
  updateOutput(player2, rolls[1]);
  updateSum(player1Sum, player2Sum);
  output.innerHTML = temp + "	&#128;";
});

function updateSum(p1, p2) {
  P1Score.innerHTML = "Player 1 Score: " + p1;
  P2Score.innerHTML = "Player 2 Score: " + p2;
}

function updateOutput(el, num) {
  let holder = builder(num);
  if (el.children[0]) {
    el.children[0].remove();
  }
  el.appendChild(holder);
}

function builder(num) {
  let div = document.createElement("div");
  let diceArray = dice[num - 1];
  for (let i = 1; i < 10; i++) {
    let span = document.createElement("div");
    span.setAttribute("class", "dot");
    if (diceArray.includes(i)) {
      span.classList.add("black");
    }
    div.appendChild(span);
  }
  div.setAttribute("class", "dicer");
  console.log(div);
  return div;
}

function roll(num) {
  let randonNumber = Math.floor(Math.random() * num) + 1;
  return randonNumber;
}
