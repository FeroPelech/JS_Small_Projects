const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelector(".close");
const images = document.querySelectorAll(".pop img");
images.forEach((ele) => {
  ele.addEventListener("click", popImage);
});

close.addEventListener("click", hide);

function popImage(e) {
  console.log(this.src);
  output.querySelector("img").setAttribute("src", this.src);
  show.classList.remove("hide");
}

function hide() {
  show.classList.add("hide");
  output.querySelector("img").setAttribute("src", "");
}
