const output = document.querySelector(".output");
const button = document.querySelector("button");
const myName = document.querySelector("input");

button.addEventListener("click", showMessage);

function showMessage() {
  output.innerHTML = `<h1>Hello and welcome ` + myName.value + ` </h1>`;
}
