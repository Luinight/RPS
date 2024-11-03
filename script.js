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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log('You win!');
        humanScore++;
    } else {
        console.log('you lose');
        computerScore++; // Increment computer score
    }

    // Display current scores
    console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
}
   
const humanSelection = getHumanChoice();    
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);