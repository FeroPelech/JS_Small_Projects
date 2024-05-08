const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let current = date.getHours();
  let message;
  if (current > 17) {
    message = "Its evening";
  } else if (current > 12) {
    message = "Its afternoon";
  } else if (current > 0) {
    message = "Its morning";
  } else {
    message = "Something is wrong";
  }
  output.innerHTML = `<h1>` + message + `</h1>`;
}
