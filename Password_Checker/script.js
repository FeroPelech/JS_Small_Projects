const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inPlay = false;
let scramble = "";
let scrambled = "";
const myList = ["javascript", "website", "html", "document", "course"];
button.addEventListener("click", () => {
  if (!inPlay) {
    inPlay = true;
    button.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = scrambled;
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
    console.log(temp);
    console.log(i);
    console.log(jou);
    arr[i] = arr[jou];
    arr[jou] = temp;
  }
  return arr;
}
