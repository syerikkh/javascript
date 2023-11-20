const list = document.getElementById("fruits");
const searchInput = document.getElementById("search");

const fruitArray = [document.getElementById("cherry"),
document.getElementById("banana"),
document.getElementById("apple"),
document.getElementById("orange"),
document.getElementById("kiwi"),
document.getElementById("watermelon"),
document.getElementById("berry")];

searchInput.addEventListener("input", function () {
    const search = searchInput.value.trim().toLowerCase();

    fruitArray.forEach((el) => {
        const fruitName = el.textContent.trim().toLowerCase();
        const shouldDisplay = fruitName.includes(search);

        if (shouldDisplay) {
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    })

});

