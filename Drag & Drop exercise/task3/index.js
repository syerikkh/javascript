const container = document.getElementsByClassName("container")[0];
container.classList.add("container");
const dragMe = document.getElementById("drag-me");
dragMe.classList.add("dragMe");
const target = document.getElementById("target");
target.classList.add("dropHere");

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
};

function dragOver(ev) {
    ev.preventDefault();
    resetColor(ev);

};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
    resetColor(ev);
};

function changeBorderColor(ev) {
    target.style.border = "2px dotted red";
    ev.preventDefault();
};
function resetColor(ev) {
    target.style.border = "";
}
