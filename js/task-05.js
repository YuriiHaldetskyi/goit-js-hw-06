const inputText = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  if (inputText.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
