let optionsArray = ['rock', 'paper', 'scissors']
let playerWins = 0;
let computerWins = 0;

function randomChoice() {
    return Math.floor(Math.random() * 3)
}

function computerPlay() {
    return optionsArray[randomChoice()];
}


function singleGame(playerChoice) {
    let playerSelection = playerChoice.target.innerText;
    let playerSelectionCorrected = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelectionCorrected !== computerSelection) {

        if (playerSelectionCorrected === 'rock' && computerSelection === 'scissors') {
            playerWins++;
            result.textContent = `You Win! ${playerSelectionCorrected} beats ${computerSelection}`;
        } else if (playerSelectionCorrected === 'rock' && computerSelection === 'paper') {
            computerWins++
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelectionCorrected}`;
        } else if (playerSelectionCorrected === 'paper' && computerSelection === 'rock') {
            playerWins++;
            result.textContent = `You Win! ${playerSelectionCorrected} beats ${computerSelection}`;
        } else if (playerSelectionCorrected === 'paper' && computerSelection === 'scissors') {
            computerWins++
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelectionCorrected}`;
        } else if (playerSelectionCorrected === 'scissors' && computerSelection === 'paper') {
            playerWins++;
            result.textContent = `You Win! ${playerSelectionCorrected} beats ${computerSelection}`;
        } else {
            computerWins++
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelectionCorrected}`;
        }
        
            
    } else {
        result.textContent = `Its a tie! You both chose ${computerSelection}`;
    }

    score.textContent = `Player Wins: ${playerWins} || Robot Wins: ${computerWins}`;
    

    if (playerWins == 5 || computerWins == 5) {
        if (playerWins > computerWins) {
            result.textContent = "Your the Champion of Rock, Paper, Scissors!!!";
        } else if (playerWins < computerWins) {
            result.textContent = "you lost, better luck next time :(";
        } else {
            result.textContent = "Its a tie!!!";
        }
        playerWins = 0;
        computerWins = 0;
    }
    

}



const choice = Array.from(document.querySelectorAll('button'));
choice.forEach(decision => decision.addEventListener('click', singleGame));


const result = document.querySelector('.results');
const score = document.querySelector('.score');
result.textContent = "Result!"
score.textContent = `Player Wins: ${playerWins} || Robot Wins: ${computerWins}`;



