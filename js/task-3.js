// 1. Створимо контейнери div в HTML для можливості стилізації по макету
const elemInput = document.querySelector("#name-input");
elemInput.insertAdjacentHTML(
  "beforebegin",
  '<div class="three-container"></div>'
);
const newElemInput = elemInput.cloneNode(true);
const container = document.querySelector(".three-container");
container.prepend(newElemInput);
elemInput.remove();
const elemTitle = document.querySelector("h1");
elemTitle.classList.add("three-greetings");
const newElemTitle = elemTitle.cloneNode(true);
container.append(newElemTitle);
elemTitle.remove();

// 2. Рішення задачі
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handlerInput = (event) => {
  const str = event.target.value.trim();
  nameOutput.textContent = str ? str : "Anonymous";
};

nameInput.addEventListener("input", handlerInput);
