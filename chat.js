// Initialize an array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    // Get the input element and its value
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value;

    // Check if the input is not empty
    if (newTask.trim() !== "") {
        // Add the new task to the tasks array
        tasks.push(newTask);

        // Update the display by calling the renderTasks function
        renderTasks();

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to render tasks in the UI
function renderTasks() {
    // Get the taskList element
    const taskList = document.getElementById("taskList");

    // Clear the existing tasks in the UI
    taskList.innerHTML = "";

    // Loop through the tasks array and create a list item for each task
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        // Create a button for each task to remove it
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeTask(index);
        };

        // Append the task and remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the taskList
        taskList.appendChild(listItem);
    });
}

// Function to remove a task
function removeTask(index) {
    // Remove the task at the specified index from the tasks array
    tasks.splice(index, 1);

    // Update the display by calling the renderTasks function
    renderTasks();
}
