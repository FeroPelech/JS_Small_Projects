const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const p = document.querySelector(".text_note");
let score = 0;

btn.addEventListener("click", () => {
  score++;
  console.log(score);
});

function changeP(s) {
  p.innerHTML = `You clicked on button ${s} times.`;
}
