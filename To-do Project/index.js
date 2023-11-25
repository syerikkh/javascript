const addButtons = document.querySelectorAll(".addButton");

addButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const taskBackground = document.querySelector(".taskBackground");
        taskBackground.style.display = "flex";
    });
});

function addToBoard() {
    const titleInput = document.getElementById("titleInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const statusInput = document.getElementById("status");
    const priorityInput = document.getElementById("priority");
    const taskBackground = document.querySelector(".taskBackground");


    if (
        titleInput.value !== "" &&
        descriptionInput.value !== "" &&
        statusInput.value !== null &&
        priorityInput.value !== null
    ) {
        taskBackground.style.display = "none";
        const addedTask = document.querySelector(".addedTask");
        addedTask.style.padding = "5px";
        addedTask.style.borderRadius = "5px";
        const checkButton = document.getElementById("checkButton");
        checkButton.style.display = "block";
        const listsRef = document.querySelector(".listsRef");
        listsRef.classList.add("listsRef");


        // Title
        const titleItem = document.createElement("li");
        titleItem.classList.add("li");
        titleItem.style.fontWeight = "800";
        titleItem.textContent = titleInput.value;
        listsRef.appendChild(titleItem);

        // Description
        const descriptionItem = document.createElement("li");
        descriptionItem.classList.add("li");
        descriptionItem.textContent = descriptionInput.value;
        listsRef.appendChild(descriptionItem);

        // Priority
        const priorityItem = document.createElement("div");
        priorityItem.textContent = priority.value;
        priorityItem.style.border = "1px solid grey";
        priorityItem.style.borderRadius = "8px";
        priorityItem.style.padding = "3px";
        priorityItem.style.textAlign = "center";
        listsRef.appendChild(priorityItem);
    }

    // Clear input values
    titleInput.value = "";
    descriptionInput.value = "";
}

const addTaskBtn = document.querySelector(".addTaskButton");
addTaskBtn.addEventListener("click", addToBoard);

let tasks = [];