const accordion = document.querySelectorAll(".panel");
console.log(accordion);
accordion.forEach((e) => {
  console.log(e);
  e.addEventListener("click", toggleE);
});
