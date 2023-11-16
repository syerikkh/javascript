function changeMessage() {
    const title = document.getElementById("title");
    const paragraph = document.getElementById("paragraph");
    title.innerText = "Hi students";
    paragraph.innerText = "Pinecone became Unicorn";
    paragraph.style.backgroundColor = "yellow";

}
const changeButton = document.getElementById("changeBtn");
changeButton.addEventListener("click", changeMessage)