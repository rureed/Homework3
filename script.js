// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var setLength = prompt("Choose password length: 8 - 128 characters.");
  var useNum = confirm("Include numerals?");
  var useLo = confirm("Include lower case?");
  var useUp = confirm("Include upper case?");
  var useSym = confirm("Include special characters?");
  var nums = "1234567890";
  var ups = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lows = "abcdefghijklmnopqrstuvwxyz";
  var syms = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var choice = "";
  var length = "";

  // var password = ""
  
  if(setLength === ""){
    alert("Please set a valid length from 8 - 128.");
  } else if (setLength < 8 || setLength > 128){
      alert("Please set a valid length from 8 - 128.");
  }
  
  if(useNum === true){
    choice = choice + nums
  } 
  if(useLo === true){
    choice = choice + lows
  }
  if(useUp === true){
    choice = choice + ups
  }
  if(useSym === true){
    choice = choice + syms
  }

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
