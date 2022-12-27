const counterValue = document.querySelector("#value");
const plusButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]');
let counter = 0;
minusButton.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});
plusButton.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});
