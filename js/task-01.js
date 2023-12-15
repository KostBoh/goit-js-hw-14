/**
 * Task 1-1
 */

const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

/**
 * Task 1-2
 */

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul > li");
  const itemCount = items.length;
  console.log(`Category: ${categoryName}
    Elements: ${itemCount}`);
});
