// JavaScript Object
// JavaScript Object is a standalone entity, with properties and type.
// JavaScript Object is a collection of key-value pairs.
// JavaScript Object is a reference data type.

// Creating an Object

// Define an object to represent a book in a bookstore

const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 248,
  available: true,
  pages: 163,
};

console.log(book); // { title: 'The Alchemist', author: 'Paulo Coelho', price: 248, available: true, pages: 163 }

// Accessing Object Properties
const bookTitle = book.title;

console.log(bookTitle); // The Alchemist

// Accessing Object properties using bracket notation

const bookTitle1 = book["title"];

console.log(bookTitle1); // The Alchemist

// Properties with special characters

const person = {
  "first-name": "John",
  "last-name": "Doe",
  age: 25,
};

console.log(person["first-name"]); // John

// Using expressions as property names

const task = {
  [1 + 2]: "Three",
};

console.log(task[3]); // Three

// Adding new properties to an object

const userProfile = {
  username: "johnDoe",
  email: "johndoes@gmail.com",
  portfollio: {
    work1: "Web Developer",
    work2: "Software Developer",
  },
};

// Add role property

userProfile.role = "admin";

console.log(userProfile); // { username: 'johnDoe', email: 'johndoes@gmail.com', role: 'admin' }

book["published-year"] = 1988;

console.log(book); // { title: 'The Alchemist', author: 'Paulo Coelho', price: 248, available: true, pages: 163, 'published-year': 1988 }
