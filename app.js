'use strict'

// selecting elements

let player0Score = document.querySelector('#score--0');
let player1Score = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let rollBtn = document.querySelector('.btn--roll');
let player0CurrentLabel = document.querySelector('#current--0');
let player1CurrentLabel = document.querySelector('#current--1');
let hold = document.querySelector('.btn--hold');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let newGame = document.querySelector('.btn--new');

// initialization

player0Score.textContent = 0;
player1Score.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let initialPlayerScore = [0, 0];
let playing = true;
// user rolls dice
rollBtn.addEventListener('click', function () {
    if (playing) {
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        dice.src = `dice-${randomNumber}.png`;
        dice.classList.remove('hidden');
        if (randomNumber !== 1) {
            currentScore += randomNumber;

            (activePlayer === 0) ? (player0CurrentLabel.textContent = currentScore) : (player1CurrentLabel.textContent = currentScore);
        }
        else {
            (activePlayer === 0) ? (player0CurrentLabel.textContent = 0) : (player1CurrentLabel.textContent = 0);
            (activePlayer === 0) ? (activePlayer = 1, player1.classList.toggle('player--active'), player0.classList.toggle('player--active')) : (activePlayer = 0, player1.classList.toggle('player--active'), player0.classList.toggle('player--active'));
            currentScore = 0;
        }
    }
})
hold.addEventListener('click', function () {
    if (playing) {
        (activePlayer === 0) ? (player0CurrentLabel.textContent = 0) : (player1CurrentLabel.textContent = 0);
        if (initialPlayerScore[`${activePlayer}`] + currentScore < 100) {
            initialPlayerScore[`${activePlayer}`] += currentScore;
            (activePlayer === 0) ? (player0Score.textContent = initialPlayerScore[0]) : (player1Score.textContent = initialPlayerScore[1]);
            (activePlayer === 0) ? (activePlayer = 1, player1.classList.toggle('player--active'), player0.classList.toggle('player--active')) : (activePlayer = 0, player1.classList.toggle('player--active'), player0.classList.toggle('player--active'));
            currentScore = 0;
        }
        else {
            playing = false;
            (activePlayer === 0) ? (player0Score.textContent = 100) : (player1Score.textContent = 100);
            document.querySelector(`#score--${activePlayer}`).classList.add('color');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            dice.classList.add('hidden');
        }

    }
})
newGame.addEventListener('click', function () {
    player0Score.textContent = 0;
    player1Score.textContent = 0;
    player0CurrentLabel.textContent = 0;
    player1CurrentLabel.textContent = 0;
  
    currentScore = 0;
    dice.classList.add('hidden');
    initialPlayerScore[0] = 0;
    initialPlayerScore[1] = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    document.querySelector(`#score--${activePlayer}`).classList.remove('color');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    activePlayer = 0;
    playing = true;
})





