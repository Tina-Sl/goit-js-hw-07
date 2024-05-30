// 1. Даємо класи для всіх елементів ul, li, h2
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

// 2. Виконання завдання: підрахунки і виведення на консоль
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelector(".list").children.length}`);
});
