const categoriesEl = document.getElementById("categories");

// console.log(`Number of categories: ${categoriesEl.children.length}`);

let categoriesItems = [];
let totalCategories = 0;

for (const child of categoriesEl.children) {
  categoriesItems.push(child);
}

categoriesItems.forEach((item) => {
  totalCategories += 1;
});

console.log(`Number of categories: ${totalCategories}`);

categoriesItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
