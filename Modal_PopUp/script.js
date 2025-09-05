const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const body = document.querySelector("body");
btn.forEach((e) => {
  makeClick(e);
});

function makeClick(el) {
  el.addEventListener("click", () => {
    modalWrapper.classList.add("showModal");
  });
}
