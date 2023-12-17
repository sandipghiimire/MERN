// Task 1: Store Mark's and John's mass and height in variables
let markMass = 95; // Mark's mass in kg
let markHeight = 1.88; // Mark's height in meters

let johnMass = 85; // John's mass in kg
let johnHeight = 1.76; // John's height in meters

// Task 2: Calculate both their BMIs using the formula
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

// Task 3: Create a Boolean variable 'markHigherBMI'
let markHigherBMI = markBMI > johnBMI;

// Output the results
console.log("Mark's BMI:", markBMI);
console.log("John's BMI:", johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
