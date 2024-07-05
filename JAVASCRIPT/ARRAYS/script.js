// --------------

// Creating Array using Array Literal

const studentAges = ["Emma", false, 20, [], {}];

console.log(studentAges);

// Declaring an array of strings

const daysofTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(daysofTheWeek);

// Declaring an array of mix types

const mixedTypes = ["Emma", 20, false, {}, []];

// Declaring an array with empty data
// --------------

// Creating Array using Array Constructor

const emptyArray = new Array();
console.log(emptyArray);

// Creating an array with predefined size

const arrayWithSize = new Array(5);

// Creating an array with elements

const arrayWithElements = new Array("Emma", 20, false, {}, []);

// Creating an array with mixed type

const mixDataType = new Array("Emma", 20, false, {}, []);

// Creating array using array.of() method

const numArr = Array.of(1, 2, 3, 4, 5);
console.log(numArr);

const mixedArr = Array.of("Emma", 20, false, {}, []);

console.log(mixedArr);

// Using Array.from( ) method

const originalArr = [1, 2, 3, 4, 5];

const clonedArr = Array.from(originalArr);

// Creating an array from an Array-like object

const arrayLike = {
  0: "Emma",
  1: 20,
  2: false,
  3: {},
  4: [],
  length: 5,
};
const convertedArr = Array.from(arrayLike);

// Accessing Array Elements

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log(days[0]); // Monday

// last index
console.log(days[days.length - 1]); // Friday

// Using push method

const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

// Using unshift to add at the beginning of the array

fruits.unshift("Pineapple", "Carrot");

console.log(fruits); // ["Pineapple", "Carrot", "Apple", "Banana", "Mango", "Orange"]

// Remove Elements from an Array using pop and shift method

const animals = ["Lion", "Tiger", "Elephant", "Zebra"];

console.log(animals.pop()); // Zebra

console.log(animals.shift()); // Lion

console.log(animals); // ["Tiger", "Elephant"]s

// Using the length property

const colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors.length); // 4
