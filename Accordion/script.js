const accordion = document.querySelectorAll(".panel");
accordion.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", toggle);
});

function toggle(e) {
  accordion.forEach((efE) => {
    efE.classList.remove("active");
  });
  this.classList.toggle("active");
}
