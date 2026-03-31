
console.log("Hello World!");

const testToggle = document.getElementById("summarizeCheckbox");

testToggle.addEventListener("change", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [testToggle.checked],
        func: (isChecked) => {
            if (isChecked) {
                document.body.style.backgroundColor = "red";
            } else {
                document.body.style.backgroundColor = "";
            }
        }
    })

})