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
  }
});
