const fontSizeControl = document.querySelector("#font-size-control");
const changedText = document.querySelector("#text");

fontSizeControl.addEventListener("input", chengeFontSize);

function chengeFontSize(event) {
  changedText.style.fontSize = event.currentTarget.value + "px";
}
