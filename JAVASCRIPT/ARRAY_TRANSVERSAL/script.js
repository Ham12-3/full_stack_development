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
