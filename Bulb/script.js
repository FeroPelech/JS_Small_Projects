const container = document.querySelector(".container");
const bulb = document.createElement("div");
const image = document.createElement("img");

bulb.classList.add("bulb");
image.src = "./Bulbs/BulbOn.png";
image.alt = "Light";

container.appendChild(bulb);

console.log(container);
