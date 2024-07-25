const btnEl = document.querySelector(".btn");
console.log(btnEl);
btnEl.addEventListener("mouseover", (e) => {
  console.log(e.pageX - btnEl.offsetTop);
});
