let optionsArray = ['rock', 'paper', 'scissors']
let playerWins = 0;
let computerWins = 0;

function randomChoice() {
    return Math.floor(Math.random() * 3)
}

function computerPlay() {
    return optionsArray[randomChoice()];
}

function singleGame(playerSelection, computerSelection) {
    let playerSelectionCorrected = '';
    playerSelectionCorrected = playerSelection.toLowerCase();
    if (playerSelectionCorrected !== computerSelection) {

        if (playerSelectionCorrected === 'rock' && computerSelection === 'scissors') {
            playerWins++;
            console.log(`You Win! ${playerSelectionCorrected} beats ${computerSelection}`);
        } else if (playerSelectionCorrected === 'rock' && computerSelection === 'paper') {
            computerWins++
            console.log(`You Lose! ${computerSelection} beats ${playerSelectionCorrected}`);
        } else if (playerSelectionCorrected === 'paper' && computerSelection === 'rock') {
            playerWins++;
            console.log(`You Win! ${playerSelectionCorrected} beats ${computerSelection}`);
        } else if (playerSelectionCorrected === 'paper' && computerSelection === 'scissors') {
            computerWins++
            console.log(`You Lose! ${computerSelection} beats ${playerSelectionCorrected}`);
        } else if (playerSelectionCorrected === 'scissors' && computerSelection === 'paper') {
            playerWins++;
            console.log(`You Win! ${playerSelectionCorrected} beats ${computerSelection}`);
        } else {
            computerWins++
            console.log(`You Lose! ${computerSelection} beats ${playerSelectionCorrected}`);
        }
            
    } else {
        console.log(`Its a tie! You both chose ${computerSelection}`);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors?', '');
        let computerSelection = computerPlay();
        singleGame(playerSelection, computerSelection);  
    }
    
    console.log(playerWins, computerWins);

    if (playerWins > computerWins) {
        console.log("Your the Champion of Rock, Paper, Scissors!!!");
    } else if (playerWins < computerWins) {
        console.log("you lost, better luck next time :(");
    } else {
        console.log("Its a tie!!!");
    }
    

}

game();

