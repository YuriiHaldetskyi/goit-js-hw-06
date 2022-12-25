const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", changeBackGroundColor);

function changeBackGroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
