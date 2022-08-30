const input = document.querySelector('#validation-input');


const onInputBlur = event => {
	if(event.currentTarget.value.length === Number(input.dataset.length)) {
	return	input.classList.add('valid');
	}
return input.classList.replace('valid', 'invalid');

};

console.log(input.addEventListener('blur', onInputBlur));