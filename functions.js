function getEvenNumbers(numbers) {
    for ( let number of numbers ) {
        if ( number % 2 == "0") {
            console.log(typeof(number))
        }
    }
}

function outerFunction() {
    let outerVar = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();

