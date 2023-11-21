const mainDiv = document.getElementById("maindiv");
function divideDiv() {
    const oneHalf = document.createElement("div");
    const otherHalf = document.createElement("div");

    oneHalf.classList.add("half", "onehalf");
    otherHalf.classList.add("half", "otherhalf");


    mainDiv.appendChild(oneHalf);
    mainDiv.appendChild(otherHalf);


}

mainDiv.addEventListener("click", divideDiv);