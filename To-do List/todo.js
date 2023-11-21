const taskInput = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

function addTask() {

    if (taskInput.value !== '') {
        const listAdd = document.createElement("li");
        listAdd.innerText = taskInput.value;
        taskList.appendChild(listAdd);
        taskInput.value = '';
    }

}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function removeList() {
    const lastList = taskList.lastElementChild;
    if (lastList) {
        taskList.removeChild(lastList);
    }
}

const removeBtn = document.getElementById("deleteBtn");
removeBtn.addEventListener("click", removeList);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
    if (event.key === "Shift") {
        removeList();
    }
});
