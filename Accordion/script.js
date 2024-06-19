const accordion = document.querySelectorAll(".panel");
console.log(accordion);
accordion.forEach((e) => {
  console.log(e);
  e.addEventListener("click", (e) => {
    console.log("First " + e);
    console.log("Second " + this);
    console.log("Third " + e.target);
  });
});
