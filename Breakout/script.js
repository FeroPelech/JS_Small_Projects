const grid = document.querySelector(".grid");
const blockWidth = 100;

function addBlock() {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.left = "100px";
  block.style.bottom = "50px";
  grid.appendChild(block);
  console.log(block);
}

addBlock();
