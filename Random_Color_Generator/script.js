const container = document.querySelector(".color-containers");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  container.appendChild(colorContainerEl);
}
