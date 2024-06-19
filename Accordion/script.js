const accordion = document.querySelectorAll(".panel");
console.log(accordion);
accordion.forEach((e) => {
  console.log(e);
  e.addEventListener("click", toggle);
});

function toggle(e) {
  this.classList.toggle("active");
}
