const form = document.querySelector('.login-form');


const onFormsubmit = event => {
	event.preventDefault();
	
const formElements = event.currentTarget.elements;

const email = formElements.email.value;
const password = formElements.password.value;

const formData = {
	email,
	password,
};


if (email === '' || password === '') {
	return alert('All fields must be filled in.')
};

console.log(formData);

event.currentTarget.reset();
};


form.addEventListener('submit', onFormsubmit);
