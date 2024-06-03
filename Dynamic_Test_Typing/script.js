const wording = [
  "How much do you love Arsenal FC?",
  "Hope you are not spurs fan...",
  "The worst teams are spurs, ugly and protected 115 city and chelsea",
];
let startTime, endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const btn = document.querySelector(".StartBtn");
const btnReset = document.querySelector(".ResetBtn");

btn.addEventListener("click", () => {
  if (btn.innerText == "Start") {
    playText.disabled = false;
    btn.innerText == "Done";
    playGame();
  } else if (btn.innerText == "Done") {
    playText.disabled = true;
    btn.innerText = "Start";
    endGame();
  }
});

function endGame() {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let text = playText.value;
  let wordCount = wordCounter(text);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMessage = "You typed at " + speed + " words per minute.";
  finalMessage += "<br>" + compareWords(message.innerText, text);
  message.innerHTML = finalMessage;
}

function wordCounter(str) {
  let response = str.split(" ").length;
  return response;
}

function compareWords(str1, str2) {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item === words2[index]) {
      cnt++;
    }
  });
  return cnt + " correct out of " + words1.length + " words";
}

function playGame() {
  let randomNumber = Math.floor(Math.random() * wording.length);
  message.innerText = wording[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
}
