// There are three types of legacy loops in all programming languages, they are:
// 1. For Loop 
// It is the type of lop that is used when the number of iterations is known in advance. 
// syntax
// for(initialization; condition; increment or Decrement){
// code to be executed till the condition is true;
// }
// example
// Q. WAP to print "Hello world " 10 times

// for (let i = 1; i <= 20; i++) {
   // if(i%2==0){
   //    console.log(`${i}`);
   // }

   // i % 2 == 0 ? console.log(`${i}`):""
   // i%2==0 && console.log(i);// for even number
   // i%2==1 && console.log(i);// for odd number

// }

// Q. WAP to print
// 1 is odd because it is not divisible by 2
// 2 is even because it is divisible by 2
// .
// .
// .
// .
// 20 is even because it is divisible by 2
// for (let i = 1; i <= 20; i++) {
   // let message = i % 2 == 0 ? `${i} is even because it is divisible by 2` : `${i} is odd number because it is not divisible by 2`;
   // console.log(message);

//    const isEven = i % 2 === 0
//    console.log(`${i} is ${isEven ? ' even ' : ' odd '} because it ${isEven ? ' is ' : ' not '}divisible by 2`)
// }

// Q. Create function that takes a number and gives its multiplication table upto 10
// const multiplicationTable = tableOf => {
  
//    for (let i = 1; i <= 10; i++) {
//       console.log(`${tableOf} x ${i} = ${tableOf*i}`)
//    }
// }
// multiplicationTable(5, 2);
// const multiplicationTable = (tableOf, upto) => {
  
//    for (let i = 1; i <= upto; i++) {
//       console.log(`${tableOf} x ${i} = ${tableOf*i}`)
//    }
// }
// multiplicationTable(5, 20);






// 2. While Loop
// This loop runs as long as a specified condition remains true. The loop does not know how many times it will run before completing its task
// 3. Do-While Loop




// nasted for loop to make pattern
// *
// * *
// * * *
// * * * *
// * * * * *

// for(let i=1; i<=5; i++){
//    let string = ""
//    for(let j=1; j<=i; j++){
//       string += " *"
      
//    }
//    console.log(string)
//    // console.log("\n")
// }

// nasted for loop to make pattern
// * * * * *
// * * * *
// * * *
// * *
// *
// for(let i=5; i>=1; i--){
//     let string = ""
//     for(let j=1; j<=i; j++){
//        string += " *"
       
//     }
//     console.log(string)
    // console.log("\n")
//  }

//  2. While loop : It is the type of loop that is used when the number of iterations are unknown beforehand
// Syntax
// while(condition) {
    // Code to be exicuted while the condition is true
// }

// let i = 1
// while (i<= 20){
//     i%2!==0 && console.log(i)
//     i++
// }

// let i = 1

// while (i<=20){
//     const isEven = i % 2 === 0
//    console.log(`${i} is ${isEven ? ' even ' : ' odd '} because it ${isEven ? ' is ' : ' not '}divisible by 2`)
//    i++
// }

// Infinite while loop:

// let i = 1
// while (i<=20)
// {
//     console.log(i)
// }



// 3. Do while loop