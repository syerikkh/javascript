const dragContainer = document.getElementsByClassName("dragMeContainer")[0];
dragContainer.classList.add("container");
const dragMe = document.getElementById("drag-me");
dragMe.classList.add("dragMe");
const drop = document.getElementById("drop-here");
drop.classList.add("dropHere");



dragMe.addEventListener("dragstart", function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
});
drop.addEventListener("dragover", function dragover(event) {
    event.preventDefault();
});
drop.addEventListener("drop", function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
});

