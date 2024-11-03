const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
const btnSimple = document.querySelector(".btn-simple");
console.log(btnSimple);
const btnHex = document.querySelector(".btn-hex");
console.log(btnHex);
statusS = 0;
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
  console.log("btnSimple");
  statusS = 0;
  console.log(statusS);
});
btnHex.addEventListener("click", () => {
  console.log("btnHex");
  statusS = 1;
  console.log(statusS);
});

btn.addEventListener("click", () => {
  if (statusS === 1) {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    color.textContent = "#" + randomNumber;
    document.body.style.backgroundColor = "#" + randomNumber;
  } else {
    color.textContent = "Simple color";
  }
});

function getRandomNumber() {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code = code + hex[Math.floor(Math.random() * hex.length)];
  }
  console.log(code);
  return code;
}
