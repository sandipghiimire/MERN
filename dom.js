// DOM - DOM stands for Document Object Model, it is a programming interface of HTML and XML. DOM represents the webpage so that the script can change the style, structure, content etc. The DOM represents each elements, text content as well as comments as nodes.

// The DOM represents the structure of a webpage in a hierarchical (tree-like) structure/model where each elements, attributes, text content in the HTML document is reperesnted as a 'Node'.

// Accessing the nodes using diffferent DOM Methods:

// Accessing individual node
// 1. .getElenemtbyId()

// const heading = document.getElementById("heading1")
// console.log(heading)

// 2. .querySelector() - this method can also access the individual node. The argument passed in this is similar to CSS selectors as strings.   

// const PARA = document.querySelector(".para")
// console.log(PARA)

// Methods accessing multiple nodes

// 1. .getElementsByTagName()

// const paragraph = document.getElementsByTagName('p')
// console.log(paragraph)

// 2. .getElementsByClassName()

// const ohb9uh = document.getElementsByClassName('p')
// console.log(ohb9uh)

// 3. .querySelectorAll()
// const headings = document.querySelectorAll("h1")
// console.log(headings)

// Accessing the text node

// 1. .innerText

// console.log(heading.innerText)

// 2. .textContent

// console.log(heading.textContent)

// 3. .innerHTML

// const div1 = document.getElementById("div1")
// console.log(div1.innerHTML)
// console.log(heading.innerHTML)


// style in DOM

heading1.style.backgroundColor = "aqua"
heading1.style.textTransform = "lowercase"


// adding, removing and toggling the classNames

heading1.classList.remove = "primary-color"
heading2.classList.add = "primary-color"

// changing the textContent
heading1.textContent = "Hello Sandip"
heading2.innerText = "Hello Sandip"


// creating HTML element using DOM methods 

const headingMadeUsingDOM = document.createElement("h1")
headingMadeUsingDOM.textContent = "I was creating and Learning Javascript"
const div2 = document.getElementById("div2")
div2.appendChild(headingMadeUsingDOM)

// changing Attributes using DOM

const input = document.querySelector(".Example")
input.placeholder = "Enter Password"
input.type = "password"


// Event Handling

// There are two ways for it
// 1. inLine event handlers
const func1 = () => console.log("You are clicked")
// 2. .addEventListener() method
heading2.addEventListener('click', ()=>console.log("You've clicked me"))