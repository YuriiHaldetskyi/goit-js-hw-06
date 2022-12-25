const listCategories = document.querySelectorAll(".item");
const nameOfCategory = document.querySelectorAll("h2");
console.log("Number of categories:", listCategories.length);
listCategories.forEach((element) => {
  console.log(element.firstElementChild.textContent);
  console.log(element.lastElementChild.children.length);
});
