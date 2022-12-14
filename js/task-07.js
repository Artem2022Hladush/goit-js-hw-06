// const range = document.querySelector("#font-size-control")
// const span = document.querySelector("#text");

// console.dir(span)
// function fonSize () {
// const value = range.value + 'px'
// span.style.fontSize = value;
// }

// range.addEventListener('input', fonSize)


const input = document.querySelector(`#font-size-control`);
const span = document.querySelector(`#text`);

const onDraggingSlider = event => {
	const evt = event.currentTarget;

	if (evt.value >= 40 && evt.value < 60) {
		return span.style.fontSize = `20px`

		} else if (evt.value >= 60 && evt.value < 96) {
			return span.style.fontSize = `25px`

		} else if (evt.value >= 96) {
			return span.style.fontSize = `30px`
		}

			return span.style.fontSize = `15px`
}

input.addEventListener(`input`, onDraggingSlider);