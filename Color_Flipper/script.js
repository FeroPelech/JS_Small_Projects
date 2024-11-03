const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
const btnSimple = document.querySelector(".btn-simple");
console.log(btnSimple);
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  color.textContent = "#" + randomNumber;
  document.body.style.backgroundColor = "#" + randomNumber;
});

function getRandomNumber() {
  let = "";
  for (let i = 0; i < 6; i++) {
    let = let + hex[Math.floor(Math.random() * hex.length)];
  }
  console.log(let);
  return let;
}
