

console.log("Hello World!");

// Prevent screen reader from reading the whole page when loaded on the page

document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".messageInput input");

    if (chatInput) {
        chatInput.focus();
    }
})

// const apiKey = config.elevenLabsApiKey;
const voiceId = config.elevenLabsVoiceId;

// Speech message

document.addEventListener("DOMContentLoaded", async () => {

    const audioPlayer = document.querySelectorAll("audio[data-text]");

    for (const audioTag of audioPlayer) {
        const text = audioTag.getAttribute("data-text");

         try {
                const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
                    method: "POST",
                    headers: {
                        "xi-api-key": apiKey,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        text: text,
                        model_id: "eleven_multilingual_v2",
                    })
                });
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
                }

                const blob = await response.blob();
                const audioUrl = URL.createObjectURL(blob);
                // const audio = new Audio(audioUrl);

                audioTag.src = audioUrl;

                console.log("Audio loaded successfully for text:", text);

                // audio.onplay = () => {
                //     button.textContent = "Afspelen...";
                //     button.setAttribute("aria-label", "Audio afspelen");
                //     button.disabled = false;
                // };

                // audio.play();
            } catch (error) {
                console.error("Error fetching audio:", error);
                // button.textContent = "Fout bij laden";
                // button.setAttribute("aria-label", "Fout bij laden van audio");
                // button.disabled = false;

                // setTimeout(() => {
                //     button.textContent = originalText;
                //     button.disabled = false;
                // }, 3000)
            }

    }
})

// Fake AI summary

const smartSummary = document.querySelector(".smartSummary");
const announcerSummary = document.getElementById("announcerSummary");

if (smartSummary && announcerSummary) {
    smartSummary.addEventListener("change", (event) => {
        if (event.target.checked) {
            announcerSummary.textContent = "Samenvatting van het spraakbericht van Henk: Henk heeft kleren gekocht en is blij met zijn aankoop.";
        } else {
            announcerSummary.textContent = "Samenvatten is uitgeschakeld";
        }

        setTimeout(() => {
            announcerSummary.textContent = "";
        }, 3000)
    })
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
    }, 1000)
})


// Summary button announcer

const summarizeCheckbox = document.getElementById("summarizeCheckbox");
const announcer = document.getElementById("announcer");

if (summarizeCheckbox && announcer) {
    summarizeCheckbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            announcer.textContent = "Samenvatten is ingeschakeld. De knop om spraakberichten samen te vatten staat nu in de chat naast elke spraakbericht. Deze knop heet 'Vat samen'. Wanneer je op deze knop klikt, zal er een korte samenvatting worden gegeven.";
        } else {
            announcer.textContent = "Samenvatten is uitgeschakeld";
        }
        setTimeout(() => {
            announcer.textContent = "";
        }, 3000)
    })
}









// Source for audio customization:
// https://mimo.org/glossary/html/audio-tag

// document.getElementById("audioSpeech").onplay = function() {
//     alert("Audio is gestart!")
// }