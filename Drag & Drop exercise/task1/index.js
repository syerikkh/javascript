const dragMe = document.getElementById("drag-me");
dragMe.style.width = "100px";
dragMe.style.height = "70px";
dragMe.style.backgroundColor = "green";

const target = document.getElementById("target");
target.style.width = "200px";
target.style.height = "90px";
target.style.border = "solid 1px blue";

dragMe.addEventListener("dragstart", (event) => {
    console.log("dragstart")
});
target.addEventListener("dragover", (event) => {
    console.log("dragover")
    event.preventDefault();
});
target.addEventListener("drop", (event) => {
    alert("Dropped")
});