const btnEl = document.querySelector(".btn");
console.log(btnEl);
btnEl.addEventListener("mouseover", (e) => {
  const x = e.pageX - btnEl.offsetLeft;
  const y = e.pageY - btnEl.offsetTop;
});
