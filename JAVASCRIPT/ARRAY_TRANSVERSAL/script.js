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

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Using reduce to sum up the elements of an array

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum1 = numbers3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum1); // 55

// Using reduce to find the maximum value in an array

const max = numbers3.reduce(function (accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}, 0);

console.log(max); // 10

// Using reduce to count the freuqency of elements in an array

const fruits1 = ["apple", "banana", "mango", "apple", "banana", "apple"];

const count = fruits1.reduce(function (accumulator, currentValue) {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(count); // { apple: 3, banana: 2, mango: 1 }

// Multi dimensional arrays

// Creating a 2D Array

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Grab the firs index

console.log(matrix[0]); // [1, 2, 3]

// Grab the first element of the first index

console.log(matrix[0][0]); // 1

// Creating a 3D array

const the3DArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// Access the first of first of first index

console.log(the3DArray[0][0][0]); // 1
