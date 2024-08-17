const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});
