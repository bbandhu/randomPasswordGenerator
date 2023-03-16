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

//prompt for password lenght which returns length
function showPromptForLength() {
  var passwordLength = prompt(
    "How many characters do you want your password to be? (min: 8, max: 128)"
  );
  const input = document.createElement("input");
  input.type = "input";
  console.log(passwordLength);
  return passwordLength;
}

//function to add a prompt for password Criteria for lowerCase
function showPromptForLowerCase() {
  const confirmed = window.confirm(
    "Enter your password Criteria- do you want to include lowercase?"
  );
  console.log(confirmed);

  return confirmed;
}

//function to add a prompt for password Criteria for upperCase
function showPromptForUpperCase() {
  const confirmed = window.confirm(
    "Enter your password Criteria- do you to include upperCase?"
  );
  console.log(confirmed);

  return confirmed;
}

//function to add a prompt for password Criteria for numerics
function showPromptForNumerics() {
  const confirmed = window.confirm(
    "Enter your password Criteria- do you to include numerics?"
  );
  console.log(confirmed);

  return confirmed;
}

//function to add a prompt for password Criteria for specialcharacters
function showPromptForSpecialCharacters() {
  const confirmed = window.confirm(
    "Enter your password Criteria- do you to include Specialcharacters?"
  );
  console.log(confirmed);
  return confirmed;
}
//function to generate password based user password criteria
function generatePassword() {
  var chars = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*";
  var password = "";
  //var passwordCriteria = prompt(" Please choose the password criteria");
  var passwordLength = showPromptForLength();
  if (passwordLength >= 8 && passwordLength <= 128) {
    var numeric = showPromptForNumerics();
    var lowerCase = showPromptForLowerCase();
    var upperCase = showPromptForUpperCase();
    var specialCharacters = showPromptForSpecialCharacters();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password length between 8 and 128 characters.");
    return "";
  }

  if (!lowerCase && !upperCase && !numeric && !specialChars) {
    return alert(
      "Please select at least one type of character to include in the password."
    );
  }

  if (lowerCase) {
    chars += lowercaseChars;
  }
  if (upperCase) {
    chars += uppercaseChars;
  }
  if (numeric) {
    chars += numericChars;
  }
  if (specialCharacters) {
    chars += specialChars;
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}
