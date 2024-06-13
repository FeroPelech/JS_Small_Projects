let myBlock;
document.addEventListener("DOMContentLoaded", () => {
  myBlock = document.createElement("div");
  myBlock.className = "myBlock";
  myBlock.textContent = "Hello";
  myBlock.style.width = "100px";
  myBlock.style.height = "100px";
  myBlock.style.backgroundColor = "Blue";
  myBlock.style.color = "White";
  myBlock.style.lineHeight = "100px";
  myBlock.style.textAlign = "center";
  myBlock.style.position = "absolute";
  myBlock.style.top = "100px";
  myBlock.style.left = "150px";
  document.body.appendChild(myBlock);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
});

function goLeft() {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + "px";
}

function goRight() {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + "px";
}

function goUp() {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + "px";
}

function goDown() {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + "px";
}
