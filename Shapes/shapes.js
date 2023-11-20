const shape = document.createElement("div");
shape.style.width = "650px";
shape.style.height = "650px";
shape.style.backgroundColor = "red";


function makeCircle() {
    shape.style.width = "650px";
    shape.style.height = "650px";
    shape.style.borderRadius = "50%";
    shape.style.backgroundColor = "red";

}
function makeTriangle() {
    shape.style.borderRadius = "0"
    shape.style.width = "0px";
    shape.style.height = "0px";
    shape.style.borderLeft = "320px solid transparent";
    shape.style.borderRight = "320px solid transparent";
    shape.style.borderBottom = "600px solid red";
    shape.style.backgroundColor = "transparent";

    console.log("triangle");

}
shape.addEventListener("click", makeCircle);
shape.addEventListener("dblclick", makeTriangle);

document.body.appendChild(shape);