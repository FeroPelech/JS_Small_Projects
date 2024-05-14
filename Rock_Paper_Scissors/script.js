const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

console.log(buttons[0].textContent);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", gameLogic);
}

function gameLogic(e) {
  console.log(e.target.textContent);
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
}
