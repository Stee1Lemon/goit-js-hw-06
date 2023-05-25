const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {
  let ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
  
});

ingredientsEL.append(...ingredientsList);
