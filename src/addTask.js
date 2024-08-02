document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;
  if (taskText) {
    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    console.log("added task: " + taskText);

    document.getElementById("new-task").value = "";
  }
});
