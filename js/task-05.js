const inputText = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
if ((inputText.value = "")) {
  nameOutput.currentTarget.textContent = "Anonymous!";
} else {
  inputText.addEventListener(
    "input",
    (event) => (nameOutput.textContent = event.currentTarget.value)
  );
}
