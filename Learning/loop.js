// let i = 1;
// while(i<=20) {
//     let isEven = i%2==0;
//     console.log(`${i} is ${isEven? "Even":"Odd"} because it ${isEven ? "is" : "is not"} divisible by two`);
//     i++
// }

let i = 1;
let j=0;
while(i<=100){
    j=i+j;
    i++;
}
console.log(`The sum is ${j}`);