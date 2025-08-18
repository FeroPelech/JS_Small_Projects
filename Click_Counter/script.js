const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const p = document.querySelector(".text_note");
let score = 0;

btn.addEventListener("click", () => {
  score++;
  console.log(score);
  changeP(score);
});

function changeP(s) {
  p.innerHTML = `You clicked on button ${s} times.`;
}

function ranColor() {
  let hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}
