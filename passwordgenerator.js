const prompt = require('prompt-sync')()
const passwordLength = parseInt(prompt("Enter password length: "));
const includeUppercase = prompt(" Include uppercase letters? (y/n): ");
const includeLowercase = prompt(" Include lowercase letters? (y/n): ");
const includeNumbers = prompt(" Include numbers? (y/n): ");
const includeSpecialCharacters = prompt(" Include special characters? (y/n): ");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialcharacters = "/:^-|\';*&%$#@!+=";

let characterspool = "";
if(includeUppercase.toString === "y") {characterspool += uppercaseLetters;};
if(includeLowercase.toString === "y") {characterspool += lowercaseletters;};
if(includeNumbers.toString === "y") {characterspool += numbers;};
if(specialcharacters.toString === "y") {characterspool += specialcharacters;};

let password = "";
for(let count = 0; count < passwordLength; count++){
	const randomIndex = Math.floor(Math.random() * characterspool.length);
	password += characterspool[randomIndex]; 
}

console.log("Your password: " + password);
