const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let current = date.getHours();
  let message;
  if (current > 17) {
    message = "Its evening";
    output.style.backgroundColor = "black";
  } else if (current > 12) {
    message = "Its afternoon";
    output.style.backgroundColor = "purple";
  } else if (current > 0) {
    message = "Its morning";
    output.style.backgroundColor = "green";
  } else {
    message = "Something is wrong";
    output.style.backgroundColor = "red";
  }
  output.innerHTML = `<h1>` + message + `</h1>`;
}
