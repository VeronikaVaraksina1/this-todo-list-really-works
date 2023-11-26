const addTaskInput = document.querySelector(".add-task-input");

const addTaskBtn = document.querySelector(".add-task-btn");

const todoList = document.querySelector(".todo-list");

const basedImage = document.querySelector(".based-image");

addTaskBtn.addEventListener("click", () => {
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
    basedImage.style.display = "none";
  });
});
