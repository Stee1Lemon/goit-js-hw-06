const validationInput = document.getElementById("validation-input");
const validationLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", validNumberOfSymbols);

function validNumberOfSymbols() {
  if (validationInput.value.trim().length === validationLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
