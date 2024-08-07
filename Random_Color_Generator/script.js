const container = document.querySelector(".color-containers");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  container.appendChild(colorContainerEl);
}

const colorContainers = document.querySelectorAll(".color-container");

generateColors();

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNumber, randomNumber + 1);
  }
  return color;
}

function generateColors() {
  colorContainers.forEach((e) => {
    const newColorCode = randomColor();
    e.style.backgroundColor = "#" + newColorCode;
    e.innerText = "#" + newColorCode;
  });
}
