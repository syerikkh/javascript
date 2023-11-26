const addCardButtons = document.querySelectorAll(".addCardButton");
addCardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const addTaskBackground = document.querySelector(".addTaskBackground");
        addTaskBackground.style.display = "flex";
    });
});

let tasks = [];  // Hooson task array

function addTask() {  // Task add function
    const titleInputRef = document.getElementById("title");
    const descriptionInputRef = document.getElementById("description");
    const priorityRef = document.getElementById("priority");
    const statusRef = document.getElementById("status");
    const newTask = {
        title: titleInputRef.value,
        description: descriptionInputRef.value,
        priority: priorityRef.value,
        status: statusRef.value
    };


    if (newTask.title !== "" && newTask.description !== "" && newTask.description !== "" && newTask.status !== "") {
        tasks.push(newTask);
        titleInputRef.value = ""; // value hoosloh
        descriptionInputRef.value = "";
        priorityRef.value = "";
        statusRef.value = "";
        render();
    }


};

document.getElementById("addTaskButton").addEventListener("click", addTask);

function render() {

    const addTaskBackground = document.querySelector(".addTaskBackground");
    addTaskBackground.style.display = "none";

    document.querySelectorAll(".tasks").forEach(tasksList => {
        tasksList.innerHTML = "";
    });

    tasks.forEach(task => {
        const tasksList = getTasksList(task.status);

        if (tasksList) {
            const taskElement = document.createElement("li");
            taskElement.innerHTML = `<strong>${task.title}</strong><br>${task.description}<br><span style="border: 1px solid grey;">${task.priority}</span>`;
            tasksList.appendChild(taskElement);



        }
    });
}

function getTasksList(status) {
    if (status === "to-do") {
        return document.getElementById("to-do").querySelector(".tasks");
    } else if (status === "in-progress") {
        return document.getElementById("in-progress").querySelector(".tasks");
    } else if (status === "stuck") {
        return document.getElementById("stuck").querySelector(".tasks");
    } else if (status === "done") {
        return document.getElementById("done").querySelector(".tasks");
    } else {
        return null;
    }
};

