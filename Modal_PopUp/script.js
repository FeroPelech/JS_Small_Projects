const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
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
