
function toggleVisibility(id) {
    let element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


// Initial setup - add animation, etc.
$(document).ready(function () {
    let rocket = $('#rocket');
    let hintButton = $('#hint-btn');
    let revealedCount = 0;
    let missedAttempts = [];

    // Function to animate rocket launch
    function launchRocket() {
        rocket.animate({
            marginTop: '-500px',
            opacity: '0'
        }, 2000, function () {
            // Reset rocket position after animation
            rocket.css({ marginTop: '0', opacity: '1' });
        });
    }

    // Function to generate a random secret code
    function generateSecretCode() {
        let code = [];
        for (let i = 0; i < 4; i++) {
            code.push(Math.floor(Math.random() * 10));
        }
        return code;
    }

    // Initialize the secret code
    const secretCode = generateSecretCode();

    // Function to check the guess and update the results
    function checkGuess(guess) {
        // Check if the input is valid (4 numbers)
        if (guess.length === 4 && guess.every(num => num >= 0 && num <= 9)) {
            // Implementation of code checking logic (compare guess with the secretCode)
            // Update the results dynamically on the page

            // Check if the code is cracked
            if (codeIsCracked) {
                // Add rocket launch animation
                launchRocket();
            } else {
                // Add incorrect guess to missed attempts
                missedAttempts.push(guess.join(' '));
                updateMissedAttempts();
            }

            // Update the guesses container
            updateGuesses(guess);
        } else {
            alert('Please enter 4 numbers between 0 and 9.');
        }
    }

    // Function to update the guesses list on the page
    function updateGuesses(guess) {
        let guessList = $('#guess-list');
        $('<li>').text(guess.join(' ')).appendTo(guessList);
    }

    // Function to update the missed attempts list on the page
    function updateMissedAttempts() {
        let missedList = $('#missed-list');
        missedList.empty(); // Clear previous attempts

        // Append new attempts to the list
        missedAttempts.forEach(function (attempt) {
            $('<li>').text(attempt).appendTo(missedList);
        });
    }

    // Function to handle user input and update the page
    function submitGuess() {
        const guessInput = $('#guess').val().split(' ').map(Number);
        checkGuess(guessInput);
    }

    // Function to reveal one number as a hint
    function revealHint() {
        if (revealedCount < 4) {
            alert('Hint: ' + secretCode[revealedCount]);
            revealedCount++;

            // Check if all numbers are revealed
            if (revealedCount === 4) {
                alert('All numbers revealed. Game
