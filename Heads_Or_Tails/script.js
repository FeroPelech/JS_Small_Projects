const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coins = ["Heads", "Tails"];
let score = [0, 0];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let toss = Math.floor(Math.random() * coins.length);
  let computerGuess = coins[toss];
  message.innerHTML = "Computer Selected " + computerGuess + "<br>";
  let output;

  if (playerGuess === computerGuess) {
    output = "You Wins!!!";
    score[0]++;
  } else {
    output = "You Lose and computer Wins!!!";
    score[1]++;
  }
  message.innerHTML +=
    output +
    "<br>Your score is: " +
    score[0] +
    "<br>Computer score is: " +
    score[1];
}
