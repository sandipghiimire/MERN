// Object :- It is an important non primitive datatype in Javascript. Object are special data strucutre that can hold values in well ordered manner. It can as well hold other complex entities. Object hold data in key - Value pair.

// Syntax : VeriableType identifier = {key:value, key2:value2,....,keyN:ValueN}

// example Object
// const Person = {
//     firstName: "Sandip",
//     lastName: "Ghimire",
//     gender: "Male",
//     address: {
//         temporary:{
//             street:"Anamanagar",
//             district:"Kathmandu",
//             province:"Bagmati",
//             country:"Nepal"
//         },
//         permanent:{
//             street:"Phedaap",
//             district:"Tehrathum",
//             province:"Koshi",
//             country:"Nepal"            
//         }
//     },
//     isMarried: false,
//     birthYear: 2002,
//     age: (currentYear)=>currentYear-Person.birthYear
// }

// console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender==='Male'? 'he':'she'} is ${Person.isMarried?'':'not'} married. ${Person.address.temporary.district}`)
// here, firstName is property and age is method.


// Accessing values from an object:
// There are two ways to access values from an object.
// 1. Dot Notation
// console.log(Person.firstName) // "Sandip"

// 2. Bracket Notation
// console.log(Person['lastName']) // "Ghimire"

// const Nepal = {
//     common: "Nepal",
//     official: "Federal Democratic Republic of Nepal",
//     nativeName: {
//         nep: {
//             official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
//             common: "नेपाल"
//         }
//     },
//     startOfWeek: "sunday",
//     capitalInfo: {
//         latlng: [
//             27.72,
//             85.32
//         ]
//     }

// }

// console.log(`The latitude of ${Nepal.nativeName.nep.official} is ${Nepal.capitalInfo.latlng[0]} and the longitude is ${Nepal.capitalInfo.latlng[1]}`)

// const car ={
//     tesla : {
//         tire : "4 tires",
//         brake : 'ABS brake',
//         country: 'Nepal'
//     },
//     fuleTank :"No fule tank",
//     byd:{
//         fule : 'electric',
//         range: '250km',
//         country:'china',
//     }

// }
// car.tesla.brake="Ram" // changing values
// car.byd.brand = "Byd" // adding values
// console.log(`The tesla has different features 1. ${car['tesla']['tire']} 2. ${car['tesla']['brake']} ${car.byd.brand}`)

// nullish Coelshing Assigment: It helps 

// 1. Factory Function

// const Product = (productName, productPrice, productDescription, COUNTiNsTOCK, paymentBool) => {
//     return {
//         product_name : productName,
//         product_price: productPrice,
//         product_desc: productDescription,
//         count_in_stock: COUNTiNsTOCK,
//         payment_message:()=>paymentBool ? console.log("Payment has been received"): console.log("Please make a payment")
//     }
// }
// const jacket = Product('Adidas Jacket', 7800, 'This is very cool jacket', 50,true)

// console.log(jacket)
// jacket.payment_message()

// 2.Constructor Function

// function AddProduct(productName, productPrice, productDescription, COUNTiNsTOCK, paymentBool){
//         this.product_name = productName,
//         this.product_price = productPrice,
//         this.product_desc = productDescription,
//         this.count_in_stock = COUNTiNsTOCK,
//         this.payment_message = ()=>paymentBool ? console.log("Payment has been received"): console.log("Please make a payment")
// }
// const Shirt = Product('Adidas Jacket', 7800, 'This is very cool jacket', 500,false)

// console.log(Shirt)

// Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
// this object should also have method for fund deposit, fund withdrawal and fund Check.

// Incase of fund deposit:
// Step: add amount that has been deposited with the current balance and show message

// Incase of fund withdrawal:
// Step1: Check if there's sufficient balance in the account
// Step2: If there's sufficient balance then deduct amount from currentBalance and show message.
// If there's no sufficient balance just show the message

// In case of fund check
// Step: Show the current balance

// const Bank = (firstName, 
//             lastName , accountNo, currentBalance) => {
//     return {
//         first_name : firstName,
//         last_name: lastName,
//         account_No:accountNo,
//         current_balance: currentBalance,
//         fundDeposit : (depositAmount) => {
//             console.log(`Your account ${account_No} is cradited with ${depositAmount}. Your new balance is ${current_balance+depositAmount}`)
//         },
//         fundWithdrawal : (withdrawAmount) => {
//             console.log(`Your account ${accountNo} is debited with ${withdrawAmount}. Your new balance is ${currentBalance-withdrawAmount}`)
//         }
// fundCheck: (totalAmount) => {
//     console.log(`Your account ${accountNo} has a total amount of ${}`)
// }
//     }
// }
// const person = Bank("Sandip", "Ghimire",13456756,1)
// fundDeposit(2000)
// fundWithdrawal(1000)


// function bankAccount(firstName, lastName, accountNo, currentBalance) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.accountNo = accountNo;
//     this.currentBalance = currentBalance;
//     this.transaction = []

//     this.fundDeposit = (depositAmount) => {
//         newBalance = depositAmount+currentBalance
//         console.log(`Your account ${accountNo} has been credited with ${depositAmount}. Your new balance is ${newBalance}`)
//         this.transaction.push({Type: "Deposit", Amount: depositAmount, Date : Date.now()})
//     }

//     this.withdrawAccount = (withdrawAmount) => {
//         withdrawAmount>newBalance ? console.log("You have insufficient balance in your account") : console.log(`Your account has been debited ${withdrawAmount} by ${firstName}. Your new balance is ${newBalance-withdrawAmount}`)
//         this.transaction.push({Type: "Withdraw", Amount: withdrawAmount, Date : Date.now()})
//     }

//     this.fundCheck = () => {
//         console.log(`Dear ${firstName} ${lastName}, Your total balance is ${newBalance}`)
//     }

//     this.depositsCheck = () =>
//     {
//         return this.transaction.filter(e=>{
//             if(e.Type==='Deposit')
//             {
//                 return e
//             }
//         })
//     }

//     this.withdrawalCheck = () =>
//     {
//         return this.transaction.filter(e=>{
//             if(e.Type==='Withdraw')
//             {
//                 return e
//             }
//         })
//     }
// }
// const user = new bankAccount('Rahul', 'Shrestha', 99293898, 9000)
// user.fundDeposit(1000)
// user.withdrawAccount(10000)
// user.fundCheck()
// console.log(user)
// console.log(user.depositsCheck())
// console.log(user.withdrawalCheck())