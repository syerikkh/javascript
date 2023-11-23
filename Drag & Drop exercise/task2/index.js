const dragContainer = document.getElementsByClassName("dragMeContainer")[0];
dragContainer.classList.add("container");
const dragMe = document.getElementById("drag-me");
dragMe.classList.add("dragMe");
const drop = document.getElementById("drop-here");
drop.classList.add("dropHere");

dragMe.addEventListener("dragstart", (event) => {
    console.log("dragstart");
});
drop.addEventListener("dragover", (event) => {
    console.log("dragover");
    event.preventDefault();
});
drop.addEventListener("drop", (event) => {
    event.preventDefault();

    console.log("drop");
})