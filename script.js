function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getUserChoice() {
    const userChoice = prompt("Enter 'rock', 'paper', or 'scissors':", "").toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
      return userChoice;
    } else {
      alert('Invalid input. Please try again.');
      return getUserChoice();
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    }

    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }
  
  function playGame() {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);
    alert(`You chose ${playerSelection}. The computer chose ${computerSelection}. ${winner}`);
  }
  
  playGame();

