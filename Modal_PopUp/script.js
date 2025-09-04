const btn = document.querySelectorAll(".modal");
btn.forEach((e) => {
  console.log(e);
  makeClick(e);
});

function makeClick(el) {
  el.addEventListener("click", () => {
    console.log("func");
  });
}
