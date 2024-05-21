const button = document.querySelector("button");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const output = document.querySelector(".output");
const dice = [
  [5],
  [1, 9],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 3, 4, 6, 7, 9],
];

button.addEventListener("click", () => {
  let rolls = [roll(6), roll(6)];
  let temp;
  if (rolls[0] === rolls[1]) {
    temp = "Draw";
  } else if (rolls[0] > rolls[1]) {
    temp = "Player 1 wins";
  } else {
    temp = "Player 2 wins";
  }

  updateOutput(player1, rolls[0]);
  updateOutput(player2, rolls[1]);
  output.innerHTML = temp + "	&#128;";
});

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
  return div;
}

function roll(num) {
  let randonNumber = Math.floor(Math.random() * num) + 1;
  return randonNumber;
}
