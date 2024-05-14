const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

console.log(buttons[0].textContent);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", gameLogic);
}

function gameLogic(e) {
  console.log(e.target.textContent);
}
