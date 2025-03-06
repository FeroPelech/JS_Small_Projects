const container = document.querySelector(".container");
const bulb = document.createElement("div");
const image = document.createElement("img");
const btn = document.createElement("button");

bulb.classList.add("bulb");
btn.classList.add("btn");
image.classList.add("image");
image.src = "./Bulbs/BulbOn.png";
image.alt = "Light";

container.appendChild(bulb);
container.appendChild(image);
container.appendChild(btn);

console.log(container);

btn.addEventListener("click", () => {
  console.log("button");
});
