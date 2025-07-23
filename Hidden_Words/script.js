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
  console.log(div1);
}

function start() {
  cur = 0;
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
      div.innerText = "Select";
    });
    div.addEventListener("mouseleave", () => {
      div.style.backgroundColor = "red";
      div.innerText = "Select";
    });
    div.addEventListener("click", () => {
      console.log("click");
    });
    game.appendChild(div);
    console.log(item);
  });
  message("Select this Word");
}

function message(output) {
  document.querySelector(".message").innerHTML = output;
}
