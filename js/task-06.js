const input = document.querySelector("#validation-input");
const style = document.querySelector("style");
input.addEventListener("blur", () => {
  if (input.value.length < input.getAttribute("data-length")) {
    input.setAttribute("class", "invalid");
  } else {
    input.setAttribute("class", "valid");
  }
});
