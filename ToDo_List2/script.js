const container = document.querySelector(".container");

const newtask = document.createElement("div");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "  New task";
console.log(input);
newtask.id = "newtask";
container.appendChild(newtask);
newtask.appendChild(input);
console.log(newtask);
console.log(container);
