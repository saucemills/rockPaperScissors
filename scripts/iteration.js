let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let computerChoices = ['rock', 'paper', 'scissors'];

const rockSelect = document.querySelector("#rock");;
rockSelect.addEventListener('click', () => {
    playerChoice = "rock";
    document.getElementById(
        "player-choice"
    ).innerHTML = `You chose ${playerChoice}`;
    computerChoice = getComputerChoice();
    evaluateResults();
});

const paperSelect = document.querySelector("#paper");
paperSelect.addEventListener('click', () => {
    playerChoice = "paper";
    document.getElementById(
        "player-choice"
    ).innerHTML = `You chose ${playerChoice}`;
    computerChoice = getComputerChoice();
    evaluateResults();
});

const scissorsSelect = document.querySelector("#scissors");
scissorsSelect.onclick = () => {
    playerChoice = "scissors";
    document.getElementById(
        "player-choice"
    ).innerHTML = `You chose ${playerChoice}`;
    computerChoice = getComputerChoice();
    evaluateResults();
};

function getComputerChoice() {
  let computerChoiceNumber = Math.floor(Math.random() * 3);
  let computerChoice = computerChoices[computerChoiceNumber];
  document.getElementById(
      "computer-choice"
  ).innerHTML = `Computer chose ${computerChoice}`;

  return computerChoice;
}

function evaluateResults() {
    if (playerChoice == computerChoice) {
        document.getElementById('results').innerHTML = `You tied. Play again.`
    }
    
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore = playerWinsRound();
    }
    
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore = computerWinsRound();
    }

    if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore = playerWinsRound();
    }

    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore = computerWinsRound();
    }

    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore = playerWinsRound();
    }

    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore = computerWinsRound();
    }
}

function playerWinsRound() {
    playerScore++;
    document.getElementById('score').innerHTML = `${playerScore}`;

    if (playerScore < 2) {
        document.getElementById('results').innerHTML = `You win this round. Go again.`
    } else {
        document.getElementById('results').innerHTML = `You win the game!`
    }
    
    return playerScore;
}

function computerWinsRound() {
    computerScore++;
    document.getElementById('comp-score').innerHTML = `${computerScore}`;

    if (computerScore < 2) {
        document.getElementById('results').innerHTML = `The computer won this round. Go again.`
    } else {
        document.getElementById('results').innerHTML = `The computer wins the game!`
    }

    return computerScore;
}