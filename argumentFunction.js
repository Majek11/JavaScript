function calculate( firstValue, secondValue, callBackFunction ) {
    return callBackFunction( firstValue, secondValue)
};

function addTwoNumbers( numberOne, numberTwo) {
    let result = numberOne + numberTwo
    return result
}

function subtractTwoNumbers( numberOne, numberTwo ) {
    let result = numberOne - numberTwo
    return result
}

function getEvenNumbers(array) {
    let arrayOfEvenNumbers = []
    for( let value of array ) {
        if(value % 2 == 0) {
            arrayOfEvenNumbers.push(value)
        }
    }
    return arrayOfEvenNumbers
}

function calculateArea(height, width) {
    let answer = height * width
    return answer
}

function convertToFahrenheit(celcius) {
    let fahrenheit = celcius * 9/5 + 32;
    return fahrenheit
}

function isEven(number) {
    let answer = true
    return answer
}

function countVowels(vowels) {
    let answer = vowels
    return answer
}


module.exports = { calculate, addTwoNumbers, subtractTwoNumbers, getEvenNumbers, calculateArea, convertToFahrenheit, isEven, countVowels }
