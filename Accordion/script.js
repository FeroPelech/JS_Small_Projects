const accordion = document.querySelectorAll(".panel");
accordion.forEach((e) => {
  e.addEventListener("click", toggle);
});

function toggle(e) {
  accordion.forEach((efE) => {
    if (e.target.parentElement === efE) {
      this.classList.toggle("active");
    } else {
      efE.classList.remove("active");
    }
  });
}
