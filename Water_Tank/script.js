const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaind = document.getElementById("remained");

smallCups.forEach((e, idx) => {
  e.addEventListener("click", () => {
    highlightCups(idx);
  });
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((e, idx2) => {
    if (idx2 <= idx) {
      e.classList.add("full");
    } else {
      e.classList.remove("full");
    }
  });
}
