// Prevent screen reader from reading the whole page when loaded on the page

document.addEventListener("DOMContentLoaded", () => {
	const chatInput = document.querySelector(".messageInput input");

	if (chatInput) {
		chatInput.focus();
	}
});

// Usage of .env file to ensure security

// const apiKey = config.elevenLabsApiKey;
const voiceId = config.elevenLabsVoiceId;

// Speech message

// Used ElevenLabs API documentation for the functionality.
// https://elevenlabs.io/docs/api-reference/introduction?utm_source=google&utm_medium=cpc&utm_campaign=t1_brandsearch_enterprise_english&utm_id=22970123016&utm_term=elevenlabs%20conversational%20ai&utm_content=brand_-_elevenlabs_conversational_ai&gad_source=1&gad_campaignid=22970123016&gbraid=0AAAAA_PU6Fb4NqtPdNgQlolvIEw4fmVU5&gclid=CjwKCAjwwdbPBhBgEiwAxBRA4Z9Tz5ZaA_SxpdMTqp9tXnt8bPuKahJWm38tSq-TIW9tSpa8Ij4UkxoCQtMQAvD_BwE

document.addEventListener("DOMContentLoaded", async () => {
	const audioPlayer = document.querySelectorAll("audio[data-text]");

	for (const audioTag of audioPlayer) {
		const text = audioTag.getAttribute("data-text");

		try {
			const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
				method: "POST",
				headers: {
					"xi-api-key": apiKey,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					text: text,
					model_id: "eleven_multilingual_v2",
				}),
			});
			if (!response.ok) {
				throw new Error(`API error: ${response.statusText}`);
			}

			const blob = await response.blob();
			const audioUrl = URL.createObjectURL(blob);

			audioTag.src = audioUrl;

			console.log("Audio loaded successfully for text:", text);
		} catch (error) {
			console.error("Error fetching audio:", error);
		}
	}
});

// Fake AI summary

const smartSummary = document.querySelector(".smartSummary");
const announcerSummary = document.getElementById("announcerSummary");

if (smartSummary && announcerSummary) {
	smartSummary.addEventListener("click", () => {
		// When clicked on the smartSummary, the announcerSummary will get the following textContent. And this will be used by the screen reader
		announcerSummary.textContent = "Samenvatting van het spraakbericht van Henk: Henk heeft kleren gekocht en is blij met zijn aankoop.";
	});
}

// submit button prevent default behavior

const form = document.querySelector(".messageInput");
const sendButton = form.querySelector(".sendButton");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const originalText = sendButton.innerText;

	sendButton.innerText = "Sturen...";
	sendButton.setAttribute("aria-busy", "true");

	setTimeout(() => {
		sendButton.innerText = originalText;
		sendButton.setAttribute("aria-busy", "false");
	}, 1000);
});

// Summary button announcer

const summarizeCheckbox = document.getElementById("summarizeCheckbox");
const announcer = document.getElementById("announcer");

if (summarizeCheckbox && announcer) {
	summarizeCheckbox.addEventListener("change", (event) => {
		// When checkbox has been checked, the announcer will get checked and gets the following textContent.
		if (event.target.checked) {
			announcer.textContent =
				"Samenvatten is ingeschakeld. De knop om spraakberichten samen te vatten staat nu in de chat naast elke spraakbericht. Deze knop heet 'Vat samen'. Wanneer je op deze knop klikt, zal er een korte samenvatting worden gegeven.";
		} else {
			// When the checkbox has been unchecked, the announceer gets the following textContent.
			announcer.textContent = "Samenvatten is uitgeschakeld";
		}
		// Timeout to prevent overlapping
		setTimeout(() => {
			announcer.textContent = "";
		}, 3000);
	});
}

// Focus on the details text when the details element is opened

const detailsElement = document.querySelector(".descriptionContainer");
const content = detailsElement.querySelector(".descriptionText");
const container = document.querySelector(".messageContainer");

detailsElement.addEventListener("toggle", () => {
	if (detailsElement.open) {
		content.focus({
			// Focus without browser scrolling to the element
			preventScroll: true,
		});
		// Delay added in order to prevent animation conflicts
		setTimeout(() => {
			// Calculate the position of the element relative to the top of the container
			const positionTop = content.offsetTop;

			// Scroll to the element
			container.scrollTo({
				// -100px to prevent the element from being hidden behind the fixed elements
				top: positionTop - 100,
				behavior: "smooth",
			});
		}, 500);
	}
});
