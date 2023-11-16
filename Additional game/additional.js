function refresh() {
    const random1Input = document.getElementById("randomnumber1");
    const random2Input = document.getElementById("randomnumber2");
    random1Input.value = Math.floor(Math.random() * 100) + 1;
    random2Input.value = Math.floor(Math.random() * 100) + 1;
}


function isEqual() {
    const random1Input = document.getElementById("randomnumber1");
    const random2Input = document.getElementById("randomnumber2");
    const inputNum = document.getElementById("sum");
    let sumOfRandomNumbers = Number(random1Input.value) + Number(random2Input.value);

    if (sumOfRandomNumbers === Number(inputNum.value)) {
        alert("True")
    }

    else { alert("False") };
}

const checkButton = document.getElementById("check");
checkButton.addEventListener("click", isEqual);

const refreshButton = document.getElementById("update");
refreshButton.addEventListener("click", refresh);