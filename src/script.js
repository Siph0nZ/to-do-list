// Function to add a task \\
function addTask() {
  // Get the task from the input \\
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  // Gets value entered by taskInput
  var newTaskValue = taskInput.value;

  // Create a new list item \\
  var newTaskItem = document.createElement("li");
  newTaskItem.innerText = newTaskValue;

  // Checks if the input was empty
  if (newTaskValue === "") {
    alert("You must enter a task!");
  } else {
    // Append the next list item to the task list
    taskList.appendChild(newTaskItem);
  }

  // Clear the input field
  taskInput.value = "";
}
