const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
}