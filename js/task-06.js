const input = document.querySelector('#validation-input');

input.classList.add('invalid')
const onInputBlur = event => {
	if(event.currentTarget.value.length === Number(input.dataset.length)) {
	return	input.classList.replace('invalid','valid');
	}
return input.classList.replace('valid', 'invalid');

};

input.addEventListener('blur', onInputBlur);