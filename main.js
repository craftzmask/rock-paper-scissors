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
function checkWinner(playerSelection, computerSelection) {
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

function playRound(playerSelection, computerSelection) {
  const winner = checkWinner(playerSelection, computerSelection);
  if (winner === 0) {
    return 'Its draw';
  }

  return winner === 1
    ? `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    : `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(`Player: ${playerSelection} <==> ${computerSelection} :Computer`)
console.log(playRound(playerSelection, computerSelection));