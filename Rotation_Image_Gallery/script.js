const imageContainer = document.querySelector(".image-container");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x += 45;
  updateGallery();
});

function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
