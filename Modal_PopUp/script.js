const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const body = document.querySelector("body");
btn.forEach((e) => {
  makeClick(e);
});

function makeClick(el) {
  el.addEventListener("click", () => {
    modalWrapper.classList.add("showModal");
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      return modalWrapper.classList.remove("showModal");
    });
    modalWrapper.addEventListener("click", () => {
      return modalWrapper.classList.remove("showModal");
    });
    body.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key === 27) {
      }
    });
  });
}
