const btns = document.querySelectorAll("button");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    const btnValue = e.textContent;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    }
  });
});

function clearResult() {}

function calculateResult() {}
