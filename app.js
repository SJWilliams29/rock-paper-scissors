let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceNum = 0;
    let choice = "";
    choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 2) {
        choice = "Rock";
    } else if (choiceNum == 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your action.");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice =
        humanChoice.slice(0, 1).toUpperCase() +
        humanChoice.slice(1).toLowerCase();
    switch (humanChoice) {
        case "Scissors":
            if (computerChoice == "Rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else if (computerChoice == "Paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            } else {
                console.log("Draw!");
            }
            break;
        case "Rock":
            if (computerChoice == "Paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else if (computerChoice == "Rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else {
                console.log("Draw!");
            }
            break;
        case "Paper":
            if (computerChoice == "Scissors") {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            } else if (computerChoice == "Rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else {
                console.log("Draw!");
            }
            break;
    }
}
