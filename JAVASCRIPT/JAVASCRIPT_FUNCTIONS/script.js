// Syntax of function declaration

function sayHello() {
  console.log("Hello");
}

function greetings() {
  console.log("Good Morning");
}


// Show today's date

function showDate() {
  console.log(new Date());
}


// call the sayHello function 

sayHello();

// call the showDate function

showDate();

// call the greetings function 

greetings();




// Function expression 

const sayHi = function( ) {
  console.log("Hi");
}

sayHi();


// greetings function expression

const sayGoodMorning = function() {
  console.log("Good Morning");
}

sayGoodMorning();

// Determine if a fixed number is even or odd 

const checkEvenOrOdd = function(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOrOdd(10); // Even

checkEvenOrOdd(15); // Odd

// anonymous function 




// Immediately Invoked Function Expression (IIFE) 

(function() {
  console.log("Welcome to the world of JavaScript")
})()

// calculating the square of a number 
(
  function(num) {
    console.log(num * num);
  }
)(5) // 25

// concatenate two strings 

(
  function(str1, str2) {
    console.log(str1 + str2);
  }

)("Hello", "World") // HelloWorld

// Function with parameters and arguments

const greetings = function(name) { // name is a parameter
  console.log(`Hello ${name}`);
}


greetings("John"); // Hello John (argument)


// Function to add two numbers 

const result = function(num1, num2) {
  console.log(num1 + num2);
}

result(10, 20); // 30

result(90000,100000); // 190000


// Basic Default Parameters 
const greet1 = function(name = "John", age = 30) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

greet1(); // Hello John, you are 30 years old


greet1("Doe", 40); // Hello Doe, you are 40 years old
// Default Parameter with expression 

const multiply = function(num1, num2 = 10) {
  console.log(num1 * num2);
}

multiply(5); // 50


// return statement in a function 

const add = function(a,b) {
  const result = a + b;
  return result;
  console.log("This is the end of the function"); // This line will not be executed
}

const addResult = add(10, 20);  // 30

// Return statement with conditionals 

function isEven(num) {
  if(num%2===0) {
    return "It is an even number"
  } else {
    return "It is an odd number"
  }
}

console.log(isEven(10)); // It is an even number

// local variable in function 

function showLocalVariable() {
  const message = "Hello World";
  console.log(message);
}

console.log(message); // ReferenceError: message is not defined

// Variable in outer function 

function outerFunction() {
  const message = "Hello World";
  function innerFunction() {
    console.log(message);
  }
  innerFunction();
}

outerFunction(); // Hello World

// Arrow function 


const sayHello1 =() => {
  console.log("Hello");
}

sayHello1(); // Hello 
// Block Body Syntax 

const greet =(name) => {
  return `Hello ${name}`;
}

const greetFn = greet("John");

console.log(greetFn); // Hello John

// SIngle Parameter, No parentheses 



const square =(x) => x*x;

const squareFn = square(5);

console.log(squareFn); // 25


// No paramters

const random =() => Math.random();

console.log(random()); // 0.123456789

// Object Literal Return 

const getUser =() => {
  return {
    name:"Masynctech",
    age: 10
  }
}



console.log(getUser()); // {name: "Masynctech", age: 10}


// Let and Const 

// Hoisting 

function hostingIssue() {
  console.log(a) // undefined
  var a= 10
  console.log(a);
}

function hostingIssue1() {
  console.log(a) // ReferenceError: Cannot access 'a' before initialization
  let a= 10
  console.log(a);
}

function hostingIssue2() {
  console.log(a) // ReferenceError: Cannot access 'a' before initialization
  const a= 10
  console.log(a);
}

// Using Var 

for(var i=0; i<5; i++) {
  console.log(i);
}  
console.log(i); // 5

// Using let 

for(let i=0; i<5; i++) {

  console.log(i);
}

console.log(i); // ReferenceError: i is not defined

// Immutability 

// Using var and let 

var x = 10;

x=20;

console.log(x); // 20

let y = 10;

y=20;

console.log(y); // 20

const z = 10;

z=20;

console.log(z); // TypeError: Assignment to constant variable.



// Destrcuturing in JavaScript ES6 

const numbers =[1,2,3,4,5];

const [first, second, third, fourth, fifth] = numbers;

console.log(first); // 1

console.log(second); // 2

console.log(third); // 3

console.log(fourth); // 4

console.log(fifth); // 5

// Swap variables

let a = 1

let b=2

[a,b] = [b,a]

console.log(a); // 2

console.log(b); // 1

const user ={name:"Masynctech", age: 10, email:"support@masynctech.com"};

console.log(user.name); // Masynctech


const {name, age, email} = user;

console.log(name); // Masynctech

console.log(age); // 10

console.log(email); //

// Destructuring in fucntion paramters 


function greet(userObj ) {
console.log(`Hello ${userObj.name}, you are ${userObj.age} years old`);
}


const myUser = {name:"John", age: 30};

greet(myUser); // Hello John, you are 30 years old

// Nested Destructuring 

const userData ={
id:1,
info:{
  name1:"Masynctech",
  age1: 10
}

}

console.log(userData.info.name); // Masynctech

const {info:{name1, age1}} = userData;
