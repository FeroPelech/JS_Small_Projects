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
  let temp = e.target.innerText;
  let myCard = drawCard();
  let win = false;
  if (temp == "Start") {
    message.innerHTML = "Higher or Lower";
    gamePlay.innerHTML = myCard.rank + myCard.suit;
    makeCard(myCard);
    toggleButtons();
    return;
  }
  if (myCard.value == curCardValue) {
    win = "draw";
    message.innerHTML = "Draw";
  } else {
    if (
      (temp == "Higher" && myCard.value > curCardValue) ||
      (temp == "Lower" && myCard.value < curCardValue)
    ) {
      scoreValue++;
      score.innerHTML = scoreValue;
      message.innerHTML = "Correct, next?";
    } else {
      message.innerHTML = "Game Over";
      toggleButtons();
    }
  }
  makeCard(myCard);
}

function drawCard() {
  if (deck.length > 0) {
    let randIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randIndex, 1)[0];
    return card;
  } else {
    makeDeck();
    return drawCard();
  }
}

function makeDeck() {
  deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let y = 0; y < ranks.length; y++) {
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[y];
      card.value = y + 1;
      deck.push(card);
    }
  }
}

function makeCard(card) {
  let html1 = card.rank + "<br>&" + card.suit + ";";
  let html2 = card.rank + "&" + card.suit + ";";
  let curCards = document.querySelectorAll(".card");
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.style.left = curCards.length * 25 + "px";
  curCardValue = card.value;
  if (card.suit === "hearts" || card.suit === "diams") {
    div.classList.add("red");
  }

  let span1 = document.createElement("span");
  span1.setAttribute("class", "tiny");
  span1.innerHTML = html2;
  div.appendChild(span1);

  let span2 = document.createElement("span");
  span2.setAttribute("class", "big");
  span2.innerHTML = html1;
  div.appendChild(span2);

  gamePlay.appendChild(div);
}
