const output = document.querySelector(".outputs");
const textArea = document.querySelector("textarea");
console.log(textArea);

// textArea.addEventListener("change", textCounter);
// textArea.addEventListener("keyup", textCounter);
// textArea.addEventListener("keydown", textCounter);

["keyup", "keydown", "change"].forEach(function (e) {
  textArea.addEventListener(e, textCounter);
});

const maxLength = 10;

function textCounter(e) {
  let count = textArea.value.length;
}
