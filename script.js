
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
    let code = [];
    for (let i = 0; i < 4; i++) {
        code.push(Math.floor(Math.random() * 10)); // Use numbers instead of colors
    }
    return code;
}

// Function to check the guess and update the results
function checkGuess(guess) {
    // Convert the guess to an array of numbers
    const guessNumbers = guess.map(Number);

    // Check if the input is valid (4 numbers)
    if (guessNumbers.length === 4 && guessNumbers.every(num => num >= 0 && num <= 9)) {
        // Implementation of code checking logic (compare guessNumbers with the secretCode)
        // Update the results dynamically on the page
        // Add animation if the code is cracked
    } else {
        alert('Please enter 4 numbers between 0 and 9.');
    }
}

// Function to handle user input and update the page
function submitGuess() {
    const guessInput = $('#guess').val().split(' ').map(Number);
    checkGuess(guessInput);
}

// Initial setup - add animation, etc.
$(document).ready(function() {
    // Add rocket launch animation on successful code crack
});
