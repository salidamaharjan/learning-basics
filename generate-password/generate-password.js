// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//creating a function to call in line number 6
function generatePassword() {
  //creating variable to hold the entered input, using prompt to ask question to the user.
  var input = prompt(
    "Want to create password? Choose a number between 8 to 128."
  );
  console.log(typeof input);
  //checking input is at least 8 character long
  if (input < 8) {
    //Giving alert to the user
    alert("Select a number greater than 8!!");
    return null;
  }
  //checking input less than 128
  if (input > 128) {
    alert("Select a number less than 128!!");
    return null;
  }
  var listOfCharacters = "";
  var lower = "abcd";
  console.log(lower);
  console.log(randomCharacter(lower));
  return null;
}
function randomCharacter (list) {
    for (var i = 0; i < list.length; i++) {
        var randomNum = Math.floor(Math.random() * list.length);
        var randomChar = list[randomNum];
    }
    return randomChar;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
