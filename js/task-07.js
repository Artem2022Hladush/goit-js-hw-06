const range = document.querySelector("#font-size-control")
const span = document.querySelector("#text");


function fonSize () {
const value = range.value + 'px'
span.style.fontSize = value;
}

range.addEventListener('change', fonSize)