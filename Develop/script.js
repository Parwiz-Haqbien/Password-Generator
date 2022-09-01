// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt (min ,max) {
  if (!max) {
    max=min
    min=0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand*max)+ rand*max)
}
function getRandomItem (list) {
  return list [ randomInt(list.length)]
}
function generatePassword() {
  var userInput = window.prompt("how long do you want your passowrd to be ?")
  var passowrdLength =parseInt(userInput)
  if (isNaN(passowrdLength)) {
    window.alert("that's not a number!")
    return
  }

if (passowrdLength <8 || passowrdLength > 128){
  window.alert ("Password length  must be between 8 and 128 characters")
  return
}
var userWantsNumber =window.confirm("Would you like to include numbers in  your passowrd?")
var userWantsSymbols =window.confirm("Would you like to include symbols in  your passowrd?")
var userWantsLowercase =window.confirm("Would you like to include lowercase letters in  your passowrd?")
var userWantsUppercase =window.confirm("Would you like to include uppercase letters in  your passowrd?")

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
for (var i= 0; i <passowrdLength; i++){
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem (randomList)
  generatePassword += randomChar
}
return generatePassword
}

 function writePassword () {
  var passowrd = generatePassword ();
  var PasswordText = document.querySelector('#password');

  PasswordText.value = passowrd;
 }
//adding event lsitener to generate button
generateBtn.addEventListener('click',writePassword);


