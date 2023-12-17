// Task 1: Store Mark's and John's mass and height in variables
let markMass = 78; // Mark's mass in kg
let markHeight = 1.69; // Mark's height in meters

let johnMass = 92; // John's mass in kg
let johnHeight = 1.95; // John's height in meters

// Task 2: Calculate both their BMIs using the formula
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

// Task 3: Determine and print the output using a template literal and the ternary operator
let output = markBMI > johnBMI
  ? `Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`
  : `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`;

// Output the result
console.log(output);
