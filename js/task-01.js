const categories = document.getElementById("categories");
const categoryItems = categories.children;

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
