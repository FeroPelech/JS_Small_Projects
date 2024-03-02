const container = document.getElementById("container");
const color = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseout", () => {
    removeColor(square);
  });
  container.appendChild(square);
}
