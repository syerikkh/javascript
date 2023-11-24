const addButton = document.querySelectorAll(".addButton");

addButton.forEach(function (addButton) {
    addButton.addEventListener("click", function () {
        const addTask = document.querySelector(".taskBackground");
        addTask.style.display = "flex"
    });

});

function addToBoard() {
    const titleInput = document.getElementById("titleInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const status = document.getElementById("status");
    const priority = document.getElementById("priority");
    const addTask = document.querySelector(".taskBackground");
    const board = document.querySelector(".board");
    if (titleInput.value !== "" && descriptionInput.value !== "" && status.value !== null && priority.value !== null) {
        addTask.style.display = "none";
        const addedTask = document.querySelector(".addedTask");
        addedTask.style.padding = "5px";
        addedTask.style.borderRadius = "5px";
        const checkButton = document.getElementById("checkButton");
        const listsRef = document.querySelector(".listsRef");
        const titleItem = document.createElement("li");
        titleItem.classList.add("li");
        titleItem.textContent = titleInput.value;
        checkButton.style.display = "block";
        listsRef.appendChild(titleItem);
        const descriptionItem = document.createElement("li");
        descriptionItem.classList.add("li");
        descriptionItem.textContent = descriptionInput.value;
        listsRef.appendChild(descriptionItem);
        const priorityItem = document.createElement("div");
        priorityItem.textContent = priorityItem.options;
        listsRef.appendChild(priorityItem);

    }
    titleInput.value = "";
    descriptionInput.value = "";

}
const addTaskBtn = document.querySelector(".addTaskButton");
addTaskBtn.addEventListener("click", addToBoard);