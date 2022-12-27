const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", changeBackGroundColor);

function changeBackGroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = `${randomColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
