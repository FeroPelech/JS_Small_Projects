const message = document.querySelector(".message");
const score = document.querySelector(".score");
const btn = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gameplay");

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["hearts", "diams", "clubs", "spades"];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", playGame);
}

function toggleButtons() {
  btn[0].classList.toggle("hideButton");
  btn[1].classList.toggle("hideButton");
  btn[2].classList.toggle("hideButton");
}

function playGame(e) {
  console.log(e.target);
  let temp = e.target.innerText;
  let myCard = drawCard();
  console.log(temp);
  if (temp == "Start") {
    console.log("You clicked start button");
    message.innerHTML = "Higher or Lower";
    gamePlay.innerHTML = "";
    makeCard();
    toggleButtons();
  }
}

function drawCard() {
  if (deck.length > 0) {
    let card = "";
    return card;
  } else {
  }
}

function makeDeck() {}

function makeCard() {
  console.log("Make Card function");
}
