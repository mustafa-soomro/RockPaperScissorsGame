// Grabs the user's input (rock, paper, or scissors and tracks it)
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}
// Generates a random input on behalf of the computer (rock, paper, or scissors)
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  document.getElementById('computerScore').style.display = "";
  switch (randomNumber) {
    case 0:
      return 'rock';

    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Logs the score 
let userScore = 0;
let computerScore = 0;

// Determines the winner 
const determineWinner = (userChoice, computerChoice) => {

// Determines if there is a tie 
  if (userChoice === computerChoice) {
    return document.getElementById("result").innerHTML = "You tied with the computer!"

  }

  // If/Else statement to determine the winner when the user plays 'rock'
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";


    } else {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!";


    }
  }
    // If/Else statement to determine the winner when the user plays 'paper'
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";

    } else {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!";
    }
  }
    // If/Else statement to determine the winner when the user plays 'scissor'
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";

    } else {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!";
    }
  }
}
// Function that resets the score back to 0 when called
function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}
// Logs player and computer choices to console
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  checkWinner();
}




