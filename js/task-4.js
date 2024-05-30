// 1. Даємо класи елементів в HTML для можливості стилізації по макету

const labels = document.querySelectorAll("label");
labels.forEach((label) => label.classList.add("four-label"));

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => input.classList.add("four-input"));

const button = document.querySelector("button");
button.classList.add("four-btn");
button.textContent = "Log in";

// 2. Рішення задачі
const regForm = document.querySelector(".login-form");

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const user = {
    email: email,
    password: password,
  };
  console.log(user);
  form.reset();
}
