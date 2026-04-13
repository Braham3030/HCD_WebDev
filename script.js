

console.log("Hello World!");

// Prevent screen reader from reading the whole page when loaded on the page

document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".messageInput input");

    if (chatInput) {
        chatInput.focus();
    }
})

const apiKey = config.elevenLabsApiKey;
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

    // audioPlayer.forEach(button => {
    //     button.addEventListener("click", async () => {
            
    //         const originalText = button.textContent;

    //         // Loading state
    //         button.textContent = "Laden...";
    //         button.setAttribute("disabled", "true");
    //         // Prevents multiple clicks while loading
    //         button.disabled = true;

           
    //     })
    // })
})

// Source for audio customization:
// https://mimo.org/glossary/html/audio-tag

// document.getElementById("audioSpeech").onplay = function() {
//     alert("Audio is gestart!")
// }