
// Array for upper case
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Array for lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Array for number
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Array for special character
var specialCharacter = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "-", "+", "=", "{", "}", "[", "]", "|", "~", "`", "_", ";", ":", "<", ">", ",", ".", "?", "/"];


// // Array for everything that is not a numnber
// var notNumber = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "-", "+", "=", "{", "}", "[", "]", "|", "~", "`", "_", ";", ":", "<", ">", ",", ".", "?", "/"] 




// User prompt for password length 8-128, options for character types
function generatePassword() {
  var length = parseInt(
    prompt("How many characters in your password? Choose between 8-128.")
    );

    

    // if input is <8 and >128, error message
    if (length < 8 || length > 128) {
      alert("Password must be between 8 and 128 characters.");
      return;
    }

    // else if (length = upperCase && lowerCase && specialCharacter) {
    //   alert("Length must be entered as a number.")
    //   return;
    // }

    

      // contain character type upperCase? BOOLEAN
      var confirmUpperCase = confirm("Will your password contain upper case letters?");
      // contain character type lowerCase? BOOLEAN
      var confirmLowerCase = confirm("Will your password contain lower case letters?");
      // contain character type number? BOOLEAN
      var confirmNumber = confirm("Will your password contain numbers?");
      // contain character type specialCharacter? BOOLEAN
      var confirmSpecialCharacter = confirm("Will your password contain special characters?");
    

    // if no character type chosen, error message
    if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSpecialCharacter) {
      alert("Password must contain some character type.");
      return;
    }

   


  // else if for all 4 options chosen
    else if (confirmUpperCase && confirmLowerCase && confirmNumber && confirmSpecialCharacter) {
      choices = upperCase.concat(lowerCase, number, specialCharacter);
    }

    // else if for 3 options chosen
    else if (confirmUpperCase && confirmLowerCase && confirmNumber) {
      choices = upperCase.concat(lowerCase, number);
    }

    else if (confirmUpperCase && confirmLowerCase && confirmSpecialCharacter) {
      choices = upperCase.concat(lowerCase, specialCharacter);
    }

    else if (confirmUpperCase && confirmNumber && confirmSpecialCharacter) {
      choices = upperCase.concat(number, specialCharacter);
    }

    else if (confirmLowerCase && confirmNumber && confirmSpecialCharacter) {
      choices = lowerCase.concat(number, specialCharacter);
    }

    // else if for 2 options chosen
    else if (confirmUpperCase && confirmLowerCase) {
      choices = upperCase.concat(lowerCase);
    }

    else if (confirmUpperCase && confirmNumber) {
      choices = upperCase.concat(number);
    }

    else if (confirmUpperCase && confirmSpecialCharacter) {
      choices = upperCase.concat(specialCharacter);
    }

    else if (confirmLowerCase && confirmNumber) {
      choices = lowerCase.concat(number);
    }

    else if (confirmLowerCase && confirmSpecialCharacter) {
      choices = lowerCase.concat(specialCharacter);
    }

    else if (confirmNumber && confirmSpecialCharacter) {
      choices = number.concat(specialCharacter);
    }

    // else if for 1 option chosen
    else if (confirmUpperCase) {
      choices = upperCase;
    }

    else if (confirmLowerCase) {
      choices = lowerCase;
    }

    else if (confirmNumber) {
      choices = number;
    }

    else if (confirmSpecialCharacter) {
      choices = specialCharacter;
    }


    // var password is array placeholder
    var password = [];


    // for loop to select random characters
    for (var i = 0; i < length; i++) {
      var userChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(userChoices);
    }


    // copied from youTube, no idea what the .join("") means
    var ps = password.join("");
    userInput(ps);
    return ps;

}

// // continuation of what I copied from youTube
function userInput(ps) {
  document.getElementById("password").textContent = ps;
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




