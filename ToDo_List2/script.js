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
        <span id="taskname">
            ${input.value}
        </span>
        <button type="submit" class = "delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </button>
    </div>
    `;
    input.value = "";
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {}
    console.log(current_tasks);
  }
  console.log(input.value);
});
console.log(newtask);
console.log(container);
console.log(tasks);
