const { calculate, addTwoNumbers, subtractTwoNumbers, getEvenNumbers, calculateArea, convertToFahrenheit, isEven, countVowels } = require("./argumentFunction");

test(
    "add two numbers", () => {
        let firstNumber = 5;
        let secondNumber = 72; // arrange
        const result = addTwoNumbers(firstNumber, secondNumber); // act
        let answer = 77;
        expect(result).toBe(answer) // assert
        
    }
)

test(
    "return even numbers", () => {
        let arrayOfNumbers = [2,3,4,5,6,7,9];
        let answer = [2,4,6];
        let result = getEvenNumbers(arrayOfNumbers)
        expect(result).toEqual(answer)
    } 
)

test (
    "calculate area", () => {
        let height = 10
        let width = 9
        const area = calculateArea(height, width)
        let answer = 90
        expect(area).toBe(answer)
    }
)

test (
    "convert to fahrenheit", () => {
        let celcius = 50
        let fahrenheit = convertToFahrenheit(celcius)
        let answer = 122
        expect(fahrenheit).toBe(answer)
    }
)

test(
    "is even", () => {
        let number = 8
        let answer = isEven(number)
        let result = true
        expect(answer).toBe(result)
    }
)

test(
    "count vowels", () => {
        let vowels = 'a, e, i, o, u'
        let answer = countVowels(vowels)
        let result = 'a, e, i, o, u'
        expect(answer).toBe(result)
    }
)
