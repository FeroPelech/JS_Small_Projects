const circles = document.querySelectorAll(".circle");
const steps = document.getElementById("steps");
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");
let counter = 1;

buttonNext.addEventListener("click", () => {
  counter++;
  if (counter > circles.length) {
    counter = circles.length;
  }
  update();
});

buttonPrev.addEventListener("click", () => {
  counter--;
  if (counter < 1) {
    counter = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < counter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
