const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear-button');
const colorPicker = document.querySelector('#color-picker');
const smallButton = document.querySelector('#small-button');
const mediumButton = document.querySelector('#medium-button');
const largeButton = document.querySelector('#large-button');
const saveButton = document.querySelector('#save-button');


let selectedColor = 'black';
let painting = false;

function createGrid(size) {
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	container.innerHTML = '';

	for (let i = 0; i < size * size; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);

		box.addEventListener('mouseover', (e) => {
			if (painting) {
				box.style.backgroundColor = selectedColor;
			}
		});

		box.addEventListener('mousedown', (e) => {
			painting = true;
			box.style.backgroundColor = selectedColor;
		});

		box.addEventListener('mouseup', (e) => {
			painting = false;
		});
	}
}

createGrid(8);

clearButton.addEventListener('click', () => {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.style.backgroundColor = 'white';
	});
});

colorPicker.addEventListener('change', (e) => {
	selectedColor = e.target.value;
});

document.addEventListener('mouseup', (e) => {
	painting = false;
});

smallButton.addEventListener('click', () => {
	createGrid(8);
});

mediumButton.addEventListener('click', () => {
	createGrid(16);
});

largeButton.addEventListener('click', () => {
	createGrid(32);
});

saveButton.addEventListener('click', () => {
	html2canvas(container, {
		useCORS: true,
		allowTaint: true,
	}).then(function(canvas) {
		const link = document.createElement('a');
		link.download = 'project - etch a sketch.png';
		link.href = canvas.toDataURL();
		link.click();
	});
});

const etchDiv = document.getElementById("etch");
const closeDiv = document.getElementById("close-button");
const entireDiv = document.getElementById("window-position");
const minimizeDiv = document.getElementById("minimize-button");

etchDiv.addEventListener("click", () => {
	if (entireDiv.style.display === "none") {
		entireDiv.style.display = "flex";
	} else {

	}
});

minimizeDiv.addEventListener("click", () => {
	if (entireDiv.style.display === "none") {
		entireDiv.style.display = "block";
	} else {
		entireDiv.style.display = "none";
	}
});

closeDiv.addEventListener("click", () => {
	if (entireDiv.style.display === "none") {
		entireDiv.style.display = "block";
	} else {
		entireDiv.style.display = "none";
	}
});
