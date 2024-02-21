const toggles = document.querySelectorAll(".toggle");
const fly = document.getElementById("fly");
const power = document.getElementById("power");
const wisdom = document.getElementById("wisdom");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doContent(e.target))
);

function doContent(part) {
  console.log(part);
  if (part === fly && fly.checked === true) {
    const Fly = document.createElement("div");
    const newFlyContent = document.createTextNode("And now, you can fly");
    Fly.appendChild(newFlyContent);
    document.body.appendChild(Fly);
  }
}
