const msg = document.querySelector(".message");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const btn = document.querySelector("button");
const myWords = ["javascript", "course", "laurence"];
let player = {};

btn.addEventListener("click", () => {
  myWords.sort(() => {
    return 0.5 - Math.random();
  });
  let theWords = myWords.shift();
  player.solution = theWords.split("");
  buildBoard();
  console.log(player.solution);
});

function buildBoard() {
  player.solution.forEach((element) => {
    console.log(element);
  });
}
