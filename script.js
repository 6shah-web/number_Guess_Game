let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/*
Part 1: write a function which generates a number between 0 and 9.

Purpose:

Generate a random number which will be called at the start of each new game,
this will be our secret target number
*/

/*
Function below generates a random number between 0 and 9 (excluding 9).
 */
function generateTarget() {

  return Math.floor(Math.random() * 9);

};

/*
We then return the stored value in a variable called secretTargetNumber.
 */
const secretTargetNumber = generateTarget();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/*
Part 2: Generate computer guess.
 */

function generateComputerGuess() {

  return Math.floor(Math.random() * 9);

};

const computerGuess = generateComputerGuess();

/*
Part 3: Compare guesses function, this function then compares the guesses of both the human and the computer, if the human's guess is closer to the target number it will return true, if the computers
guess is closest to target number it will return false.
*/

function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {

/*
The method Math.abs() will find the absolute value, for example, -5 and 5 the absolute value is 5. 
We can use this to find the difference from the target number for both the computer and human guess,
whichever difference is largest it means they are further away from the target number so they lose.
 */

// a is the absolute difference between the target and human guess.
  let a = Math.abs(secretTargetNumber - humanGuess);

// b is the absolute difference between the target and computer guess.
  let b = Math.abs(secretTargetNumber - computerGuess);

// if human guess is the same as computer guess, its a tie and human should win.
  if (humanGuess === computerGuess) {
    return true; // human wins if true is returned.

  } else if (humanGuess === secretTargetNumber) {
    return true;

  } else if (computerGuess === secretTargetNumber) {
    return false; // computer wins if false is returned.

  } else if (a > b) {
    return false;

  } else if (b > a) {
    return true;

  } else {
    return true;
  }
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/*
Part: 3

Function below assigns the returned value from compareGuesses() function to variable outcomeCompareGuesses.

If the outcome is true, the function returns the string 'human' and if it is false, the function returns 'computer'.
 */

const outcomeCompareGuesses = compareGuesses(5, computerGuess, secretTargetNumber);

function findWinner() {
  
  if (outcomeCompareGuesses === true) {
    return 'human';
  } else {
    return 'computer'
  }
}

// the returned string is then stored in the variable winner.

const winner = findWinner();



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/*
 * Part 4: 
 */

function updateScore(winner) {

  if (winner === 'human') {
    // if the human wins, the humanScore variable is increased by 1.
    humanScore++;

  } else if (winner === 'computer') {
    // if the computer wins, the computerScore variable is increased by 1.
    computerScore++;

  } else {
    console.log('error');
  };
};

// Part 5:

function advanceRound() {

  currentRoundNumber++;
};