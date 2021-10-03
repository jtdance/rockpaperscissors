const myArray = ["rock","paper","scissors"];
const getUserChoice = prompt("Rock, Paper, or Scissors?");

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return ("Tie Game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            return ("You Lose!");
        } else {
            return ("You Win!");
        }
}

const playerSelection = getUserChoice;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));