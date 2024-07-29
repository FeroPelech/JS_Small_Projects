const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
console.log(inputEl.checked);

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}
