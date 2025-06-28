const message = document.querySelector(".message");
const score = document.querySelector(".score");
const btn = document.querySelectorAll("button");
const gamePlay = document.querySelector(".gameplay");

let curCardValue = 0;
let scoreValue = 0;
let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}
