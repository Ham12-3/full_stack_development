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

