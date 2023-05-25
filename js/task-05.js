const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

inputNameEl.addEventListener("input", () => {
  outputNameEl.innerHTML = event.currentTarget.value;
});

inputNameEl.addEventListener("input", isEmpty);
console.log(inputNameEl.value);

function isEmpty() {
  if (outputNameEl.textContent === "") {
      console.log("empty");
      outputNameEl.innerHTML = "Anonymous";
  } 
}

