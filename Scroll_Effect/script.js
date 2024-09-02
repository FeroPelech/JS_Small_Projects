const image = document.getElementById("image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  image.style.opacity = 1 - window.scrollY / 800;
  image.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}
