const addCardButtons = document.querySelectorAll(".addCardButton");
addCardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const addTaskBackground = document.querySelector(".addTaskBackground");
        addTaskBackground.style.display = "flex";
    });
});

let tasks = [];  // Hooson task array

function addTask() {  // Task add function
    const addTaskBackground = document.querySelector(".addTaskBackground");
    addTaskBackground.style.display = "none"
    const titleInputRef = document.getElementById("title");
    const descriptionInputRef = document.getElementById("description");
    const priorityRef = document.getElementById("priority");
    const newTask = {
        title: titleInputRef.value,
        description: descriptionInputRef.value,
        priority: priorityRef.value
    };

    if (newTask.title !== "" && newTask.description !== "") {
        tasks.push(newTask);
        titleInputRef = ""; // value hoosloh
        descriptionInputRef = "";
        priorityRef = "";
        render();
    }


};

document.getElementById("addTaskButton").addEventListener("click", addTask);

function render() {
    const tasksList = document.getElementById("tasks");
    tasksList.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.textContent = `Title: ${task.title}, Description: ${task.description}, Priority: ${task.priority}`;
        tasksList.appendChild(taskElement);
    });

}