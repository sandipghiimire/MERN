

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;


let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI>johnBMI){
  console.log("Mark's BMI is higher than John's!")
} else {
  console.log("John's BMI is higher than Mark's!")
};