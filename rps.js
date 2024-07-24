function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "Rock";
    } else if (choice < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let first = prompt("Rock, Paper, or Scissors?");
    let choice = first.toLowerCase();
    if (choice == "rock") {
        return "Rock";
    } else if (choice == "paper") {
        return "Paper";
    } else if (choice == "scissors") {
        return "Scissors"
    } else {
        console.log("Invalid choice, try again");
        getHumanChoice();
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(hmn, cpu) {
        if (hmn == "Rock" && cpu == "Scissors" || hmn == "Paper" && cpu == "Rock" || hmn == "Scissors" && cpu == "Paper") {
            text.textContent = "You win! " + hmn + " beats " + cpu;
            humanScore += 1;
            score.textContent = "You: " + humanScore + " vs " + computerScore + " :Computer"
        } else if (cpu == "Rock" && hmn == "Scissors" || cpu == "Paper" && hmn == "Rock" || cpu == "Scissors" && hmn == "Paper") {
            text.textContent = "You lose! " + cpu + " beats " + hmn;
            computerScore += 1;
            score.textContent = "You: " + humanScore + " vs " + computerScore + " :Computer"
        } else {
            text.textContent ="It's a tie!";
            score.textContent = "You: " + humanScore + " vs " + computerScore + " :Computer"
        }
        if (humanScore == 3) {
            score.textContent = "Congrats! You beat the computer " + humanScore + " to " + computerScore;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 3) {
            score.textContent = "Yikes, beaten by the computer " + computerScore + " to " + humanScore;
            humanScore = 0;
            computerScore = 0;
        }
    }

    let text = document.querySelector("#textbox");
    let score = document.querySelector("#scorebox");

    let rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () => {
        playRound("Rock", getComputerChoice());
    })
    let paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () => {
        playRound("Paper", getComputerChoice());
    })
    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice());
    })
    

    
}

playGame();
