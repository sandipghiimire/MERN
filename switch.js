//SWITCH CASE 
// the switch statement is used to perform different action based on the value of a variable.

//syntax
//Switch (value){
    //case value1:
    //statement to be exicuted if value1
    //break

    //case value2:
    //statement to be exicuted value2
    //break
    // .
    // .
    // .
    // case valueN:
    // statement to be executed if no match found for any cases above
// }

//Example

// let currentLight = "GREEN"

// switch (currentLight){
//     case 'GREEN':
//         console.log(`GO`)
//         break
//     case 'ORANGE':
//         console.log(`WAIT`)
//         break
//     case 'RED':
//         console.log(`STOP`)
//         break
//     default:
//         console.log(`INVILIDE COLOR`)
// }


let totalMark = 500
let obtainMark = 900
let percentage = (obtainMark/totalMark)*100

switch(true){
    case percentage>100:
        console.log(`Incorrect Marks Entry`)
        break
    case percentage>=90 && percentage<=100:
        console.log(`A+`)
        break
    case percentage>=80 && percentage<=89:
        console.log(`A`)
        break
    case percentage>=70 && percentage<=79:
        console.log(`B+`)
        break
    case percentage>=60 && percentage<=69:
        console.log(`B`)
        break
    case percentage>=50 && percentage<=59:
        console.log(`C+`)
        break
    case percentage>=40 && percentage<=49:
        console.log(`C`)
        break
    default:
        console.log(`Fail`)
}