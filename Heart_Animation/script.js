const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const X = e.offsetX;
  const Y = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = X + "px";
  spanEl.style.top = Y + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
