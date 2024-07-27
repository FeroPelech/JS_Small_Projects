const imageContainer = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
let h = 3;

btnEl.addEventListener("click", () => {
  h++;
  addImage();
});

function addImage() {
  const newImg = document.createElement("img");
  newImg.src = `https://picsum.photos/300?random=${h}`;
  imageContainer.appendChild(newImg);
}
