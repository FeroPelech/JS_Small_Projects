const textAreaEl = document.getElementById("textarea");
console.log(textAreaEl);
const totalCounter = document.getElementById("total-counter");
console.log(totalCounter);
const remainingCounter = document.getElementById("remaining-counter");
console.log(remainingCounter);

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounter.innerText = textAreaEl.value.length;
  remainingCounter.innerText =
    textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}
