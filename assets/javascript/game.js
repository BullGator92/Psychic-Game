    // Creates an array that lists out all of the options the computer can choose from. */}
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Enables random choice from the options array. This is the Computer's guess. */
    var computerChoice = options[Math.floor((Math.random() * options.length) - 1)];
    console.log(computerChoice);

    // Creating variables to hold the number of wins, losses, and guesses left. They start at 0, 0, and 10, respectively. */}
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guesses = [];

    // Create variables that hold references to the places in the HTML where we want to display things. */}
    var directionsText = document.getElementById("directions-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var userChoiceText = document.getElementById("userchoice-text");
    guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;

  
    // This function is run whenever the user presses a key. */}
    document.onkeyup = function(event) {
      var userGuess = event.key;
      console.log(userGuess);
      guesses.push(userGuess); 
    
    // Logs user guesses and displays them.
    // function myFunction(event) {
    //   var userChar = userGuess.value;
    //   document.getElementById("guesses-text").innerHTML = userChar;
    //   userGuess.value = "";
    // }

    // This logic determines the outcome of the game (win/loss), and increments the appropriate number
    if (userGuess == computerChoice) {
      wins++;
      guesses = [];
      guessesLeft = 10;
      computerChoice = options[Math.floor(Math.random() * options.length)];
      console.log("computerChoice", computerChoice);
    } else if ((userGuess !== computerChoice) && (guessesLeft > 1)) {
      guessesLeft--;
    } else if (userGuess !== computerChoice) {
      losses++;
      guesses = [];
      guessesLeft = 10;
      computerChoice = options[Math.floor(Math.random() * options.length)];
    }
    
    // Display the wins counter, losses counter, # of guesses left, and user's previous guesses.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;
    userChoiceText.textContent = "You chose: " + guesses;

    };

