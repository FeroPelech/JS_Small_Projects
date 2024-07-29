const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const circleEl = document.querySelector(".circle");

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
    circleEl.style.backgroundColor = "rgb(69, 69, 69)";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
});
