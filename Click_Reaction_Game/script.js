const btn = document.querySelector("button");
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
let inPlay = false;
console.log(gameArea);
messager("Click start button.");

btn.addEventListener("click", () => {
  if (!inPlay) {
    inPlay = true;
    btn.style.display = "none";
    messager("Click the circle as quickly as you see them.");
    showBox();
  }
});

function showBox() {
  console.log("Show box function");
}

function messager(note) {
  message.innerHTML = note;
}
