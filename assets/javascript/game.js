




// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var win = 0;
    var lost  = 0;
    var opportunities = 9;
    var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var usedArray= [];
    var computerGuess = computerGuess;

    // Computer Guess
    computerGuess = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    console.log(computerGuess);

    document.onkeyup = function (event) {
        var userGuess = event.key;

        if (userGuess === computerGuess) {
            won++;
            opportunities = 9;
            usedArray = [];
        }

        if (userGuess !== computerGuess) {
            lost++;
            opportunities--;
            usedArray = [];

        }

        }
    }

// // Create variables that hold references to the places in the HTML where we want to display things.
//     var userChoice2 = document.getElementById("user-choice");
//     var computerChoiceText = document.getElementById("computer-choice");
//     var winText = document.getElementById("win-text");
//     var losseText = document.getElementById("losse-text");
    
    
  


//  // This function is run whenever the user presses a key.
// // // Creates an array that lists out all of the options of letters
// //     alert("Choose");

//     // var computerGuess =3;
//     // var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     // var userGuess;
//     // for( var i=0; i < possibleLetters.length; i++) {
//     //     if (computerGues == guess) {
//     //         alert("You guess correctly");
//     //         break;
        
//     //     }
//     //     console.log(i);
//     }
// //   // Determines which key was pressed.
// //   var userGuess = event.key;

// //   // Randomly chooses a choice from the options array. This is the Computer's guess.
// //   var computerGuess = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];

 

// // }