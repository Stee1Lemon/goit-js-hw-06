function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector(`[data-create]`);
const btnDestroyEl = document.querySelector(`[data-destroy]`);
const amountEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", isInRangeNumber);
btnDestroyEl.addEventListener("click", destroyBoxes);

let boxesArray = [];
const minNumber = Number(amountEl.min);
const maxNumber = Number(amountEl.max);
const stepToNumber = Number(amountEl.step);

function isInRangeNumber(amount) {
  let amountNum = Number(amountEl.value);

  if (amountNum < minNumber || amountNum > maxNumber) {
    return (boxesEl.innerHTML =
      "<p>Be more realistic and try from 1 to 100.</p>");
  } else {
    boxesEl.innerHTML = "";
    createBoxes(amountNum);
  }
}

function createBoxes(amount) {
  let widthEl = 30;

  for (let i = 0; i < amount; i += stepToNumber) {
    const randomColor = getRandomHexColor();
    const box = `<div style="background-color: ${randomColor}; height: ${widthEl}px; width: ${widthEl}px; margin-bottom: 5px"></div>`;
    
    widthEl += 10;
    boxesArray.push(box);
  }

  const boxesStr = boxesArray.join("");
  boxesEl.innerHTML = boxesStr;
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  boxesArray = [];
  amountEl.value = "";
}
