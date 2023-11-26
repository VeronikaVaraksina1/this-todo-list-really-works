const addTaskInput = document.querySelector(".add-task-input");

const addTaskBtn = document.querySelector(".add-task-btn");

const todoList = document.querySelector(".todo-list");

addTaskBtn.addEventListener("click", () => {
  const basedImage = document.querySelector(".based-image");
  basedImage.style.display = "block";

  const liElement = document.createElement("li");
  liElement.className = "todo-list-item";
  liElement.innerText = addTaskInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";

  liElement.appendChild(deleteBtn);
  todoList.appendChild(liElement);
  addTaskInput.value = "";

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(liElement);
  });
});
