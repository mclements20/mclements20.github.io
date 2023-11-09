
function toggleVisibility(id) {
    let element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}



// Initialize the secret code
const secretCode = generateSecretCode();

// Function to generate a random secret code
function generateSecretCode() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let code = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        code.push(colors[randomIndex]);
    }
    return code;
}

// Function to check the guess and update the results
function checkGuess(guess) {
    // Implementation of code checking logic (compare guess with the secretCode)
    // Update the results dynamically on the page
    // Add animation if the code is cracked
}

// Function to handle user input and update the page
function submitGuess() {
    const guessInput = $('#guess').val().toLowerCase().split(' ');
    
    // Check if the input is valid (4 colors)
    if (guessInput.length === 4) {
        checkGuess(guessInput);
    } else {
        alert('Please enter 4 colors.');
    }
}

// Initial setup - add animation, etc.
$(document).ready(function() {
    // Add rocket launch animation on successful code crack
});
