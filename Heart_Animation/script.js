const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const X = e.offsetX;
  const Y = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = X + "px";
  spanEl.style.top = Y + "px";
  bodyEl.appendChild(spanEl);
});
