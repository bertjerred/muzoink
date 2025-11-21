// script.js

// This message will appear in your browser's console when the page loads
console.log("script.js has been successfully loaded!");

// Placeholder for future functionality
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');

    // Attach an event listener (currently does nothing but log a message)
    if (button) {
        button.addEventListener('click', () => {
            console.log("Button clicked! Ready for action.");
            // Add your custom JavaScript logic here
        });
    }
});