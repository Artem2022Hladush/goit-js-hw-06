const categoriesEl = document.querySelector('#categories');

console.dir(categoriesEl);
console.log(`Number of categories: ${categoriesEl.children.length}`);

console.log(`Category: ${categoriesEl.children[0].firstElementChild.textContent}`);

console.log(`Elements: ${categoriesEl.children[0].childNodes[3].children.length}`);

console.log(`Category: ${categoriesEl.children[1].firstElementChild.textContent}`);
console.log(`Elements: ${categoriesEl.children[1].childNodes[3].children.length}`);

console.log(`Category: ${categoriesEl.children[2].firstElementChild.textContent}`);
console.log(`Elements: ${categoriesEl.children[2].childNodes[3].children.length}`);
