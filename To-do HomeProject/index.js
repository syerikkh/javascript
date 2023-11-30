const addCardButtons = document.querySelectorAll(".addCardButton");
addCardButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const addTaskBackground = document.querySelector(".addTaskBackground");
        addTaskBackground.style.display = "flex";
        const addTaskCard = document.querySelector(".addTaskCard");
        addTaskCard.style.display = "flex";
    });
});

var tasks = [];  // Hooson task array

function addTask() {  // Task add function
    const titleInputRef = document.getElementById("title");
    const descriptionInputRef = document.getElementById("description");
    const priorityRef = document.getElementById("priority");
    const statusRef = document.getElementById("status");
    let id = "id" + Math.random().toString(16).slice(2)

    const newTask = {
        title: titleInputRef.value,
        description: descriptionInputRef.value,
        priority: priorityRef.value,
        status: statusRef.value,
        id: id
    };


    if (newTask.title !== "" && newTask.description !== "" && newTask.description !== "" && newTask.status !== "") {
        tasks.push(newTask);

        render();
    }
    titleInputRef.value = ""; // value hoosloh
    descriptionInputRef.value = "";
    priorityRef.value = "";
    statusRef.value = "";

};

const addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", addTask);

document.querySelector(".addTaskCard").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

const addTaskBackground = document.querySelector(".addTaskBackground");
addTaskBackground.addEventListener("click", function () {
    const addTaskBackground = document.querySelector(".addTaskBackground");
    addTaskBackground.style.display = "none";
    const addTaskCard = document.querySelector(".addTaskCard");
    addTaskCard.style.display = "none";
})




function render() {
    const addTaskBackground = document.querySelector(".addTaskBackground");
    addTaskBackground.style.display = "none";
    const addTaskCard = document.querySelector(".addTaskCard");
    addTaskCard.style.display = "none";

    document.querySelectorAll(".tasks").forEach(tasksList => {
        tasksList.innerHTML = "";

    });

    tasks.forEach(task => {
        const priorityClass = document.querySelector(".priorityclass");
        const priorityArray = Array.from(priorityClass);

        priorityArray.sort(function (a, b) { return b - a });

        const tasksList = getTasksList(task.status);
        const todoCount = document.getElementById("todo-count");
        const inprogressCount = document.getElementById("inprogress-count");
        const stuckCount = document.getElementById("stuck-count");
        const doneCount = document.getElementById("done-count");

        if (task.status === "to-do") {
            todoCount.textContent = "";
            todoCount.textContent = getTasksList("to-do").childElementCount + 1;
        } else if (task.status === "in-progress") {
            inprogressCount.textContent = "";
            inprogressCount.textContent = getTasksList("in-progress").childElementCount + 1;
        } else if (task.status === "stuck") {
            stuckCount.textContent = "";
            stuckCount.textContent = getTasksList("stuck").childElementCount + 1;
        } else if (task.status === "done") {
            doneCount.textContent = "";
            doneCount.textContent = getTasksList("done").childElementCount + 1;
        };

        if (tasksList) {

            const card = document.createElement("div");
            card.classList.add("card");
            card.draggable = true;
            card.addEventListener("dragstart", dragStart);
            document.getElementById("in-progress").addEventListener("dragover", dragOver);
            document.getElementById("in-progress").addEventListener("drop", drop);

            const doneButton = document.createElement("button");
            const removeButton = document.createElement("button");
            removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
            removeButton.classList.add("removeButton");
            removeButton.id = task.id;
            function doneButtonStyle(button) {
                button.style.backgroundColor = "black";
                button.style.color = "white";
            }

            removeButton.onclick = function () {
                tasks = tasks.filter(task => task.id !== removeButton.id);
                render();
                const todoCount = document.getElementById("todo-count");
                const inprogressCount = document.getElementById("inprogress-count");
                const stuckCount = document.getElementById("stuck-count");
                const doneCount = document.getElementById("done-count");

                if (task.status === "to-do") {
                    todoCount.textContent = "";
                    todoCount.textContent = getTasksList("to-do").childElementCount;
                } else if (task.status === "in-progress") {
                    inprogressCount.textContent = "";
                    inprogressCount.textContent = getTasksList("in-progress").childElementCount;
                } else if (task.status === "stuck") {
                    stuckCount.textContent = "";
                    stuckCount.textContent = getTasksList("stuck").childElementCount;
                } else if (task.status === "done") {
                    doneCount.textContent = "";
                    doneCount.textContent = getTasksList("done").childElementCount;
                };
            };
            doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
            doneButton.classList.add("doneButton");
            if (task.status === "done") {
                doneButton.style.backgroundColor = "black";
                doneButton.style.color = "white";
            }
            doneButton.onclick = function () {
                task.status = "done";
                render();
                const todoCount = document.getElementById("todo-count");
                const inprogressCount = document.getElementById("inprogress-count");
                const stuckCount = document.getElementById("stuck-count");
                const doneCount = document.getElementById("done-count");
                if (task.status === "done") {
                    todoCount.textContent = getTasksList("to-do").childElementCount;
                    inprogressCount.textContent = getTasksList("in-progress").childElementCount;
                    stuckCount.textContent = getTasksList("stuck").childElementCount;
                }
            };
            const editButton = document.createElement("button");
            editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            editButton.classList.add("editButton");
            editButton.addEventListener("click", function () {
                document.getElementById("title").value = task.title;
                document.getElementById("description").value = task.description;
                document.getElementById("status").value = task.status;
                document.getElementById("priority").value = task.priority;
                addTaskBackground.style.display = "flex";
                task.title = "";
                task.description = "";
                task.status = "";
                task.priority = "";

            });
            const taskElement = document.createElement("li");

            taskElement.classList.add("taskElement");
            taskElement.innerHTML = `<h3 class="title">${task.title}</h3> ${task.description} <p class= "statusStyle">${task.priority}</p>`;
            card.appendChild(doneButton);
            card.appendChild(taskElement);
            card.appendChild(removeButton);
            card.appendChild(editButton);
            tasksList.appendChild(card);
        };




        function dragStart(ev) {
            ev.dataTransfer.setData("text/plain", ev.target.id);
            console.log("dragstart");
        };
        function dragOver(ev) {
            ev.preventDefault();
            console.log("dragover");
        };
        function drop(ev) {

            ev.preventDefault();
            var data = ev.dataTransfer.getData("text/plain");
            console.log(ev.target);
            ev.target.appendChild(document.getElementById(data));

            console.log("drop");

        };

    });

};
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


