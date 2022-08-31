const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const liMarkup = ingredients.map(element => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = element;
  return li;
})


const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...liMarkup);

