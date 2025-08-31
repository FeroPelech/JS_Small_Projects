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
    let div = document.createElement("div");
    div.classList.add("letter2");
    div.innerText = "_";
    div.myLetter = element;
    output2.appendChild(div);
  });
  for (let x = 0; x < 26; x++) {
    let temp = String.fromCharCode(65 + x);
    console.log(temp);
    let div = document.createElement("div");
    div.classList.add("letter");
    div.myLetter = temp;
    div.innerHTML = temp;
    output1.appendChild(div);
  }
}
