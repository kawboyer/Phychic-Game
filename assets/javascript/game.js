
// Variables to hold letter options, number of wins, losses, guesses left and user guesses.

var letterOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var randomLetter = " ";

// User to type a letter as input.
document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase();
    guessedLetters.push(event.key);
    console.log(guessedLetters);
    
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
        guessesLeft--;

        if (userGuess === randomLetter) {
            wins++;
            reset();
        } 
        
        if (guessesLeft < 0) { 
            losses++;
            reset();
        }

        var gameDiv = document.getElementById("game");
        gameDiv.innerHTML =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + guessedLetters + "</p>";
        
    } else { 
        alert ("Please choose a letter key from a to z.");

    }

}

// Guesses left to decrease by one per each guess.
var updateGuessesLeft = function () {
    document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft; 
}

var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    // Computer to generate new random letter at beginning of game.
    randomLetter = letterOption[Math.floor(Math.random() * letterOption.length)]
    console.log(randomLetter);
    
}

reset()