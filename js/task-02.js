const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const potatoEl = document.createElement( "li" );
potatoEl.textContent = ingredients[0];
potatoEl.classList.add('ingridients__item');

console.log(potatoEl);

const mushroomEl = document.createElement( "li" );
mushroomEl.textContent = ingredients[1];
mushroomEl.classList.add('ingridients__item');

console.log(mushroomEl);

const garlicEl = document.createElement( "li" );
garlicEl.textContent = ingredients[2];
garlicEl.classList.add('ingridients__item');

console.log(garlicEl);


const tomatoEl = document.createElement( "li" );
tomatoEl.textContent = ingredients[3];
tomatoEl.classList.add('ingridients__item');

console.log(tomatoEl);


const herbEl = document.createElement( "li" );
herbEl.textContent = ingredients[4];
herbEl.classList.add('ingridients__item');

console.log(herbEl);


const condimentEl = document.createElement( "li" );
condimentEl.textContent = ingredients[5];
condimentEl.classList.add('ingridients__item');

console.log(condimentEl);


ingredientsEl.append(potatoEl, mushroomEl, garlicEl,  tomatoEl, herbEl, condimentEl )

