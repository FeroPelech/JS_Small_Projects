const accordion = document.querySelectorAll(".panel");
accordion.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", toggle);
});

function toggle(e) {
  accordion.forEach((efE) => {
    efE.classList.remove("active");
  });
  const allA = document.querySelectorAll(".active");
  console.log(allA);
  allA.forEach((eFE2) => {
    eFE2.classList.remove("active");
  });
  this.classList.toggle("active");
}
