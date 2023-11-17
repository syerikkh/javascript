
function colorfulCircles() {

    const inputNum = document.getElementById("inputNumber").value;

    const container = document.createElement("div");
    container.classList.add("container");

    // function colorful() {
    //     return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    // }

    for (let i = 0; i < inputNum; i++) {
        const circles = document.createElement("div");
        circles.classList.add("circles");

        container.appendChild(circles);
    }

    document.body.appendChild(container);

}
const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", colorfulCircles);