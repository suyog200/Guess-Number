'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Math.parseInt(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess < 0) {
    document.querySelector('.message').textContent = 'Number Between 1 & 20';
  }
  // when guess is equal to number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#14cc45';

    document.querySelector('.number').style.width = '30rem';

    // to keep the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Number Too High' : '📉 Number Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing..';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = 'rgb(31, 28, 28)';

  document.querySelector('.number').style.width = '15rem';
});
