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

const greetings = function(name) {
  console.log(`Hello ${name}`);
}

