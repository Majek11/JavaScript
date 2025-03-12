const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925
}

const { title, author} = book
console.log(`${title} by ${author}`)

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021
}

const getProperties = function(car) {
for ( const properties in car ) {
    console.log(car[properties])
    }
}
getProperties(car)


const counter = {
    count: 1,
    step: 10
}

const person = {
    firstName: 'John',
    lastName: 'Doe'
}

const getFullName = (person) => {
   for ( const key in person ) {
    console.log(person[key])
    }
}
getFullName(person)

const person2 = {
    firstName: 'Bernice',
    lastName: 'Doe',
    age: 25
}

const getStringPerson = (persom2) => {
        console.log(`${person2.firstName} ${person2.lastName}`)
}

getStringPerson(person)


