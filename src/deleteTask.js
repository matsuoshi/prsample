function deleteTask(event) {
  const taskList = document.getElementById("task-list");
  const task = event.target.parentElement;
  taskList.removeChild(task);
}
