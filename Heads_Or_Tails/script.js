const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  console.log(e.target.innerText);
}
