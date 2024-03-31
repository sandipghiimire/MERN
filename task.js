// coding challenge 
// here's an aaray having objects as its elements
// const data = [
//     {id:1, name:'Sandip'},
//     {id:2, name:'Ram'},
//     {id:3, name:'Shyam'},
//     {id:4, name:'Hari'}
// ]

// => WAP to create array of objects hhaving odd id.
// [{id:1, name :'Sandip'}, {id:3, name: 'Shyam'}]

// console.log(data.filter(e=>e.id%2!==0));

// const product = [
//     {id:1, productName:"Yellow Shirt", productPrice:900},
//     {id:2, productName:"Red Shirt", productPrice:1900},
//     {id:3, productName:"Blue Shirt", productPrice:600},
//     {id:4, productName:"Purple Shirt", productPrice:550},
//     {id:5, productName:"Black Shirt", productPrice:2300},
//     {id:6, productName:"Orange Shirt", productPrice:800},
//     {id:7, productName:"White Shirt", productPrice:750},
// ]

// WAP to create an array of objects having productPrice that ranges from 200 to 600

// console.log(product.filter(e=>e.productPrice>=200 && e.productPrice<=600))

// In the data array add one key value address : "Kathmandu" in each object element

// console.log(data.map(e=> {
//     return{...e,address:"Kathmandu"}
// }))

// console.log(data)


// Word = "MISSISSIPPI"

// {M: 1, I:4, S:4, P:2}
// Word = "ELEPHANT"
// {E:2,L:1,P:1,H:1,A:1,N:1,T:1}

// const word = "MISSISSIPPI"

// let countWord = [...word]
// const num1 = countWord.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr]=1;
//     }
//     return acc;
// },{})
// console.log(num1)

// let output = (word) => {
//     if(typeof(word) === String){
// let countWord = [...word]
// return countWord.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr]=1;
//     }
//     return acc;
// },{})
// }else{
//     return "Please enter the string"
// }
// }
// console.log(output(1234))

// const students = [
//     {id:1, name:'John', score:[90,80,77]},
//     {id:2, name:'Ram', score:[97,85,70]},
//     {id:3, name:'Sita', score:[90,90,77]},
//     {id:4, name:'Laxman', score:[71,70,69]},
//     {id:5, name:'Shyam', score:[70,80,77]},
// ]
//  let avg = students.reduce((acc,student)=>{
//    const average = student.score.reduce((acc,curr) => acc+curr)/student.score.length 
//    acc[student.name] = average
//    return acc;
//  },{})
//  console.log(avg);
// {john: 81.382892, Ram: 85.3783939, Sita: 83.789393, Laxman: 70.37384390}

let data = [
    {book:"Book1", author:"Author1"},
    {book:"Book2", author:"Author2"},
    {book:"Book3", author:"Author1"},
    {book:"Book4", author:"Author3"},
    {book:"Book5", author:"Author2"},
    {book:"Book6", author:"Author3"}
]

// {Author1:2, Author2: 2, Auther3: 2}
let countAuthor = data.reduce((acc,curr) => {
    // if(acc[curr.author]){
    //     acc[curr.author]++;
    // } else {
    //     acc[curr.author] = 1;
    // }  
    // return acc; 
    (acc[curr.author]++) || (acc[curr.author] = 1)
    return acc;
}, {})

console.log(countAuthor);

