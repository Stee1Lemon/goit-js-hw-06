const validationInput = document.getElementById("validation-input");
const validationLength = parseInt(
  validationInput.getAttribute("data-length"));
console.log(validationLength);
validationInput.addEventListener("blur", validNumberOfSymbols);

function validNumberOfSymbols() {
  if (validationInput.value.length === validationLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
