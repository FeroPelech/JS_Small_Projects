const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

function addTodo(todo) {
  let todoText = input.value;
  //   console.log(todoText);
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    todoUL.appendChild(todoEl);
    input.value = "";
  }
}
