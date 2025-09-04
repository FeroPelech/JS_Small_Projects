const btn = document.querySelectorAll(".modal");
btn.forEach((e) => {
  console.log(e);
  makeClick(e);
});

function makeClick(el) {
  console.log("func");
}
