//****************** level 1 approach */
// let randomNumber;
// const userInput = document.querySelector('#guessField');
// const Previousguesses = document.querySelector('.Previousguesses');
// const RemainingAttemps = document.querySelector('.RemainingAttemps');
// const messageBox = document.querySelector('.messageBox');
// const body = document.querySelector('body');
// const wrapper = document.querySelector('#wrapper');
// let isAllowToPlayGame = true;
// let previousGuessArray = [];
// let attemp = Number(1);
// let input;
// const submit = document.querySelector('#subt');
// if (isAllowToPlayGame) {
//   Start();
// } else {
//   endGame();
// }
// function Start() {
//   // if (attemp < 11) {} // not working we are accessing attemp before event
//   submit.addEventListener('click', function (event) {
//     event.preventDefault();
//     if (attemp < 11) {
//       randomNumber = Math.round(Math.random() * 10);
//       input = parseInt(userInput.value);
//       validateInput(input);
//     } else {
//       endGame();
//     }
//   });
// }
// function validateInput(input) {
//   if (input != '' && !isNaN(input)) {
//     if (input === randomNumber) {
//       displayMessage(
//         `Great !! Your Guess is right && You are Lucky Person`,
//         true
//       );
//     } else if (input != randomNumber) {
//       displayMessage(
//         `oopss !! You Was wrong && Number was  ${randomNumber} `,
//         false
//       );
//     } else if (input < -1 || input > 10) {
//       displayMessage(`You Input ${input} was not in range`, false);
//     }
//     displayRemainingandPreviousAttemps();
//   } else {
//     displayMessage(`You Input ${input} was not in valid formate `, false);
//   }
// }
// function displayRemainingandPreviousAttemps() {
//   previousGuessArray.push(input);
//   RemainingAttemps.innerHTML = 10 - attemp;
//   Previousguesses.innerHTML = previousGuessArray;
//   if (10 - attemp === 0) {
//     endGame();
//   }
//   attemp++;
// }
// function displayMessage(message, iswon) {
//   if (iswon) {
//     messageBox.innerHTML = message + '😎';
//     messageBox.style.color = 'green';
//     body.style.background = 'grey';
//   } else {
//     messageBox.innerHTML = message + '😒';
//     messageBox.style.color = 'red';
//     body.style.background = 'black';
//   }
//   userInput.value = '';
// }
// function endGame() {
//   displayMessage('Game Over', false);
//   isAllowToPlayGame = false;
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');

//   // const p = document.createElement('p');
//   // // p.className = 'StartNewGame';
//   // p.setAttribute('id', 'StartNewGame');
//   // p.classList.add('button');
//   // p.innerHTML = '<h2> Start New Game </h2>';
//   // p.style.background = 'green';
//   // // p.style.color = 'green';
//   // p.style.width = '279px';
//   // p.style.height = '36px';
//   // p.style.padding = '0px';
//   // p.style.borderRadius = '7px';
//   // p.style.marginLeft = '75px';
//   // p.style.marginBottom = '412px';
//   // wrapper.appendChild(p);
//   submit.value = 'Start New Game';
//   startNewGame();
// }

// function startNewGame() {
//   submit.addEventListener('click', function startNewGameHandler(e) {
//     e.preventDefault();
//     isAllowToPlayGame = true;
//     userInput.removeAttribute('disabled');
//     previousGuessArray = [];
//     attemp = 1;
//     userInput.value = '';
//     RemainingAttemps.innerHTML = '10';
//     Previousguesses.innerHTML = '';
//     submit.value = 'Submit guess';
//     messageBox.innerHTML = '';
//     submit.removeEventListener('click', startNewGameHandler); //need to remove eventListener from button before adding other
//     // const p = resultParas.querySelector('#StartNewGame');
//     // wrapper.removeChild(p);
//   });
// }
