const numbersOne = [1,2,3,4,5,6,7]

for ( const num of numbersOne ) {
console.log(num)
}

const numbersTwo = [1,2,3,4,5,6,7,8,9,10]

for ( const num of numbersTwo) {
console.log(num * num)
}

let sum = 0
const number = [4,5,6,7,8]
for ( const num of number) {
    sum += num
}
console.log(sum)

const webTechs = [
    'html', 'css', 'javascript', 'java', 'go', 'python' 
]

for ( const tech of webTechs ) {
    console.log(tech.toUpperCase())
    console.log(tech[0])
}

//const countries = ['Finland', 'Sweden', 'Nigeria', 'Angola', 'Egypt' ]

// creating a new array from an existing array
const array = [1,2,3,4,5,6,7]
const newArr = []

let newSum = 0
for ( let i = 0; i < array.length; i++ ) {
    newArr.push(array[i] ** 2)
}
console.log(array)
console.log(newArr)

/* let count = 0
while( count <= 10) {
    console.log(count)
    count++
} */






