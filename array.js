// Array: It is a non primitive data type. It is a special type of object in js that is used to store multiple similar valued data in a single variable.

// example 
// array of fruits:
let fruits = ['apple', 'banana', 'cherry', 'Dragonfruit']
// array of yesrs
let yesrs = [1999,2000,2001,2002,2003]

// Mixed array:
let mixedArray = ['hello', 19, true, undefined, null, Symbol(1), 200n, fruits, {a:1,b:2}]

//The data present inside an array are called "elements", and each element has its own "Index".
// The index of array always starts from 0. Iy means 1st element is represented by 0 index, second element is represented by 1 index and so no.

// in JavaScript, arrays can be created using 
// Array literals 
// It is the most common/used way to create an array.
// veriableType identifier = [el1, el2, el3,......,elN]

// Array Constructor
// Since, array is an special object in javaScript, it can be created using its constructor
// Example 
let brands = new Array('Adudas', 'Nike', 'Gucci', 'Dior', 'Goldstar')

console.log(typeof(fruits))

// Accessing elements of an array using index

console.log(fruits[3])

// adding elements in an array using index
let cities = []
cities[0] = 'Kathmandu'
cities[1] = 'London'
cities[2] = 'Sydney'

cities[6] = 'Hongkong'

// 3 array holes are formed
console.log(cities)

// Array is apecial in-boult object in javascript. SO it has many special methods as well.

// It is one special property

// .length -> it returns lengh of an array

console.log(fruits.length)

// Methods:- methods are functions defined in an object
// Array methods: