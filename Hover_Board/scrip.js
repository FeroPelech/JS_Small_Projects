const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
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

function setColor(e) {
  const color = getRandomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 5px ${color}, 0 0 50px ${color}`;
}

function removeColor(e) {
  e.style.background = "rgb(51, 51, 51, 0.492)";
  // e.style.boxShadow = "0 0 2px black";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
