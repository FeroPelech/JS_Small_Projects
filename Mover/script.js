let myBlock;
document.addEventListener("DOMContentLoaded", () => {
  myBlock = document.createElement("div");
  myBlock.className = "myBlock";
  myBlock.textContent = "Hello";
  myBlock.style.width = "100px";
  myBlock.style.height = "100px";
  myBlock.style.backgroundColor = "Blue";
  myBlock.style.color = "White";
  document.body.appendChild(myBlock);
});
