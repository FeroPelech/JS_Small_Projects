const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let winner = [0, 0];

console.log(buttons[0].textContent);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", gameLogic);
}

function gameLogic(e) {
  let playerSelection = e.target.textContent;
  let randomNumber = Math.random();
  let compSelection = "";
  if (randomNumber <= 0.33) {
    compSelection = "Rock";
  } else if ((randomNumber > 0.33) & (randomNumber < 0.66)) {
    compSelection = "Paper";
  } else {
    compSelection = "Scissors";
  }
  console.log("Computer: " + compSelection);
  let result = checkWinner(playerSelection, compSelection);
  if (result === "Player") {
    result += " wins!";
    winner[0]++;
  } else if (result === "Computer") {
    result += " wins!";
    winner[1]++;
  } else {
    result += " result in a tie match";
  }
  score.innerHTML =
    "<small>Player</small>[" +
    winner[0] +
    "]<small>Computer</small>[" +
    winner[1] +
    "]";
  messager(
    playerSelection + " vs " + compSelection + "<br><b>" + result + "</b>"
  );
}

function messager(mes) {
  message.innerHTML = mes;
}

function checkWinner(pl, co) {
  if (pl === co) {
    return "Draw";
  }
  if (pl === "Rock") {
    if (co === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Paper") {
    if (co === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (pl === "Scissors") {
    if (co === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}
