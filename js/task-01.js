const allCategoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", allCategoriesEl.length);

allCategoriesEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
