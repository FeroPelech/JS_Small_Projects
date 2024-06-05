let myBlock;
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hej");
  myBlock = document.createElement("div");
  myBlock.textContent = "Hello";
  document.body.appendChild(myBlock);
});
