//Function: a function is basically a block of code that can execute a specific task. The value of action perform by a can be achived when we call a invoke a function. A function consist of a function name (to write function name we have to follow the rules of writing identifiers). A function contains a paranthesis where parameters can be contained.

// There are three ways to declare function in javaScript, They are :- 
// 1. Function Declaration
//Syntax
    // function funName(){
    //    code to be executed
    // }
// eg:




function greeting(){
    console.log("Hello World!")
}
greeting()

//There are two major types of functions
// 1. Unparameterized Function
// 2. parameterized Function

function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Ram")
sayHello("Sita")
sayHello("Rita")


and(2,5) //This is valid because function with function declaration are hoisted.
function and(num1, num2){
    console.log(num1+num2)
}

//Return Keyword
// const sum = and(5,10)
console.log(and(5,10)) //undefined

function calAge(birthYear){
    let thisYear = 2023
    let age = thisYear - birthYear
    return age
    let outstr = `You are ${age} years old.`
    console.log(outstr)
}
const myAge = calAge(2002)

function returnEg(){
    return{a: 1, b: 2}
}

function canVote(age){
    let message = age >= 18 ? `You are eligible to vote` : `You are not eligible to vote`
    console.log(message)
    return message
    // if (age>=18){
    //     message =   `YOu are eligible to vote`
    //     console.log(message)
    //     return message
    // } else {
    //     message =   `YOu are not eligible to vote`
    //     console.log(message)
    //     return message
    // }
    
}

let output1 = canVote(18)

//Create   a function that return if you are/were or will be 16 years old.

function ageAdd(age2){

    // if(age2 > 16){
    //     return `You were 16 ${age2 - 16} years ago`
    // }

    // else if ( age2 <16){
    //     return `You will be 16 after ${16 - age2} years`
    // }

    // else {
    //     return `you are sweet 16`
    // }
    

    let message2 = age2 >= 16 ? age2 > 16 ? `You were 16 ${age2 - 16} years ago` : `you are sweet 16` : `You will be 16 after ${16 - age2} years` 
    console.log(message2)
    return message2
}

let output2 = ageAdd(16)


// let output2 = canVote(15)


// 2. Function Expression
// 3. arrow Function(ES6+)


//Coding Challenge 2,3
//Office open or Close

function whenwillYouBe16(age) {
    if (age>16){
        return `You were 16 ${age -16} years ago`
    }
    else if (age <16){
        return `Your will be 16 after ${16-age} years`
    } else {
        return `Your are 16`
    }
}

let output3 = whenwillYouBe16(13)

//switch case grade conversion