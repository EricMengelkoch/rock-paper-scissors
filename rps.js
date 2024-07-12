function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    if (choice = "rock") {
        return "rock";
    } else if (choice = "paper") {
        return "paper";
    } else if (choice = "scissors") {
        return "sciccors"
    } else {
        console.log("Invalid choice, try again");
        getHumanChoice();
    }
}

console.log(getComputerChoice());

console.log(getHumanChoice());