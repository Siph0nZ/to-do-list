// Function to add a task \\
function addTask() {
  // Declare Variables
  var taskInput = document.getElementById("taskInput"); // Get the task from the input \\
  var taskList = document.getElementById("taskList");
  var newTaskValue = taskInput.value; // Gets value entered by taskInput
  var maxChar = 50; // Max characters for the input

  // Create a new list item
  var newTaskItem = document.createElement("li");
  newTaskItem.innerText = newTaskValue;

  // Create a delete button for each task
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove";
  deleteButton.className = "remove-button"; // CSS class
  deleteButton.onclick = function () {
    removeTask(newTaskItem);
  };

  // Create a edit button for each task
  var editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "edit-button"; // CSS class
  editButton.onclick = function () {
    editTask(newTaskItem);
  };

  // Checks if the input was empty
  if (newTaskValue === "") {
    alert("You must enter a task!");

    // Checks if the input was too long
  } else if (newTaskValue.length > maxChar) {
    newTaskValue.length > maxChar;
    alert("Your task must be less than 50 characters!");

    // Append the next list item to the task list
  } else {
    taskList.appendChild(newTaskItem);
    newTaskItem.appendChild(deleteButton);
    newTaskItem.appendChild(editButton);
  }

  // Clear the input field
  taskInput.value = "";
}

// Function to remove a task \\
function removeTask(taskItem) {
  taskItem.parentNode.removeChild(taskItem);
}

// Function to edit a task \\
