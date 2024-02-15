const text = document.getElementById("text");
const speed = document.getElementById("speed");
const message = "Autotyping text are comming!";

let idx = 1;
let actualSpeed = 300 / speed.value;

writeText();

function writeText() {
  text.innerText = message.slice(0, idx);
  idx++;
  if (idx > message.length) {
    idx = 1;
  }

  setTimeout(writeText, actualSpeed);
}

speed.addEventListener("input", (e) => (actualSpeed = 300 / e.target.value));
