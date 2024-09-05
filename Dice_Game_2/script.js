const btn = document.getElementById("roll-button");
const dice = document.getElementById("dice");

btn.addEventListener("click", () => {
  console.log("Clicked");
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
  }, 1000);
});
