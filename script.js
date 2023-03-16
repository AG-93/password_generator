// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable to store length of password from user input
  let userChoiceOflength = parseInt(
    prompt('How many characters would you like your password to contain?')
  )
//function for getting a random element from an array
  if(isNaN (userChoiceOflength) === true){
    alert('Password length must be provided as number');
    return;
  }
  
  if(userChoiceOflength < 10) {
    alert('Password length must be 10 or more characters');
    return;
  }

  if(userChoiceOflength > 64) {
    alert('Password length must be less than 64 characters');
    return;
  }

  let hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  let hasNumbericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  let hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )
  
  let hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if(hasLowerCasedCharacters === false && 
    hasUpperCasedCharacters === false &&
    hasSpecialCharacters === false && 
    hasNumericCharacters === false) {
      alert('Must select at least one character type');
      return;
  }

  //Javascript has keyvaluepair 
  let passwordOptions = {
    length: userChoiceOflength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumbericCharacters: hasNumbericCharacters, 
  }

  console.log(passwordOptions);

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  letrandomIndex = Math.floor(Math.random() * arr.length)
  letrandomElement = arr(randomIndex);

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  //!= logical operator that explains value isn't there
  if (!options){
    return
  }
  console.log(options);
  let results = []

  let possibleCharacters = []

  let guaranteedCharacters = []

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }

  if(options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters))
  }

  if(options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters))
  }
   console.log (possibleCharacters);

  for(let index = 0; index < options.length; index++){
    var generated = getRandom(possibleCharacters);
    console.log(generated);
    results.push(generated);
  }


//making algorithm more random
  for(let index=0; index<guaranteedCharacters.length; index++){
    results[index] = guaranteedCharacters[index]
  }

  console.log(results);

  //generates all values
  return results.join("")
 
 
 // console.log (guaranteedCharacters);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);