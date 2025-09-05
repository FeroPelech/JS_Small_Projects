const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const body = document.querySelector("body");
btn.forEach((e) => {
  console.log(e);
  makeClick(e);
});

function makeClick(el) {
  el.addEventListener("click", () => {
    console.log("func");
    modalWrapper.classList.add("showModal");
  });
}
