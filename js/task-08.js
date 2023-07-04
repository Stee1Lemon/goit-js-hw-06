const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", sendForm);

const { email, password } = loginForm;

function sendForm(event) {
  event.preventDefault();
  isBlankFields();
}

function isBlankFields() {
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    createFormObj();
  }
}

function createFormObj() {
  const usersFormData = {
    email: email.value,
    password: password.value,
  };
  loginForm.reset();

  console.log(usersFormData);
}
