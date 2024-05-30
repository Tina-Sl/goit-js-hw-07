function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Даємо класи елементів в HTML для можливості стилізації по макету
const btn = document.querySelector("button");
btn.classList.add("five-btn");
const paragraphs = document.querySelectorAll("p");
const sample = document.querySelector(".color");
paragraphs.forEach((p) => {
  if (p.contains(sample)) {
    p.classList.add("five-p");
  }
});
const text = document.querySelector(".five-p");
const body = document.querySelector("body");
const oldText = sample.textContent;

const handleClick = (event) => {
  const selectedColor = getRandomHexColor();
  body.style.backgroundColor = selectedColor;
  sample.textContent = oldText + selectedColor;
};

btn.addEventListener("click", handleClick);
