const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");
for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  console.log(stars[i]);
  stars[i].addEventListener("click", starRate);
}
