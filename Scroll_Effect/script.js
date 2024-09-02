const image = document.getElementById("image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  image.style.opacity = 1 - window.scrollY / 800;
  console.log(window.scrollY, 1 - window.scrollY / 800);
}
