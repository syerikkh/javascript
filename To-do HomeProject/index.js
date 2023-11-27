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
    var id = "id" + Math.random().toString(16).slice(2)

    const newTask = {
        title: titleInputRef.value,
        description: descriptionInputRef.value,
        priority: priorityRef.value,
        status: statusRef.value,
        id: id
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

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

document.querySelector(".addTaskCard").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
})




function render() {

    const addTaskBackground = document.querySelector(".addTaskBackground");
    addTaskBackground.style.display = "none";

    document.querySelectorAll(".tasks").forEach(tasksList => {
        tasksList.innerHTML = "";

    });


    tasks.forEach(task => {

        const tasksList = getTasksList(task.status);
        if (tasksList) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.draggable = "true";

            const doneButton = document.createElement("button");
            const removeButton = document.createElement("button");
            removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            removeButton.classList.add("removeButton");
            removeButton.id = task.id;

            removeButton.onclick = function () {
                tasks = tasks.filter(task => task.id !== removeButton.id);
                render()
            };
            doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
            doneButton.classList.add("doneButton");
            doneButton.onclick = function () {
                document.getElementById("done").querySelector(".tasks").appendChild(tasksList);
            }
            const taskElement = document.createElement("li");

            taskElement.classList.add("taskElement");
            taskElement.innerHTML = `<h3 class="title">${task.title}</h3> ${task.description} <p class= "statusStyle">${task.priority}</p>`;
            card.appendChild(doneButton);
            card.appendChild(taskElement);
            card.appendChild(removeButton);
            tasksList.appendChild(card);
        }
        function dragStart(ev) {
            ev.dataTransfer.setData("text/plain", ev.target.id);
            console.log("dragstart");
        };
        function dragOver(ev) {
            ev.preventDefault();

        };
        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text/plain");
            ev.target.appendChild(document.getElementById(data));

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

