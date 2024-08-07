const imageContainer = document.querySelector(".image-container");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x += 45;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  x -= 45;
  updateGallery();
});

imageContainer.addEventListener("click", (e) => {
  console.log("X: " + e.clientX);
  console.log("Y: " + e.clientY);
  let x = e.clientX;
  let y = e.clientY;
  if (x > 500 && x < 830 && y > 300 && y < 530) {
    console.log("hit");
  }
});

function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
