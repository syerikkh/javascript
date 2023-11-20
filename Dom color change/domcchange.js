const box = document.createElement("div");

box.style.width = "150px";
box.style.height = "150px";
box.style.backgroundColor = "red";

document.body.appendChild(box);

function boxColorChange() {
    if (box.style.backgroundColor === "green") {
        box.style.backgroundColor = "red"
        box.style.transition = "ease 0.3s";
    } else {
        box.style.backgroundColor = "green"
        box.style.transition = "ease 0.3s";
    }
}
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", boxColorChange);
