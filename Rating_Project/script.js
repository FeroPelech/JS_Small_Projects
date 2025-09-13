const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");
for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  console.log(stars[i]);
  ["mouseover", "mouseout", "click"].forEach((e) => {
    stars[i].addEventListener(e, starRate);
  });
}

function starRate(e) {
  let t = e.type;
  let starValue = this.starValue;
}
