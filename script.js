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








// Array for upper case
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Array for lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Array for number
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Array for special character
var specialCharacter = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "-", "+", "=", "{", "}", "[", "]", "|", "~", "`", "_", ";", ":", "<", ">", ",", ".", "?", "/"];




// User prompt for password length 8-128, options for character types
function generatePassword() {
  var length = parseInt(
    prompt("How many characters in your password? Choose between 8-128.")
    );

    // if input is <8, error message
    if (length < 8) {
      prompt("Password must contain at least 8 characters.");
      return;
    }

    // if input is >128, error message
    if (length > 128) {
      prompt("Password must contain less than 129 characters");
      return;
    }

}





// contain character type upperCase? BOOLEAN
// contain character type lowerCase? BOOLEAN
// contain character type number? BOOLEAN
// contain character type specialCharacter? BOOLEAN

// if no character type chosen, error message



// function to get random character from array
// Math.floor ?
// Math.random ?



// function 
// if includes upperCase
// if includes lowerCase
// if includes number
// if includes specialCharacter
// for loop inside function
//        for (var i = 0, i < ???; i++) {}














