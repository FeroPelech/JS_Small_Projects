const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
const btnSimple = document.querySelector(".btn-simple");
console.log(btnSimple);
const btnHex = document.querySelector(".btn-hex");
console.log(btnHex);
let statusS = 0;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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

if (statusS === 0) {
  btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    color.textContent = "#" + randomNumber;
    document.body.style.backgroundColor = "#" + randomNumber;
  });
} else {
}

function getRandomNumber() {
  let = "";
  for (let i = 0; i < 6; i++) {
    let = let + hex[Math.floor(Math.random() * hex.length)];
  }
  console.log(let);
  return let;
}
