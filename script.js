'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = '12';
document.querySelector('.score').textContent = '69';
document.querySelector('.guess').value = '23';
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMsg('😢 No number!');
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMsg('🎊 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //the guess is either high or low
  else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('💔 You have Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //the guess is too high
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💔 You have Lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //the guess is too low
  //   else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💔 You have Lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//////// first coding challenge
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMsg('Start Guessing...');
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
