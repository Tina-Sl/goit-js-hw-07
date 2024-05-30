function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Переносимо теги в контейнер, оголушуємо елементи (даємо їм класи для стилізації)
let elem = document.querySelector("#controls");
elem.insertAdjacentHTML("beforebegin", '<div class="six-container"></div>');
let newElem = elem.cloneNode(true);
const container = document.querySelector(".six-container");
container.prepend(newElem);
elem.remove();
elem = document.querySelector("#boxes");
newElem = elem.cloneNode(true);
container.append(newElem);
elem.remove();

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const div = document.querySelector("#boxes");

createBtn.classList.add("six-btn-create");
destroyBtn.classList.add("six-btn-destroy");
document.querySelector("input").classList.add("six-input");

const elemInput = document.querySelector(".six-input");

// 2. Створюємо допоміжні функції

function createBoxes(amount) {
  const isValue = amount >= 1 && amount <= 100;
  if (!(isValue || lastValue)) {
    return;
  }
  if (isValue) {
    lastValue = amount;
  }
  const squares = [];
  let elem;
  for (let i = 30; i < lastValue * 10 + 30; i += 10) {
    elem = {
      side: i,
      color: getRandomHexColor(),
    };
    squares.push(elem);
  }

  const str = squares
    .map(
      (square) =>
        `<div style="width: ${square.side}px; height: ${square.side}px; background-color: ${square.color}; flex-shrink: 0; "></div> `
    )
    .join("");
 
  div.innerHTML = str;
  elemInput.value = "";
}

function destroyBoxes() {
  div.innerHTML = "";
  elemInput.value = "";
  lastValue = 0;
}

// 3. Виконання програми
let isChangePadding = false;
let lastValue = 0;
createBtn.addEventListener("click", () => {
  createBoxes(elemInput.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
