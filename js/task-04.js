const counterValue = document.querySelector("#value");
const plusButton = document.querySelector('button[data-action="increment"]');
const minusButton = document.querySelector('button[data-action="decrement"]');
minusButton.addEventListener("click", () => {
  counterValue.textContent -= 1;
});
plusButton.addEventListener("click", () => {
  counterValue.textContent -= -1;
});
//  -= -1 було зроблено, бо якщо просто += , тоді воно до 0 дописує з права число типу -> 011111
// Я би дуже попросив пояснити , цому це так працює
