const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelectorAll(".close");
const images = document.querySelectorAll(".pop img");
images.forEach((ele) => {
  ele.addEventListener("click", popImage);
});

function popImage(e) {
  console.log(this.src);
}
