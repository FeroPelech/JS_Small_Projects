const container = document.querySelector(".container");
const squares = Array.from(document.querySelectorAll(".container div"));
console.log(squares);

for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  container.appendChild(square);
}
