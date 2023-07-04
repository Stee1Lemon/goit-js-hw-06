const sizeController = document.getElementById("font-size-control");
let text = document.getElementById("text");

changeSize();

sizeController.addEventListener("input", changeSize);

function changeSize() {
  text.style.fontSize = `${sizeController.value}px`;
}
