// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
function generatePassword() {
  var userInput = parseInt(prompt("Select a number between 8 and 128"));
 
  if(!userInput) {
    alert("Please enter number between 8 and 128");
    return null;
  }
  if (userInput < 8) {
    alert("Please select a number greater than 8");
    return null;
  }
  if (userInput > 128) {
    alert("Please select a number less than 128");
    return null;
  }
  var includeSpecialChar = confirm(
    "Do you want to include special characters?"
  );
  var includeNum = confirm("Do you want to include number?");
  var includeUpper = confirm("Do you want to include uppercase?");
  var includeLower = confirm("Do you want to include lowercase?");
  var specialChar = "!@#$%&*^";
  var num = "0123456789";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var setOfChar = "";
  var newPassword = "";
 
  if(!includeLower && !includeNum && !includeSpecialChar && !includeUpper) {
    alert("Select at least one option!!");
    return null;
  }

  if (includeLower) {
    setOfChar = setOfChar + lower;
  }
  if (includeNum) {
    setOfChar = setOfChar + num;
  }
  if (includeSpecialChar) {
    setOfChar = setOfChar + specialChar;
  }
  if (includeUpper) {
    setOfChar = setOfChar + upper;
  }

  for (var i = 0; i < userInput; i++){
    newPassword = newPassword + randomChar(setOfChar);
  }
  return newPassword;
}


function randomChar(setOfChar) {
  var randomNum = Math.floor(Math.random()* setOfChar.length);
  var randomCharSet = setOfChar[randomNum];
  return randomCharSet;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
