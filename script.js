// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var setLength = prompt("Choose password length: 8 - 128 characters.");
  var useNum;
  var useLo;
  var useUp;
  var useSym;
  var nums = "1234567890";
  var ups = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lows = "abcdefghijklmnopqrstuvwxyz";
  var syms = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var choice = "";
  var password = "";
  
  if(setLength === ""){
    alert("Please start over and set a VALID length from 8 - 128 characters.\n(SMH)");
      location.reload(forceget);
  } else if (setLength < 8 || setLength > 128){
      alert("Please start over and set a VALID length from 8 - 128 characters.\n(SMH)");
      location.reload(forceget);
  }
  
  useNum = confirm("Include numerals?");
  if(useNum === true){
    choice = choice.concat(nums);
  } 
  useLo = confirm("Include lower case?");
  if(useLo === true){
    choice = choice.concat(lows);
  }
  useUp = confirm("Include upper case?");
  if(useUp === true){
    choice = choice.concat(ups);
  }
  useSym = confirm("Include special characters?");
  if(useSym === true){
    choice = choice.concat(syms);
  }
  
  for (var i = 0; i < setLength; i++) {
    password += choice[Math.floor(Math.random() * choice.length)];
  }
  console.log(setLength, choice);

  return password
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// I was unable to get rid of the [object HTMLTextAreaElement] barnacle attached to the beginning of the generated password. I tried adding .innerHTML as well as changing the querySelector to getElementById (and using .innerHTML again) to no avail. I just can't seem to find the wayward gremlin.

  passwordText.value = password;

console.log(passwordText.value);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
