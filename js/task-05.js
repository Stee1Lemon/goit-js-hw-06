const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

inputNameEl.addEventListener("input", (event) => {
  outputNameEl.innerHTML = event.currentTarget.value;
});

inputNameEl.addEventListener("input", isEmpty);

function isEmpty() {
  if (outputNameEl.textContent === "") {
      outputNameEl.innerHTML = "Anonymous";
  } 
}

