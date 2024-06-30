const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inPlay = false;
const myList = ["javascript", "website", "html", "document", "course"];
button.addEventListener("click", () => {
  console.log("kukaj");
  if (!inPlay) {
    inPlay = true;
    button.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    createWord();
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myList.length);
  let tempWord = myList[randomIndex];
  console.log(tempWord);
  console.log(randomIndex);
  return tempWord;
}

function randomArray(arr) {}
