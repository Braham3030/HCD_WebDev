
console.log("Hello World!");

let button = document.querySelector(".speechBtn");
let speechBox = document.querySelector(".speechBox");

    
button.addEventListener("click", function() {
    console.log("Button clicked!");
    speechBox.classList.toggle("speechBox");
});