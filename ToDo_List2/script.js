const container = document.querySelector(".container");

const newtask = document.createElement("div");

const input = document.createElement("input");

const btn = document.createElement("button");

const tasks = document.createElement("div");
input.type = "text";
input.placeholder = "  New task";
console.log(btn);
newtask.id = "newtask";
tasks.id = "tasks";
btn.id = "push";
btn.textContent = "Insert";

container.appendChild(newtask);
container.appendChild(tasks);
newtask.appendChild(input);
newtask.appendChild(btn);

btn.addEventListener("click", () => {
  if (input.value.length == 0) {
    alert("Please enter a Task.");
  } else {
    tasks.innerHTML += `
    <div class=task>
    hen
    </div>
    `;
  }
  console.log(input.value);
});
console.log(newtask);
console.log(container);
console.log(tasks);
