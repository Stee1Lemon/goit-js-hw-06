const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

inputNameEl.addEventListener("input", (event) => {
  outputNameEl.textContent = event.currentTarget.value.trim();
});

inputNameEl.addEventListener("input", isEmpty);

function isEmpty() {
  if (outputNameEl.textContent === "") {
    outputNameEl.textContent = "Anonymous";
    inputNameEl.value = "";
  } 
}

