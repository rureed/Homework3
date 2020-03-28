// Assignment Code
var generateBtn = document.querySelector("#generate");
var setLength;
var useNum;
var useLo;
var useUp;
var useSym;

var ltrs = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var nums = ["1234567890"]
var syms = ["!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  setLength = (Number(prompt("Choose password length from 8 - 128 characters.")));
  if setLength = "" { 
    alert("Please choose between 8 and 128 characters")

  } else {
    useNum = confirm("Will your password contain numbers?");
    useLo = confirm("Will your password contain lower case letters?");
    useUp = confirm("Will your password contain upper case letters?");
    useSym = confirm("Will your password contain special characters?");
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
