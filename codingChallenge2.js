
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;


let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);


let output = markBMI > johnBMI
  ? `Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`
  : `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`;

console.log(output);
