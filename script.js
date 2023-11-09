
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
    let rocket = $('#rocket');
    let hintButton = $('#hint-btn');
    let revealedCount = 0;

    // Function to animate rocket launch
    function launchRocket() {
        rocket.animate({
            marginTop: '-500px',
            opacity: '0'
        }, 2000, function() {
            // Reset rocket position after animation
            rocket.css({ marginTop: '0', opacity: '1' });
        });
    }

    // Function to check the guess and update the results
    function checkGuess(guess) {
        // Implementation of code checking logic (compare guess with the secretCode)
        // Update the results dynamically on the page

        // Check if the code is cracked
        if (codeIsCracked) {
            // Add rocket launch animation
            launchRocket();
        }
    }

    // Function to handle user input and update the page
    function submitGuess() {
        const guessInput = $('#guess').val().split(' ').map(Number);
        checkGuess(guessInput);
    }

    // Function to reveal one number as a hint
    function revealHint() {
        if (revealedCount < 4) {
            // Replace this logic with the actual hint implementation
            alert('Hint: ' + secretCode[revealedCount]);
            revealedCount++;

            // Check if all numbers are revealed
            if (revealedCount === 4) {
                // Reset the game or perform any other actions
                alert('All numbers revealed. Game reset!');
                // Add code to reset the game
            }
        }
    }

    // Attach click event to the submit button
    $('#submit-btn').click(submitGuess);

    // Attach click event to the hint button
    hintButton.click(revealHint);
});

