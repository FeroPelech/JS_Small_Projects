const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
console.log(colors);
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
