const output = document.querySelector(".outputs");
const textArea = document.querySelector("textarea");

// textArea.addEventListener("change", textCounter);
// textArea.addEventListener("keyup", textCounter);
// textArea.addEventListener("keydown", textCounter);

["keyup", "keydown", "change"].forEach(function (e) {
  textArea.addEventListener(e, textCounter);
});

const maxLength = 10;
const warnLength = 5;

function textCounter(e) {
  let count = textArea.value.length;
  if (count > maxLength) {
    console.log(textArea.value.substring(0, maxLength));
    textArea.value = textArea.value.substring(0, maxLength);
  }
}
