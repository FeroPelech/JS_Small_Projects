const container = document.querySelector(".container");

const result_field = document.createElement("div");
const result_images = document.createElement("div");
const user_result = document.createElement("span");
const cpu_result = document.createElement("span");
const imageR = document.createElement("img");
const imageP = document.createElement("img");
const imageS = document.createElement("img");
const result = document.createElement("div");
const option_images = document.createElement("div");
const option_image = document.createElement("span");

result_field.classList.add("result_field");
result_images.classList.add("result_images");
user_result.classList.add("user_result");
cpu_result.classList.add("cpu_result");
result.classList.add("result");
result.textContent = "Let's Play!";
imageR.src = "./images/rock.png";
imageP.src = "./images/paper.png";
option_images.classList.add("option_images");

container.appendChild(result_field);
result_field.appendChild(result_images);
result_images.appendChild(user_result);
result_images.appendChild(cpu_result);
user_result.appendChild(imageR);
cpu_result.appendChild(imageP);
result_field.appendChild(result);
