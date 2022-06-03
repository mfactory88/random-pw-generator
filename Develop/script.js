// Assignment code here

// set constant for special characters
const specialCharacters = "!@#$%^&*()_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password generator
function generatePassword() {

  // initialize validation switches
  var testResponse = 0;
  var lengthResponse = 0;
  var minimumCount = 0;
  
  // validate at least 1 criterion is selected
  while (testResponse === 0) {
    var pwNumberConfirm = confirm("Do you want a password with numbers?");
    var pwLowerCaseConfirm = confirm("Do you want a password with lower case letters?");
    var pwUpperCaseConfirm = confirm("Do you want a password with upper case letters?");
    var pwSpecialConfirm = confirm("Do you want a password with special characters?");

    if (pwNumberConfirm) {
      testResponse++;
      minimumCount++;
    }
    if (pwLowerCaseConfirm) {
      testResponse++;
      minimumCount++;
    }
    if (pwUpperCaseConfirm) {
      testResponse++;
      minimumCount++;
    }
    if (pwSpecialConfirm) {
      testResponse++;
      minimumCount++;
    }
  };

  // validate the length of the password
  while (lengthResponse === 0) {
    var pwLengthPrompt = prompt("Enter password length from 8 to 128 characters.");
    
    var pwLength = parseInt(pwLengthPrompt);
    
    if (pwLength >= 8 && pwLength <= 128) {
      lengthResponse++
    }
  };

  // initialize criteria variables
  var minNumbers = "";
  var minLowerCases = "";
  var minUpperCases = "";
  var minSpecialCharacters = "";

  // individual password criteria functions
  var pwArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  // initialize string for loop
  var randomPasswordGenerated = "";

  // loop to get random characters
  while (pwLength > randomPasswordGenerated.length) {
    //var randomNumberPicked = Math.floor(Math.random() * 4);

    //
    if (pwNumberConfirm) {
      minNumbers = pwArray.getNumbers();
    }
    if (pwLowerCaseConfirm) {
      minLowerCases = pwArray.getLowerCases();
    }
    if (pwUpperCaseConfirm) {
      minUpperCases = pwArray.getUpperCases();
    }
    if (pwSpecialConfirm) {
      minSpecialCharacters = pwArray.getSpecialCharacters();
    }
    
    // add characters to password
    randomPasswordGenerated += minNumbers;
    randomPasswordGenerated += minLowerCases;
    randomPasswordGenerated += minUpperCases;
    randomPasswordGenerated += minSpecialCharacters;
  }

  return randomPasswordGenerated

}



