// Object :- It is an important non primitive datatype in Javascript. Object are special data strucutre that can hold values in well ordered manner. It can as well hold other complex entities. Object hold data in key - Value pair.

// Syntax : VeriableType identifier = {key:value, key2:value2,....,keyN:ValueN}

// example Object
const Person = {
    firstName: "Sandip",
    lastName: "Ghimire",
    gender: "Male",
    isMarried: "False",
    birthYear: 2002,
    age: (currentYear)=>currentYear-Person.birthYear
}

console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender==='Male'? 'he':'she'} is ${Person.isMarried?'':'not'} married.`)
// here, firstName is property and age is method.


// Accessing values from an object:
// There are two ways to access values from an object.
// 1. Dot Notation
console.log(Person.firstName) // "Sandip"

// 2. Bracket Notation
console.log(Person['lastName']) // "Ghimire"