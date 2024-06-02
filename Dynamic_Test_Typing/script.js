const wording = [
  "How much do you love Arsenal FC?",
  "Hope you are not spurs fan...",
  "The worst teams are spurs, ugly and protected 115 city and chelsea",
];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
console.log(playText.disabled);
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(btn.innerText);
  if (btn.innerText == "Start") {
    playText.disabled = false;
    btn.innerText == "Done";
    playGame();
  } else if (btn.innerText == "Done") {
    playText.disabled = true;
    endGame();
  }
});

function endGame() {
  let date = new Date();
  console.log("date in endgame: " + date);
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);
  let text = playText.value;
  console.log("Text: " + text);
  let wordCount = wordCounter(text);
  console.log("WordCount: " + wordCount);
}

function wordCounter(str) {
  let response = str.split(" ").length;
  return response;
}

function playGame() {
  let randomNumber = Math.floor(Math.random() * wording.length);
  message.innerText = wording[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  console.log("start time: " + startTime);
  btn.innerText = "Done";
  console.log(randomNumber);
}
