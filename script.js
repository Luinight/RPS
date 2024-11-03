function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    
    let choice;
    if (randomNumber === 1) {choice="rock";}
    
    else if (randomNumber === 2) {choice = "paper";}

    else if (randomNumber === 3) {choice = "scissors";}

    return choice;
}

console.log (getComputerChoice());

function getHumanChoice() {
    // Prompt the user for input
    const input = prompt("Please enter rock, paper, or scissors:");

    // Convert input to lowercase
    const choice = input.toLowerCase();

    // Check if the input is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; // Return the valid choice
    }

    // If the input is invalid, log a message and call the function again
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); // Ask for input again
}


console.log(getHumanChoice());