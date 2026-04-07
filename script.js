

console.log("Hello World!");

// Prevent screen reader from reading the whole page when loaded on the page

document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById(".messageInput input");

    if (chatInput) {
        chatInput.focus();
    }
})

const apiKey = config.elevenLabsApiKey;
const voiceId = config.elevenLabsVoiceId;

// Speech message

document.addEventListener("DOMContentLoaded", () => {

    const playButton = document.querySelectorAll(".playAudioButton");

    playButton.forEach(button => {
        button.addEventListener("click", async () => {
            const text = button.getAttribute("data-text");
            const originalText = button.textContent;

            // Loading state
            button.textContent = "Laden...";
            button.setAttribute("disabled", "true");
            // Prevents multiple clicks while loading
            button.disabled = true;

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
                const audio = new Audio(audioUrl);

                audio.onplay = () => {
                    button.textContent = "Afspelen...";
                    button.setAttribute("aria-label", "Audio afspelen");
                    button.disabled = false;
                };

                audio.play();
            } catch (error) {
                console.error("Error fetching audio:", error);
                button.textContent = "Fout bij laden";
                button.setAttribute("aria-label", "Fout bij laden van audio");
                button.disabled = false;

                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000)
            }
        })
    })
})