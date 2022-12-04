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

function game() {
  let playerScores = 0;
  let computerScores = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: 'rock', 'paper', or 'scissors'");
    const computerSelection = getComputerChoice();

    const winner = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}`);
    console.log(`Player: ${playerSelection} <==> ${computerSelection} :Computer`)
  
    if (winner === 1) {
      playerScores++;
      console.log(`${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
    } else if (winner === -1) {
      computerScores++;
      console.log(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
    } else {
      console.log('Its a draw');
    }

    console.log("====================================================================");
  }

  if (playerScores > computerScores) {
    console.log('Player is the winner!');
  } else if (playerScores < computerScores) {
    console.log('Computer is the winner!');
  } else {
    console.log('Its a draw');
  }
}

game();