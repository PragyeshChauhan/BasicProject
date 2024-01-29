// Define variables for DOM elements
const userInput = document.querySelector('#guessField');
const previousGuessesDisplay = document.querySelector('.Previousguesses');
const remainingAttemptsDisplay = document.querySelector('.RemainingAttemps');
const messageBox = document.querySelector('.messageBox');
const body = document.querySelector('body');
const submitButton = document.querySelector('#subt');

// Initialize game state variables
let isGameActive = true;
let previousGuesses = [];
let attemptsRemaining = 10;
let randomNumber;

// Start the game
startGame();

// Function to start the game
function startGame() {
  submitButton.addEventListener('click', handleGuess);
}

// Function to handle user's guess
function handleGuess(event) {
  event.preventDefault();

  if (attemptsRemaining > 0) {
    // Generate a random number if it's the first guess
    if (previousGuesses.length === 0) {
      randomNumber = generateRandomNumber();
    }

    // Get user's input and validate it
    const userInputValue = parseInt(userInput.value);
    validateInput(userInputValue);
  } else {
    endGame();
  }
}

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

// Function to validate user input
function validateInput(input) {
  if (isNaN(input)) {
    displayMessage(`Please Enter valid Number`, false);
  } else if (input > 0 && input <= 10) {
    checkGuess(input);
  } else {
    displayMessage(`Please enter a valid number between 1 and 10.`, false);
  }
}

// Function to check user's guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the correct number.`, true);
    endGame();
  } else {
    previousGuesses.push(guess);
    displayMessage(
      `Oops! Your guess  ${userInput.value} was incorrect. Try Again `,
      false
    );
    updateGameDisplay();
  }
}

// Function to update game display
function updateGameDisplay() {
  previousGuessesDisplay.textContent = previousGuesses.join(', ');
  attemptsRemaining--;
  remainingAttemptsDisplay.textContent = attemptsRemaining;
  userInput.value = '';
  if (attemptsRemaining === 0) {
    displayMessage(`Number was :  ${randomNumber}.`, false);
    endGame();
  }
}

// Function to display messages to the user
function displayMessage(message, isPositive) {
  messageBox.textContent = message;
  messageBox.style.color = isPositive ? 'green' : 'red';
  body.style.background = isPositive ? 'lightgrey' : 'black';
}

// Function to end the game
function endGame() {
  isGameActive = false;
  submitButton.removeEventListener('click', handleGuess);
  submitButton.value = 'Start New Game';
  submitButton.style.backgroundColor = 'darkgreen';
  userInput.value = '';
  userInput.setAttribute('disabled', '');
}
