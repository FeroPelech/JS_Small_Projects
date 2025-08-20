const images = document.querySelectorAll(".pop img");
images.forEach((ele) => {
  ele.addEventListener("click", popImage);
});

function popImage(e) {
  console.log(e.src);
}
