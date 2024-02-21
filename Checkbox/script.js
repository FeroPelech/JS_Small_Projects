const toggles = document.querySelectorAll(".toggle");
const fly = document.getElementById("fly");
const power = document.getElementById("power");
const wisdom = document.getElementById("wisdom");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doContent(e.target))
);

function doContent(part) {
  if (part === fly && fly.checked === true) {
    const fly = document.createElement("div");
    fly.setAttribute("id", "newFly");
    const newFlyContent = document.createTextNode(
      "And now, you can fly like an Eagle"
    );
    fly.appendChild(newFlyContent);
    document.body.appendChild(fly);
  }
  if (part === fly && fly.checked === false) {
    const elementDeleteF = document.getElementById("newFly");
    elementDeleteF.remove();
  }

  if (part === power && power.checked === true) {
    const Power = document.createElement("div");
    Power.setAttribute("id", "newPower");
    const newPowerContent = document.createTextNode(
      "And now, you are more powerfull than Hercules"
    );
    Power.appendChild(newPowerContent);
    document.body.appendChild(Power);
  }
  if (part === power && power.checked === false) {
    const elementDeleteP = document.getElementById("newPower");
    elementDeleteP.remove();
  }
}
