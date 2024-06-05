let myBlock;
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hej");
  myBlock = document.createElement("div");
  myBlock.className = "myBlock";
  myBlock.textContent = "Hello";
  myBlock.style.width = "100px";
  myBlock.style.height = "100px";
  document.body.appendChild(myBlock);
});
