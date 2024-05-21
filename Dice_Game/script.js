const button = document.querySelector("button");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const output = document.getElementById("output");
const output1 = document.querySelector(".output");

console.log(output);
console.log(output1);

button.addEventListener("click", () => {
  console.log("ok");
  let rolls = [roll(6), roll(6)];
  console.log(rolls);
  let temp;
  if (rolls[0] === rolls[1]) {
    temp = "Draw";
  } else if (rolls[0] > rolls[1]) {
    temp = "Player 1 wins";
  } else {
    temp = "Player 2 wins";
  }
  output.innerHTML = temp + "	&#128;";
  player1.innerHTML = rolls[0];
  player2.innerHTML = rolls[1];
});

function roll(num) {
  let randonNumber = Math.floor(Math.random() * num) + 1;
  let n = 9855 + randonNumber;
  let char = "&#" + n + ";";
  // code for dices are from code table .net
  console.log(char);
  return randonNumber + " " + char;
}
