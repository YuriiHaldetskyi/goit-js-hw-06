const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients.map((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  list.append(item);
});
