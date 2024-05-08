const button = document.querySelector("button");
const output = document.querySelector(".output");
let message;

button.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let current = date.getHours();
  if (current > 17) {
    message = "Its evening";
  } else if (current > 12) {
    message = "Its afternoon";
  } else if (current > 0) {
    message = "Its morning";
  } else {
    message = "Something is wrong";
  }
}
