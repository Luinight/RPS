function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    
    let choice;
    if (randomNumber === 1) {choice="rock";}
    
    else if (randomNumber === 2) {choice = "paper";}

    else if (randomNumber === 3) {choice = "scissors";}

    return choice;
}

//console.log (getComputerChoice());

function getHumanChoice() {
    
    const input = prompt("Please enter rock, paper, or scissors:");

    
    if (input === null) {
        console.log("Input canceled. Exiting.");
        return; 
    }

    
    const choice = input.toLowerCase();

    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; 
    }

   
    else { 
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice();
    } 
}


//console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    const currentRoundDiv = document.getElementById("currentRound");
    const scoresDiv = document.getElementById("scores");
    const winnerDiv = document.getElementById("winner");

    if (humanChoice === computerChoice) {
        currentRoundDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        currentRoundDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        currentRoundDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    // Update scores
    scoresDiv.textContent = `Scores: You - ${humanScore}, Computer - ${computerScore}`;

    // Check if anyone reached 5 points
    if (humanScore === 5) {
        winnerDiv.textContent = "Congratulations! You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        winnerDiv.textContent = "Sorry, the computer wins the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    // Reset the display
    const currentRoundDiv = document.getElementById("currentRound");
    const scoresDiv = document.getElementById("scores");
    const winnerDiv = document.getElementById("winner");

    currentRoundDiv.textContent = "";
    scoresDiv.textContent = "Scores: You - 0, Computer - 0";
    winnerDiv.textContent = "";
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});