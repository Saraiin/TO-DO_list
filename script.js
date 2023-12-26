function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      li.classList.add("task-done");
    } else {
      li.classList.remove("task-done");
    }
  });

  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  taskInput.value = "";
}
