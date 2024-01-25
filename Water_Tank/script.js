const smallTanks = document.querySelectorAll(".tank-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateMainTank();

smallTanks.forEach((e, idx) => {
  e.addEventListener("click", () => {
    highlightTanks(idx);
  });
});

function highlightTanks(idx) {
  if (
    smallTanks[idx].classList.contains("full") &&
    !smallTanks[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallTanks.forEach((e, idx2) => {
    if (idx2 <= idx) {
      e.classList.add("full");
    } else {
      e.classList.remove("full");
    }
  });
  updateMainTank();
}

function updateMainTank() {
  const fullTanks = document.querySelectorAll(".tank-small.full").length;
  const totalTanks = smallTanks.length;

  if (fullTanks === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullTanks / totalTanks) * 330}px`;
    percentage.innerText = `${(fullTanks / totalTanks) * 100}%`;
  }

  if (fullTanks === totalTanks) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullTanks) / 1000}L`;
  }
}
