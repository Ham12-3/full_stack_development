// --------------------------

// SINGLE, DOUBLE AND CONSTRUCTOR

const singleQuoteString = "This is a string usign dowuble quotes";

// String constructor

const stringConstructor = new String("This is a string using the constructor");

// TEMPLATE LITERAL

// Basic Usage

const greeting = `hello world`;

console.log(greeting);

// String interpolation

const username = "John Doe";

const welcomeMsg = `Hello , ${username}! Welcome to our website`;

// multiline string

const poem = `
    Roses are red,
    Violets are blue,
    Sugar is sweet,
    And so are you.
    `;
console.log(poem);

// Expression evaluation

const price = 10;

const tax = 0.05;

const total = `The total price is $${price + price * tax}`;

// Escaping backticks

const stringwithBackTick = `Hes's a backtick: \``;

console.log(stringwithBackTick);

// Using backslashes before escaping characters

const quote = 'He said, "Hello"';
const sameQuote = 'He said, "Hello"';
const backslashQuote = 'He said, "Hello"';

// Newline and tabs

const multiLine = "This is a string\nwith a newline";

// Escaping backslashes

const filePath = "C:\\path\\to\\file";

// Using the template literal syntax, you can create strings that span multiple lines and include variables and expressions. This can make your code more readable and maintainable, especially when working with complex strings.

const anotherQuote = ` He said, "Hello"`;
console.log(anotherQuote);

// Unicode Character

const heart = "I \u2764 JavaScript";

// Escape sequence for a dollar sign

const metaString = `The syntax for variable is \${variable}`;

console.log(metaString);

// ---------------

// String concatenation

// Using the + operator

const firstName = "John";

const lastName = "Doe";

const fullName = firstName + " " + lastName;

// Using the concat() method

const str1 = "Hello";
const str2 = "World";

const conmbinedString = str1.concat(" ", str2);
console.log(conmbinedString);

// Using a template literal

const fruit = "apple";

const color = "red";

const sentence = `The ${fruit} is ${color}`;

// TOLOWER AND TOUPPER CASE

const localCaseStr = "Hello World";

// toLowerCase();
const result = localCaseStr.toLowerCase();

// toUpperCase();
const result2 = localCaseStr.toUpperCase();

// Mixing both methods

const mixStr = "Hello World";

const result3 = mixStr.toLowerCase().toUpperCase();

// case -insensitive comparison

const string1 = "Hello World";

const string2 = "hello world";

const result4 = string1.toLowerCase() === string2.toLowerCase();

if (result4) {
  console.log("The strings are equal");
} else {
  console.log("The strings are not equal");
}

// String Length

const myStr = "Hello World";

const strLength = myStr.length;

console.log(strLength);

const emptyString = "";

const emptyStrLength = emptyString.length;

console.log(emptyStrLength);

// String validation

const username1 = "JohnDoe";

// String slice

// Basic use

const greeting1 = "Hello World";

const extractedWord = greeting1.slice(7, 12);

// Ommitting the end index

const text = "Hello World";

const result5 = text.slice(6);

// Using negative indices

const phrase = "Hello World";

const endingText = phrase.slice(-6);
console.log(endingText);

// Slicing between negative indices

const sentence2 = "Hello World";

const reult = sentence2.slice(-5, -1);

// STRUNG SPLIT

// Simple Split

const mysentence = "Hello World";

const words = mysentence.split(" ");

console.log(words);

// Splitting by comma

const myString = "apple, banana, orange";

const fruits = myString.split(",");

console.log(fruits);

const myText = "apple, banana, orange";

const limitedFruits = myText.split(",", 2);

// Split by multiple characters

const complexText = "apple, banana, orange;pear";

const complexFruits = complexText.split(/,|;/);

// Split into charachters

const word = "Emmanuel";

const letters = word.split("");

// Index

const sentences = "Hello World";

const index = sentences.indexOf("World");

// STRING TRIM

// Basic Usage

// Trimming user input

const userInput = "  emma@gmail.com   ";

const emailTrimmed = userInput.trim();

// Removing Line Breaks

const stringWithBreaks = "\n\t Hello World \n\t";

const cleanString = stringWithBreaks.trim();

// String replacement

const originalText = "This is an old text";

const newText = originalText.replace("old", "new");

// Replacing all occurences

const repetitiveText = "Old text, old text, old text";

const newText2 = repetitiveText.replace(/old/g, "new");

// lastIndexOf();

// Basic Usage

const text1 = "apple, banana, apple, banana";

const lastIndex = text1.lastIndexOf("banana");

const lastIndex2 = text1.lastIndexOf("banana", 15);

// String includes( ) method

// Basic Usage

const myText2 = "I have an apple ";

const hasApple = myText2.includes(" apple");

// Case-insensitive search

const myText3 = "I have an apple";

const hasApple2 = myText3.toLowerCase().includes("apple");

// Using a position

const myText4 = "I have an apple";

const hasApple3 = myText4.includes("apple", 9);
// String Conversion

// converting a number to a string

const num = 42;

console.log(typeof num);

const strNum = num.toString();

console.log(typeof strNum);

// COnverting a boolean to a string

const boolVall = true;
const strBool = boolVall.toString();

console.log(typeof strBool);

// Convert an array to a string

const arr = [1, 2, 3];

console.log(typeof arr);

const strArr = arr.toString();

console.log(typeof strArr);

const obj = {
  name: "John Doe",
  age: 30,
};

console.log(typeof obj);

const strObj = JSON.stringify(obj);

console.log(typeof strObj);

// converting null and undefined to string

const nullValue = null;
const strNull = String(nullValue);

console.log(typeof strNull);

const undefinedValue = undefined;

const strUndefined = String(undefinedValue);

console.log(typeof strUndefined);

// Converting string to numbers

// COnverting pixel value to umber with a parseInt( ) function

const pixelValue = "42px";

console.log(typeof pixelValue);

const numValue = parseInt(pixelValue);

console.log(typeof numValue);

// converting dimension string to number

const dimensionStr = "42.5em";

console.log(typeof dimensionStr);

const dimensionNum = parseFloat(dimensionStr);

console.log(typeof dimensionNum);

// COnverting age input to number using number( ) function

const ageInput = "30";

const convertedAge = Number(ageInput);

// Quick Conversion using the unary operator

const scoreStr = "42";

const scoreNum = +scoreStr;

// Converting boolean to number

const boolValue = true;

const numBool = +boolValue;

// Converting String to Boolean

const usernameInput = "Thomas";

const convertedVal = Boolean(usernameInput);

console.log("====================================");
console.log(convertedVal);
console.log("====================================");

// Using Boolean() with empty string

const emptyField = "";

const emptyFieldBool = Boolean(emptyField);

console.log(emptyFieldBool);

console.log("====================================");

// Using Double Negation

const emailInput = "emma@gmail.com";

const convertedVal1 = !!emailInput;
