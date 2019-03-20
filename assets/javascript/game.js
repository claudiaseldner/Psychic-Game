
// // Creating variables to hold the number of wins, losses, and ties. They start at 0.

    var win = 0;
    var losses = 0;
    var guessesLeft = 9;
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var GuessesSoFar = [];

    var directionsText = document.getElementById('directions-text');
    var winText = document.getElementById("win-text");
    var losseText = document.getElementById("losse-text");
    var guessLeftText = document.getElementById("guess-left-text");
    var guessSoFarText = document.getElementById("guesses-so-far");
    var computerChoiceText = document.getElementById("computer-choice");

   
    // function typeLetters () {
    //   document.getElementById("guesses-so-far").value = document.getElementById()

    

    document.onkeyup = function(event) {
    var userGuess = (event.key);
    // var userGuess = guessSoFarText;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // GuessesSoFar.push(document.getElementById("guesses-so-far").value);
    // guessSoFarText.innerHTML = GuessesSoFar.join();
   
    if (userGuess === computerGuess) {
        win++;
        guessesLeft = 9;
        GuessesSoFar.length = 0;
      } else if (guessesLeft === 1) {
        losses++;
        guessesLeft = 9;
        GuessesSoFar.length = 0;
      

      } else if (userGuess!== computerGuess) {
        guessesLeft--;
      
      }
    
      console.log(computerGuess);
      console.log(userGuess);

   
    guessSoFarText.innerHTML = "Your Gueses so far: " + GuessesSoFar;
    GuessesSoFar.push(userGuess);
    winText.innerHTML = 'Wins: ' + win;
    losseText.innerHTML = 'Losses: ' + losses;
    guessLeftText.textContent = "Guesses Left: " + guessesLeft;
    computerChoiceText.textContent = "" + computerGuess;
}

