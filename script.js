// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt (min ,max) {
  if (!max) {
    max=min
    min=0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random*max)+ random*max)
}
function getRandomItem (list) {
  return list [ randomInt(list.length)]
}
function generatePassword() {
  var userInput = window.prompt("how long do you want your password to be ?")
  var passwordLength =parseInt(userInput)
  if (isNotNumber(passwordLength)) {
    window.alert("that's not a number!")
    return
  }

if (passwordLength <8 || passwordLength > 128){
  window.alert ("Password length  must be between 8 and 128 characters")
  return
}
var userWantsNumber = window.confirm("Would you like to include numbers in  your password?")
var userWantsSymbols = window.confirm("Would you like to include symbols in  your password?")
var userWantsLowercase = window.confirm("Would you like to include lowercase letters in  your password?")
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in  your password?")

var numberList = ['0','1','2','3','4','5','6','7','8','9']
var symbolsList = ['!','@','#','$','%','^','&','*']
var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercaseList =[]

var optionsCart =[]
for (var i=0; i<lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if ( userWantsNumber === true) {
  optionsCart.push(numberList)
}
if ( userWantsSymbols === true) {
  optionsCart.push(symbolsList)
}
if ( userWantsLowercase === true) {
  optionsCart.push(lowercaseList)
}
if ( userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}
if ( optionsCart === 0) {
  optionsCart.push(lowercaseList)
}
var generatePassword = ""
for (var i = 0; i <passwordLength; i++){
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem (randomList)
  generatePassword += randomChar
}
return generatePassword
}

 function writePassword () {
  var password = generatePassword ();
  var PasswordText = document.querySelector('#password');

  PasswordText.value = password;
 }
//adding event listener to generate button
generateBtn.addEventListener('click',writePassword);  


