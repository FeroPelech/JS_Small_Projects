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
  stars.forEach((ele, ind) => {});
  if (t === "click") {
    if (ind < starValue) {
      ele.classList.Add("orange");
    } else {
      ele.classList.remove("orange");
    }
    if (t === "mouseover") {
      if (ind < starValue) {
        ele.classList.add("yellow");
      } else {
        ele.classList.remove("yellow");
      }
    }
    if (t === "mouseout") {
      ele.classList.remove("yellow");
    }
  }
}
