const container = document.querySelector(".container");

const result_field = document.createElement("div");
const result_images = document.createElement("div");
const user_result = document.createElement("span");
const image = document.createElement("img");

result_field.classList.add("result_field");
result_images.classList.add("result_images");
user_result.classList.add("user_result");

container.appendChild(result_field);
result_field.appendChild(result_images);
result_images.appendChild(user_result);
user_result.appendChild(image);
console.log(image);
