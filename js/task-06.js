const input = document.querySelector("#validation-input");
const style = document.querySelector("style");
input.addEventListener("blur", () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
});
