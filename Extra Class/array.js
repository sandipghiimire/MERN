// Array: It is a non primitive data type. It is a special type of object in js that is used to store multiple similar valued data in a single variable.

// example 
// array of fruits:
// let fruits = ['apple', 'banana', 'cherry', 'Dragonfruit']
// array of yesrs
// let yesrs = [1999,2000,2001,2002,2003]

// Mixed array:
// let mixedArray = ['hello', 19, true, undefined, null, Symbol(1), 200n, fruits, {a:1,b:2}]

//The data present inside an array are called "elements", and each element has its own "Index".
// The index of array always starts from 0. Iy means 1st element is represented by 0 index, second element is represented by 1 index and so no.

// in JavaScript, arrays can be created using 
// Array literals 
// It is the most common/used way to create an array.
// veriableType identifier = [el1, el2, el3,......,elN]

// Array Constructor
// Since, array is an special object in javaScript, it can be created using its constructor
// Example 
// let brands = new Array('Adudas', 'Nike', 'Gucci', 'Dior', 'Goldstar')

// console.log(typeof(fruits))

// Accessing elements of an array using index

// console.log(fruits[3])

// adding elements in an array using index
// let cities = []
// cities[0] = 'Kathmandu'
// cities[1] = 'London'
// cities[2] = 'Sydney'

// cities[6] = 'Hongkong'

// 3 array holes are formed
// console.log(cities)

// Array is apecial in-boult object in javascript. SO it has many special methods as well.

// It is one special property

// .length -> it returns lengh of an array

// console.log(fruits.length)

// Methods:- methods are functions defined in an object
// Array methods:

// .indexOf() -> it returns index of the element passed as an argument. If element doesn't exist it returns -1.
// console.log(fruits.indexOf('apple')) // 0
// console.log(fruits.indexOf('Dragonfruit')) // 0

// .includes() -> it checks the existence of element in the array and returns boolen value.

// console.log(fruits.includes('banana'))
// console.log(fruits.includes('kera'))

// ARRAYS THET MUTATES THE ORIGINAL ARRAY.

//1) .push() -> it adds the element to the end of the array

// let checkReturnValueOfPush = fruits.push('Kera', 'Kiwi')
// console.log(fruits)

// console.log(checkReturnValueOfPush)

//2) .pop() -> it removes an element from the end of the original array

// let popedElement = brands.pop() // removed element is returned

// console.log(brands)

// 3) shift
// 4) unshift --> Is adds element from the start of the array.

// const returnValue = fruits.unshift('Mango', 'Apple')
// console.log(returnValue)
// console.log(fruits)

// 5. Splice -> This method is used to add, remove or replace elements from any position of the array, This methods takes three arguments.
// 1st argument -> Starting index
// 2nd argument -> count from the starting index
// 3rd argument -> elements to be added / replaced

// let fruits = ['kiwi','grapes','apple', 'banana', 'cherry', 'dragonfruits']

// removing elements usnig splice
// fruits.splice(2,2)

// fruits.splice(1,0,"Grapes", "Kewi")
// console.log(fruits)


// 6. Reverse() -> it reverse thw array

// fruits.reverse()
// console.log(fruits)

// 7. Sort() -> it shorts thw array in ascending order

// let str = "G"
// let str1 = "a"

// console.log(str.charCodeAt(0))
// console.log(str1.charCodeAt(0))

// fruits.sort().reverse()
// fruits.reverse()
// console.log(fruits)

// let number = [1324,345,675,90,45,1,50]
// number.sort()
// console.log(number)

// While sorting this numbers array the output is not as we expected.

// to solve this issue .sort() method takes a callback function (specially called compare function) as its argument.

// let output = number.sort((a,b)=>b-a)
// console.log(number)

// negative -> a should be placed before b
// positive -> a should be placed after b
// zero -> no changes


// let fruits = ['kiwi','grapes','apple', 'banana', 'cherry', 'dragonfruits']

// console.log(fruits.sort((a,b)=>a.localeCompare(b)))

// create a function that takes an array and returns it elements from last to first.

// let food = ['sanip', 'ghimire', 'hello']

// function foods(food){
    //     console.log(food.sort((a,b)=>b-a))
    // }
    // foods(food);
    
    
    // Create a function that takes an array and return last element of that array
    
    // let array = ['parijat', 'saypatri', 'siris', 'godawari']
    
    // function flowe(flow){
//     length = length
// }

// let flow = array => {
    // return array[array.length - 1]
    // }
    // flow(array)
    // console.log(flow(array))
    
    // Method that does not changes the orginal array:
    
    // 1. .slice() -> This method is use to take a portion of an array. It doesn't mutates the orginal array rather it creates a shallow copy of it. It takes two arguments 
    // 1st arg -> starting index
    // 2nd arg -> end index (doesnot include the end index itself)
    
    // let fruits = ['kiwi','grapes','apple', 'banana', 'cherry', 'dragonfruits']
    // console.log(fruits.slice(3,5));
    // console.log(fruits)

// 2. .concat() -> this method  is used to merge two arrays. It does not change the original array but gives us a new array.

// let a = [1,2,3]
// let b = [1,2,3]

// console.log(a.concat(b))
// console.log(a)

// 3. spread operator (...) -> this operator is used to copy element of one array to the another array.

// let toys = ['ball', 'car','doll']
// let hobbies =  ['reading', 'watching movie', 'playing game']
// let arrayMadeUsingSpreadOperator = [...hobbies, ...toys]

// let arr = [0,1,[2,3,4]] 
// let x = [...arr, ...toys, 100, 200]

// console.log(x)

// Create a function takes array of numbers and returns the sum of theat number.

// let number =  [1,2,3,4,5];
// let sum =0;
// function add (number){
//     for(i=0; i<number.length;  i++) {
//         sum = sum + number[i]
//     }
//    return sum;
// }

// console.log(add(number))

// MAP -> This method is used to change the value of each element present in the array. This method doesn't mutates the orginal array. This methods returns a new array.
// This method has a call back function with three arguments and that callback function has three parameters.

// 1st -> element 
// 2nd -> index of that element 
// 3rd -> array itself


// Syntax: array.map(()=>{})
// Syntax: array.map(function(e,i,arr){})

// Example
// let nums = [1,2,3,4,5,6]
// let timesTwo = nums.map(e=>e*2)
// console.log(timesTwo);
// console.log(nums);


// function  timesTwo(n){
    
    // for(i=0;i<nums.length;i++){
    //    nums[i]=nums[i]*2;
    // }
    //  return nums
// }
// console.log(timesTwo(nums))

// let nums = [1,2,3,4,5,6]
// let timesTwo = nums.map((e,i)=>e*i)
// console.log(timesTwo);

// A company offered 15% increment in salary for its employees.
// let Salary2080 = [17000,25000,35000,50000,23000,455000,99990,29290]
// let salary2081 = Salary2080.map(e=>e*1.15)
// console.log(salary2081)

// let students = ['Sandip','Tara','Kushal','Yujan','Nisha', 'Rahul', 'Akash', 'Ankit', 'Shubham', 'Vedant', 'Priya']
// let roll = students.sort().map((students,i)=>`Roll No.:${i+1} ${students}`)
// console.log(roll)

// KTM temperature (deg celcius) this week has been

// let ktmTemperature = [17,10,3,5,23,10,12]
// (x*9/5)+32
// let  fahrenheit = ktmTemperature.map(ktmTemperature=>(ktmTemperature*9/5)+32)
// console.log(fahrenheit)


// Filter Method: This is an array method that is used to filter individual elements from an array. This method also returns a new array.

// Syntax :
// array.filter((element,index,arr)=>{return condition;});

// In the callback function of this method a condition is initialized and based on the condition that elements are added (filtered in the new array returned by this method.)

// If the condition is true element is added and if the condition is false the element won't be added.

// example

// let number = [10,4,38,4893,6,27,2,1,49,3,72];
// let oddNumber = number.filter((e) => e%2!==0)
// let evenIndex = number.filter((e,i)=> i%2===0)
// console.log(oddNumber)
// console.log(evenIndex)


// let salary = [17000, 18000, 20000, 25000, 30000, 45000, 55000, 50000, 90000, 93000, 95000, 14000, 13500, 12000, 10000]

// YOur task
// The government has defined the minimum salary as 17500, find out how many people from the survey are getting belor average salary.

// Example output : out of 10 people 3 are getting below average salary.

// let minSalary = salary.filter((e) => e<17500)
// console.log(`Out of ${salary.length} people ${minSalary.length} are getting below average salary`);

// Salary x id Y% less than minimun salary usinf filter

// let lessSalary = minSalary.map((e) => `Salary ${e} is ${100-(e/175)}% less than minimum salary`);
// console.log(`Salary ${minSalary} is ${lessSalary}% less than minimum salary`)
// console.log(lessSalary)

// let lessSalary = minSalary.map(e => `${e} is ${(100-(e/175)).toFixed(2)}% less than minimum salary`);
// console.log(lessSalary)


// Reduce Method -> Reduce is the method of that can returns any type of value. (Either primitive or non-primitive). It will reduce all element in an array into a single value.
// Unlike map and filter this method has two arguments.
// 1st -> callback function
// 2nd -> Initial value of accumulator.

// The callback function in this method has four parameters
// 1st -> accumulator
// 2nd -> current element
// 3rd -> index
// 4th -> array

// Exmaple -> summing all elements in the array.

// let number = [10,4,100,123];
// From Reduce method
// let sum = number.reduce((e,sum1) => e+sum1)
// console.log(sum)
// From for loop
// let sum2=0;
// for(i=0;i<number.length;i++){
    //     sum2=sum2+number[i];
    // }
    
    // console.log(sum2)
    
// let salary = [17000, 18000, 20000, 25000, 30000, 45000, 55000, 50000, 90000, 93000, 95000, 14000, 13500, 12000, 10000]
    // let avgSalary = salary.reduce((e,acc,arry)=>acc=e+acc)/salary.length
    // console.log(avgSalary)

// let minSalary = salary.reduce((acc,e)=>{ 
//     if(e<17500){
//         let percentage = 100-(e/175)
//         acc.push(`Salary ${e} is ${100-(percentage.toFixed(2))}% less than minimum salary`)
// }
// return acc;
// },[])
// let lessSalary = salary.reduce((e) => `Salary ${e} is ${100-(e/175)}% less than minimum salary`,Array);
// console.log(minSalary)
// console.log(lessSalary)

// Create a function that takes two parameter, word and letter respectively. The function should return the count letter present in the word.

// example output = letterCount ('apple','p') -> 'There are 2p's in the word apple

// Hint : Convert word into array

// By using split method.
// Syntax
// string.split(separator)

// example
// let str = "Hello World"
// let arrStr = str.split("")
// console.log(arrStr)

// 3.
// Array.from(str)
// console.log(Array.from(str))


// let word = "Sandip"
// let arrLetter = [...word]
// console.log(arrLetter)

// const letterCount = (word,letter) => {
//     let arrLetter = [...word]
//     let Numletter = arrLetter.reduce ((acc,e)=>{
//         if(e.toLowerCase()===letter.toLowerCase()){
//             acc++;
//         }
//         return acc;
//     },0)

    // return Numletter <= 1 ? `There is ${Numletter} ${letter} in the word ${word}` : `There are ${Numletter} ${letter}'s in the word ${word}` 
//     return `There ${Numletter===1 ? 'is':'are'} ${Numletter} ${letter}${Numletter!==1? `'s`:''} in the word ${word}`
// }

// console.log(letterCount('ApPple','p'))


// Array Destructuring:
// const arr = []
// It is a way to sequentially assign values from arrays to variables.

// Example

// let [a,b,c] = [1,2,3]
// console.log(b)

// Reset Parameter
// let [x,y,z, ...other] = [9,8,7,6,5,4,3,2,1]

