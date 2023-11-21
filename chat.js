function divideDiv(div) {
    // Create left and right half divs
    const leftHalf = document.createElement("div");
    const rightHalf = document.createElement("div");

    // Assign classes for styling
    leftHalf.classList.add("half-div", "left-half");
    rightHalf.classList.add("half-div", "right-half");

    // Append half divs to the clicked div
    div.appendChild(leftHalf);
    div.appendChild(rightHalf);

    // Remove the click event listener to avoid further division
    div.removeEventListener("click", divideDiv);
}
