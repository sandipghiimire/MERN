/*Datatype Refers to what kind/type of value a veriable can hold.
Since js is dynamically programming language tha type of value is hold by a veriable.(eg x=2, x=nepal, x="nepal")
In javascript, there are two major classification of datatypes:-
    1. Primitive : These data type hold a value directly within their variable and do not need to be referenced by other object. 
        i. Number
        eg, let num1 = 10;
            let num2 = 38.976;

        ii. String
        eg, let firstName = "Sandip"
            let lastName = 'Ghimire';
            let firstLetter = `a`;

        iii. Boolean
        eg, let isMarried = true;
            let hasChild = false;

        iv. Undefined : If a veriable is declared and value is not assigned at that tile it hold undefined datatypes.
        eg, let lastName;
            let nationality = undefined;

        v. Null : 
        eg let age = null;

        vi. Symbol():
        eg let id = Symbol(1);

        vii. BigInt
        let largeNum = 10n;

    2. Non-Primitive (Referenced Datatype) : These data type do not hold a value directly within their variable and need to be referenced by another object.
        i. Array 
        eg, let x = [1,2,3,4,5]

        ii. Object
        eg, let obj1 = {
            a:1,
            b:2
        }

*/

let num1 = 10;
let firstName = "Sandip"            
let num2 = 38.976;
let hasChild = false;
console.log(typeof hasChild);