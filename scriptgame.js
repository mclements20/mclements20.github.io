document.addEventListener("DOMContentLoaded", function () {
    const singlePlayerBtn = document.getElementById("single-player");
    const multiplayerBtn = document.getElementById("multiplayer");
    const singlePlayerGame = document.getElementById("single-player-game");
    const multiplayerGame = document.getElementById("multiplayer-game");
    const playerChoicesContainer = document.getElementById("player-choices");
    const multiplayerSubmitBtn = document.getElementById("multiplayer-submit");
    const resultMessageSinglePlayer = document.getElementById("result");
    const resultMessageMultiplayer = document.getElementById("multiplayer-result");

    singlePlayerBtn.addEventListener("click", function () {
        singlePlayerGame.classList.remove("hidden");
        multiplayerGame.classList.add("hidden");
        resetGame();
        playSinglePlayer();
    });

    multiplayerBtn.addEventListener("click", function () {
        multiplayerGame.classList.remove("hidden");
        singlePlayerGame.classList.add("hidden");
        resetGame();
        setupMultiplayer();
    });

    function resetGame() {
        resultMessageSinglePlayer.textContent = "Result: ";
        resultMessageMultiplayer.textContent = "Result: ";
        playerChoicesContainer.innerHTML = "";
    }

    function playSinglePlayer() {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        document.querySelectorAll(".choice").forEach(function (button) {
            button.addEventListener("click", function () {
                const userChoice = this.id;
                const result = determineWinner(userChoice, computerChoice);
                resultMessageSinglePlayer.textContent = `Result: ${result}`;
            });
        });
    }

    function setupMultiplayer() {
        const numPlayers = prompt("Enter the number of players (2-4):");
        if (numPlayers >= 2 && numPlayers <= 4) {
            for (let i = 1; i <= numPlayers; i++) {
                const input = document.createElement("input");
                input.type = "text";
                input.placeholder = `Player ${i} choice (rock/paper/scissors)`;
                input.id = `player-${i}`;
                playerChoicesContainer.appendChild(input);
            }

            multiplayerSubmitBtn.addEventListener("click", function () {
                const choices = [];
                for (let i = 1; i <= numPlayers; i++) {
                    const playerChoice = document.getElementById(`player-${i}`).value.toLowerCase();
                    choices.push(playerChoice);
                }
                const result = determineMultiplayerWinner(choices);
                resultMessageMultiplayer.textContent = `Result: ${result}`;
            });
        } else {
            alert("Invalid number of players. Please enter a number between 2 and 4.");
            resetGame();
        }
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function determineMultiplayerWinner(choices) {
        const uniqueChoices = new Set(choices);
        if (uniqueChoices.size === 1) {
            return "It's a tie!";
        } else if (uniqueChoices.size === choices.length) {
            // No duplicate choices
            const winningCombinations = ["rockscissors", "scissorspaper", "paperrock"];
            const combinedChoices = choices.join("");
            if (winningCombinations.includes(combinedChoices)) {
                return "Player 1 wins!";
            } else {
                return "No winner. Try again!";
            }
        } else {
            return "Invalid choices. Each player must choose a unique option.";
        }
    }
});
