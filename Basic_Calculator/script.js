const btns = document.querySelectorAll("button");
const input = document.getElementById("result");
console.log(input);

btns.forEach((e) => {
  e.addEventListener("click", () => {
    const btnValue = e.textContent;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue(btnValue);
    }
  });
});

function clearResult() {
  input.value = "";
}

function calculateResult() {
  input.value = eval(input.value);
}

function appendValue(btnValue) {
  input.value += btnValue;
}
