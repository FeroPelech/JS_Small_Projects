const output = document.querySelector(".outputs");
const textArea = document.querySelector("textarea");
console.log(textArea);

textArea.addEventListener("change", textCounter);
textArea.addEventListener("keyup", textCounter);
textArea.addEventListener("keydown", textCounter);
