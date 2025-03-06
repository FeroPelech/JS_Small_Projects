const container = document.querySelector(".container");
const bulb = document.createElement("div");
const image = document.createElement("img");
const btn = document.createElement("button");

bulb.classList.add("bulb");
image.classList.add("image");
image.src = "./Bulbs/BulbOn.png";
image.alt = "Light";

container.appendChild(bulb);
container.appendChild(image);

console.log(container);
