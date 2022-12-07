/* Main Logic */
let playerScores = 0;
let computerScores = 0;
let gameCount = 0;

// Get every selection and update result every user selected
const selections = document.querySelectorAll('.selection');
selections.forEach(selection => selection.addEventListener('click', function(e) {
    const playerSelection = selection.dataset.selected;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === 1) {
      playerScores++;
    } else if (result === -1) {
      computerScores++;
    }

    if (playerScores === 5 || computerScores === 5) {
      displayWinner(playerScores, computerScores);
    }

    displayResult(result);
    displayScores(playerScores, computerScores);
    displaySelections(playerSelection, computerSelection);
    displayGameCount(++gameCount);
}));

/* Helper functions */

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Value based: Computer === -1, Draw === 0, Player === 1
function playRound(playerSelection, computerSelection) {
  // Handling case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // No one won
  if (playerSelection === computerSelection) {
    return 0;
  }

  // Computer won
  if ((playerSelection === 'rock'     && computerSelection === 'paper')    ||
      (playerSelection === 'paper'    && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
    return -1;
  }

  // Player won
  return 1;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function displaySelections(playerSelection, computerSelection) {
  const playerSelectionDisplay = document.querySelector('.player-selection');
  const computerSelectionDisplay = document.querySelector('.computer-selection');
  
  playerSelectionDisplay.textContent = capitalize(playerSelection);
  computerSelectionDisplay.textContent = capitalize(computerSelection);
}

function displayScores(playerScores, computerScores) {
  const playerScoreDisplay = document.querySelector('.player-score');
  const computerScoreDisplay = document.querySelector('.computer-score');
  
  playerScoreDisplay.textContent = playerScores;
  computerScoreDisplay.textContent = computerScores;
}

function displayResult(result) {
  const roundWinnerDisplay = document.querySelector('.round-winner');

  if (result === 1) {
    roundWinnerDisplay.textContent = 'You Win';
    roundWinnerDisplay.style.color = 'green';
  } else if (result === -1) {
    roundWinnerDisplay.textContent = 'You Lose';
    roundWinnerDisplay.style.color = 'red';
  } else {
    roundWinnerDisplay.textContent = 'Draw';
    roundWinnerDisplay.style.color = '#0369a1';
  }
}

function displayGameCount(gameCount) {
  const gameCountDisplay = document.querySelector('.game-count');
  gameCountDisplay.textContent = `Game count: ${gameCount}`;
}

function displayWinner(playerScores, computerScores) {
  const body = document.querySelector('body');
  const container = document.querySelector('.container');
  const winnerDeclare = document.querySelector('.winner-declare');
  const declareText = document.querySelector('.declare-text');

  body.removeChild(container);
  winnerDeclare.style.display = "flex";

  if (playerScores === 5) {
    declareText.textContent = 'You Are the Winner';
  } else {
    declareText.textContent = 'Computer Are the Winner';
  }
}
