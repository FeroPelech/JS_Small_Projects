const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
console.log(colors);
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  console.log("btnListener");
});