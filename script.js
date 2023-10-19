'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.highscore').textContent = 2;

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;

// document.querySelector('.guess').value = 7;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When There is no Input
  if (!guess) {
    displayMessage('⛔ Not a Number');
    // document.querySelector('.message').textContent = '⛔ Not a Number';

    //When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore'), (textContent = score);

      // For Short Hand or Clean code You can use this Code
      // } else if (guess !== secretNumber) {
      //   if (score > 1) {
      //     document.querySelector('.message').textContent =
      //       guess > secretNumber ? '📉Too High' : '📈Too Low';
      //     score--;
      //     document.querySelector('.score').textContent = score;
      //   } else {
      //     document.querySelector('.message').textContent = 'You Lost The Game';
      //     document.querySelector('.score').textContent = 0;
      //   }
    }
    // When Player loses and guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '📉Too High ';
      displayMessage('📉Too High.. ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game💥');
      document.querySelector('.score').textContent = 0;
    }
    // When Player loses and guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('📈Too Low..');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Handlick Agin events
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
