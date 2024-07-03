const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");
let inPlay = false;
let scramble = "";
let scrambled = "";
let score = 0;
const myList = ["javascript", "website", "html", "document", "course"];
button.addEventListener("click", () => {
  if (!inPlay) {
    inPlay = true;
    button.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = scrambled;
  } else {
    score++;
    let tempGuess = guess.value;
    if (tempGuess === scramble) {
      result.innerHTML =
        "Correct ! It was " + scramble + " and your score is: " + score;
      button.innerHTML = "Reset";
      if (button.textContent === "Reset") {
        score = 0;
        inPlay = false;
        guess.value = "";
        guess.classList.toggle("hidden");
      }
    } else {
      console.log("Guess again");
      result.innerHTML = "Guess again!";
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myList.length);
  let tempWord = myList[randomIndex];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let jou = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[jou];
    arr[jou] = temp;
  }
  return arr;
}
