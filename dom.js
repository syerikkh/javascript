
const addbtn = document.getElementById("nemeh");
let i = 0;
function addBox() {
    i++
    const container = document.createElement("div");

    const box = document.createElement("div");

    box.classList.add("box");
    box.innerText = i;
    document.body.appendChild(container);
    document.container.appendChild(box);
}

addbtn.addEventListener("click", addBox);




