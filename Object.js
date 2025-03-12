const Person = {
    firstName: "Majek",
    age: 78,
    occupation: "Software Engineer"
}

Person.gender = "Male"
//console.log(Person)

const newPerson = {
    firstName: "Bode",
    age: 50
}

Person.newPerson = newPerson
console.log(Person)
console.log(Object.keys(Person))
console.log(Object.keys(newPerson))
console.log(Object.entries(Person))


const person = {
    firstName: "Joy",
    secondName: "Ugbo",
    age: 12,
    occupation: "Software Engineer"
}

for ( const key in person) {
    console.log(person[key])
}
