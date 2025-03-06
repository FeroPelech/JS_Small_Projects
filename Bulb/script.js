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

btn.addEventListener("click", () => {
  if (
    image.src == "http://127.0.0.1:5500/JS_Small_Projects/Bulb/Bulbs/BulbOn.png"
  ) {
    image.src = "./Bulbs/BulbOff.png";
    console.log(image.src);
  } else {
    image.src = "./Bulbs/BulbOn.png";
  }
});
