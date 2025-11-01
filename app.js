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
