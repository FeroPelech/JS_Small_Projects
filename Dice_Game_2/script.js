const btn = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const rollHistory = document.getElementById("roll-history");
let historyList = [];

btn.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  rollDice();
  setTimeout(() => {
    dice.classList.remove("roll-animation");
  }, 1000);
});

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  dice.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
  }
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
}
