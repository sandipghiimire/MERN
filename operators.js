//operators :- They are pre-defined signs and symbol that are designed to perform designated operations on operands.
//1. Arithmetic Operators
    // let num1 = 5;
    // let num2 = 5;
    //a. Addition Operator(+)
    // console.log(num1+num2);
    // console.log("The addition of "+ num1 + " and " + num2 + " is " +(num1+num2));
    //b. Subtraction Operator(-)
    // console.log(num1-num2);
    //c. Multiplication Operator(*)
    // console.log(num1*num2);
    //d. Division Operator(/)
    // console.log(num1/num2);
    //e. Modulo Operator(%)
    // console.log(num1%num2);
    //f. Exponential Operator(**)
    // console.log(num1**num2);
    //g. Concat Operator(+)
    // console.log("Sandip " + "Ghimire");
    
    //Type Coercion vs Type Conversion

//2. Comparison (Relational) Operators
//It is used to compair two operands, It returns true or false based on the comparison.
//a. greater than (>)
// console.log(10>5);
// console.log(5>5);
// console.log(1>5);
//b. less than (<)
// console.log(10<5);
// console.log(5<5);
// console.log(10<5);
//c. greater than (>=)
//console.log(5>=10);
//c. less than than (<=)
//console.log(5<=10);
//e. loose equals to (==)
//console.log(6=="7");
//f. strict equals to (===)
//g. not equals to (!=)

//3. Assignment Operators

//4. Logical Operators
//a. && -> logical AND : Its combains two or more booleans values and expression and returns true if all of them are true and false if at least one of them are false.
//console.log(9>=10 && 5>=5 && true && 3>10);
//b. || -> logical OR : it combains two or more boolean values and expression and returns true if at least one of them are true and false if all of them are false.

//c. ! -> logical NOT : it is a unary logical operator that inverts the boolean value or expression.

//5. Increment and Decrement Operators
// let age = 20;
// let gender = "F";
// if(age>=18 && gender === "F"){
//     console.log("you are elligible for enter the club & to drink")
// }

// else{
//     console.log("Sorry we can't do anythings ")
// }

// let age = 17
// let isOwner = false
// let isDon = false

// if(age >=18 || isOwner || isDon){
//     console.log('You can enter the club')
// }

// else{
//     console.log("You cannot enter the Club");
// }



//Truthy vs Falsy
// There are 7 falsy values in JS, they are 0, -0, 0n, false, undefined, null, NaN, "".
// Expect these values all the values in JS are truthy values.

// if (0){
//     console.log("The value is Truthy")
// }
// else {
//     console.log('The value is Falsy')
// }

//Short Circuiting using Logical Operator : It is the practice to write code to get required result based on bahivor show by logical operators.

//Using AND Operator :
// let age1 = 19;
// if(age1>=18){
//     console.log("Go to vote on Mangsir 29") 
// }
// else{
     //do Nothing()
// }
// age1 >=18 && console.log("Goto Vote on Mangsir 29")

//Using OR Operator:
// let firstName = "Sandip"
// let lastName = "Ghimire"
// let userName

//displaying username on screen
// if(userName){
//     document.write(`Welcome ${userName}`)
// }
// else{
//     document.write(`Welcome ${firstName} ${lastName} ${Date.now()}`)
// }

// userName = userName || `${firstName}${lastName} ${Date.now()}`
// document.write(`Welcome ${userName}`)

// 5. Special Operators

// let collegeOpen = 11;
// let weekend = true;
// let holiday = true;

// if(collegeOpen<=10 && collegeOpen>=17 && holiday && weekend){
//     console.log("College is open");
// }
// else {
//     console.log("College is off");
// }


// 5. Special Operator
// a. turnary operator : It is a short hand operator used instead of If-Else statement.
//Syntax:
//Conddition ? run if condition is true : runs if the conditon is false.
//Example
// let age = 18
// age >=18 ? console.log("You are eligible to vote") : console.log("You cannot vote")
//EXample
// let message = age>=18 ? "YOu can enter the club" : "You cannot enter in the club"

//Nested Ternary operator 
//Syntax : Conditon ? conditon?"true stTEMENT":"false statement":"statement id initial condition is false"

// let message1 = (age>=18) ? (isFemale) ? "You can get free drink" : "YOu can enter the club" : "You cannot enter in the club"


//b. Nullish coalescing Operator : if LHS value or expression is null or undefined, the RHS will be executed.

// let username = 0;
// username?? console.log("Please enter your username.")

//c.unary operator : Those operator  whish can carry out operations on single operands are called unary operators.
//i. Increment Operator (++) : Increase the value by 1
//ii. Decrement Operator (--) : Decrease the value by 1
//iii. Unary +
let x = -5
console.log(+x)
//iv. Unary - or Nagative Operator
console.log(-x)
//v. Types of Operator
console.log(typeof NaN)