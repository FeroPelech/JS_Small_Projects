const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const btnSimple = document.querySelector(".btn-simple");
const btnHex = document.querySelector(".btn-hex");
let statusS = 0;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleColorText = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Pink",
  "Orange",
  "Purple",
];
const simpleColorCode = [
  "#cc0000",
  "#61c237",
  "#2d7db9",
  "#FFFF00",
  "#FFC0CB",
  "#FFA500",
  "#A020F0",
];

btnSimple.addEventListener("click", () => {
  statusS = 0;
});
btnHex.addEventListener("click", () => {
  statusS = 1;
});

btn.addEventListener("click", () => {
  if (statusS === 1) {
    const randomNumber = getRandomNumber();
    color.textContent = "#" + randomNumber;
    document.body.style.backgroundColor = "#" + randomNumber;
  } else {
    const simpleNumberColor = getSimpleColorNumber();
    color.textContent = simpleColorText[simpleNumberColor];
    document.body.style.backgroundColor = simpleColorCode[simpleNumberColor];
  }
});

function getRandomNumber() {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code = code + hex[Math.floor(Math.random() * hex.length)];
  }
  return code;
}

function getSimpleColorNumber() {
  let number = Math.floor(Math.random() * simpleColorText.length);
  return number;
}
