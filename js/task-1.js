// 1. Зробимо зміни в HTML, поставимо все, що в body, в контейнер div (так краще буде виглядати)

const elemP = document.querySelector("p");
elemP.insertAdjacentHTML("beforebegin", '<div class="one-container"></div>');
const container = document.querySelector(".one-container");
const newElem = elemP.cloneNode(true);
container.prepend(newElem);
elemP.remove();

const elemUl = document.querySelector("#categories");
const categories = elemUl.cloneNode(true);
container.append(categories);
elemUl.remove();

// 2. Даємо класи для всіх елементів ul, li, h2
const lists = document.getElementsByTagName("ul");
for (let i = 0; i < lists.length; i++) {
  if (lists[i].id !== "categories") {
    lists[i].classList.add("list");
    const children = lists[i].children;
    for (const child of children) {
      child.classList.add("list-item");
    }
  }
}

const titles = document.getElementsByTagName("h2");
for (const title of titles) {
  title.classList.add("category");
}

// 3. Виконання завдання: підрахунки і виведення на консоль
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelector(".list").children.length}`);
});
