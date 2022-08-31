const categoriesEl = document.querySelector('#categories');

console.dir(categoriesEl);
console.log(`Number of categories: ${categoriesEl.children.length}`);

const items = document.querySelectorAll('.item');

const liEl = document.querySelector('.item > ul');
console.log(liEl)

const liElLength = liEl.children.length;

const titleAndULlength =items.forEach(item => {
	console.log(`Category: ${item.textContent}`)
	console.log(`Elements: ${liElLength}`)
});
