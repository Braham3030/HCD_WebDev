

let currentAudio = null;
let rangeInput = document.querySelector('input[name="progress"]');





// ONDERSTAANDE CODE MAG JE GEBRUIKEN
// NIETS AANPASSEN

const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
	// the name of the custom property is the name of the input
	const rangeName = range.name;
	// the value of the custom property is the value of the input
	const rangeValue = range.value;
	// a custom property is set on the HTML element
	document.documentElement.style.setProperty("--"+rangeName, rangeValue);
}

ranges.forEach(range => {
	// the custom property is set initially after loading the document
	updateRange(range);
	
	// the custom property is updated when the input is changed
	range.oninput = () => {
		updateRange(range);


		// If the current audio is playing the range of the input will be updated. The time will also be updated accordingly
		if (currentAudio && range === rangeInput) {
			const percentage = range.value / 100;
			currentAudio.currentTime = percentage * currentAudio.duration;
		}
	};
});

