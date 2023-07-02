function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");
const bodyColor = document.querySelector("body");


btnChangeColorEl.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  colorNameEl.textContent = randomColor;
  bodyColor.style.backgroundColor = randomColor;
}
