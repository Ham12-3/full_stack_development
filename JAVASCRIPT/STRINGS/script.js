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
