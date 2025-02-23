const container = document.querySelector(".container");

const newtask = document.createElement("div");

const input = document.createElement("input");

const btn = document.createElement("button");
input.type = "text";
input.placeholder = "  New task";
console.log(btn);
newtask.id = "newtask";
btn.id = "push";
btn.textContent = "Insert";
container.appendChild(newtask);
newtask.appendChild(input);
newtask.appendChild(btn);
console.log(newtask);
console.log(container);
