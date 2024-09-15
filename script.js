const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('resultText');
const restartBtn = document.getElementById('restart');

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    const playerChoice = e.currentTarget.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
  });
});

restartBtn.addEventListener('click', () => {
  resultText.textContent = 'Choose an option to play!';
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function displayResult(player, computer, result) {
  resultText.textContent = `You chose ${player}. Computer chose ${computer}. You ${result}!`;
}
