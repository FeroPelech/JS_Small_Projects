window.addEventListener("load", init);
const myWords = [
  "javascript",
  "html",
  "course",
  "laurence",
  "coding",
  "brackets",
];
let cur = 0;
let startTime;

function init() {
  let div = document.createElement("div");
  div.setAttribute("class", "message");
  div.innerText = "Press start button";
  document.body.appendChild(div);
  let btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Start Game";
  btn.addEventListener("click", start);
  document.body.appendChild(btn);
  let div1 = document.createElement("div");
  div1.classList.add("game");
  document.body.appendChild(div1);
}

function start() {
  cur = 0;
  startTime = Date.parse(new Date());
  console.log(startTime);
  this.style.display = "none";
  myWords.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  const game = document.querySelector(".game");
  myWords.forEach((item) => {
    let temp = item.split("");
    temp.sort((a, b) => {
      return 0.5 - Math.random();
    });
    let temp1 = temp.join("");
    let div = document.createElement("div");
    div.innerText = "Select";
    div.classList.add("box");
    div.style.backgroundColor = "red";
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "white";
      div.innerText = temp1;
    });
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "red";
      div.innerText = "Select";
    });
    div.addEventListener("click", () => {
      if (div.word === myWords[cur]) {
        console.log("right");
        this.classList.add("hidden");
        cur++;
        nextWord();
      } else {
        console.log("wrong");
      }
    });
    game.appendChild(div);
  });
  nextWord();
}

function nextWord() {
  if (cur >= myWords.length) {
    let endTime = Date.parse(new Date());
    let duration = (endTime - startTime) / 1000;
    message("Game Over played " + duration + "seconds");
  } else {
    message("Select this Word: " + myWords[cur]);
  }
}

function message(output) {
  document.querySelector(".message").innerHTML = output;
}
