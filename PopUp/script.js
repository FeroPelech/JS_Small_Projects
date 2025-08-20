const images = document.querySelectorAll(".pop img");
images.forEach((ele) => {
  console.log(ele);
});

function popImage(e) {
  console.log(this.src);
}
