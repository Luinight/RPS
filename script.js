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


console.log(getHumanChoice());