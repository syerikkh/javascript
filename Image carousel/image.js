const slide = document.querySelector('.slide');
let currentIndex = 0;

function rightSlide() {
    currentIndex++;
    if (currentIndex >= slide.children.length) {
        currentIndex = 0;
    }

    slide.style.transform = `translateX(${-currentIndex * 30}%)`;
}
function leftSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slide.children.length - 1;
    }

    slide.style.transform = `translateX(${-currentIndex * 30}%)`;
}


document.getElementById("rightbtn").addEventListener("click", rightSlide);
document.getElementById("leftbtn").addEventListener("click", leftSlide);
