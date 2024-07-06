// For loops

// Basic for loop to print numbers

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Looping through the array to print its elements
const fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using the break keyword to exit the loop

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log(i); // 5

// Using continue to skip an iteration

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

// ForEach Loop

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index, array) {
  console.log(number, index);
});

// Using forEach to sum the elements of an array

let sum = 0;

numbers.forEach(function (number) {
  sum += number;
});

console.log(sum);

const square = [];

numbers.forEach(function (number) {
  square.push(number * number);
});

console.log(square);

// The map( ) method creates a new array with the results of calling a provided function on every element in the calling array.

// Mapping map() method

const numbers1 = [1, 2, 3, 4, 5];

const newNUmArr = numbers1.map(function (number) {
  return number * number;
});

console.log(newNUmArr); // [1, 4, 9, 16, 25]

// Using map to convert an array of strings to uppercase

const words = ["apple", "banana", "mango", "orange", "papaya"];

const upperCaseWords = words.map(function (word) {
  return word.toUpperCase();
});

console.log(upperCaseWords); // ['APPLE', 'BANANA', 'MANGO', 'ORANGE', 'PAPAYA']

// Using filter to filter out elements from an array

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter out even numbers

const evenNumbers = numbers2.filter(function (number) {
  return number % 2 === 0;
});

const gender = ["male", "female"];

const maleArr = gender.filter(function (gender) {
  return gender === "male";
});

console.log(maleArr); //   ["male"]

// Using filter to remove falsy values from an array

const mixedArr2 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  0,
  "",
  undefined,
  null,
  NaN,
  false,
];

const filteredArr = mixedArr2.filter(Boolean);

console.log(filteredArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
