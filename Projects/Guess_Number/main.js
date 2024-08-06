let randomNumber = parseInt(Math.random() * 100 + 1); // to covert it into num

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// users inputs
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validatGuess(guess);
  });
}

function validatGuess(guess) {
  // to check input is num and in bet 1 to 100
  if (isNaN(guess)) {
    alert("please enter a valid Number");
  } else if (guess < 1) {
    alert("please enter a Number greater than 1");
  } else if (guess > 100) {
    alert("please enter a Number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // to print msg
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("number is low");
  } else if (guess > randomNumber) {
    displayMessage("Number is high");
  }
}

function displayGuess(guess) {
  // values cleaning, update arrays
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  //dom manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '' // vlaue clean
    userInput.setAttribute('Disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`
    startOver.appendChild(p)
    newGame()
    playGame = false;
}
function newGame() {
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(e){
     randomNumber = parseInt(Math.random() * 100 + 1); // to covert it into num
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`
      userInput.removeAttribute('disabled');
      startOver.removeChild(p)
      playGame = true;
   })

}
