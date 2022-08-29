const refs = {
	input: document.querySelector('#name-input'),
	label: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', onInputChange );


function onInputChange(event) {
	if (event.currentTarget.value.length === 0) {
		return refs.label.textContent = 'Anonymous'
	}
	
	refs.label.textContent = event.currentTarget.value;
} 