const loginForm = document.querySelector(".login-form");
const emailFormEl = loginForm.elements["email"];
const passwordFormEl = loginForm.elements["password"];

loginForm.addEventListener("submit", sendForm);

let usersFormData = [];

function sendForm(event) {
  event.preventDefault();
  blankFields();
}

function blankFields() {
  if (emailFormEl.value === "" || passwordFormEl.value === "") {
    alert("All fields must be filled");
  } else {
    createFormObj();
  }
}

function createFormObj() {
  const userFormData = {
    email: emailFormEl.value,
    password: passwordFormEl.value,
  };
  usersFormData.push(userFormData);
  console.log(userFormData);
  loginForm.reset();
}
