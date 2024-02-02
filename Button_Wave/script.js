const btn = document.querySelectorAll(".ripple");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    const wave = document.createElement("span");
    wave.classList.add("wave");
    wave.style.top = yInside + "px";
    wave.style.left = xInside + "px";

    this.appendChild(wave);
    setTimeout(() => wave.remove(), 500);
  });
});
