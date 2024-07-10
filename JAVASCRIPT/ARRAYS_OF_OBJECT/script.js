// The concept of objects being passed by reference

// Modifying object through a different reference

const person = { name: "Alice", age: 20 };

const person2 = person1;

console.log(person2); // {name: "Alice", age: 20}

// modify age of person2
person2.age = 25;

console.log(person2); // {name: "Alice", age: 25}

console.log(person); // {name: "Alice", age: 25}

// Passing Object to a function

const incrementAge = (personObj) => {
  personObj.age += 1;
};

const bob = { name: "Bob", age: 30 };

incrementAge(bob);

// Objects in Arrays

// Sceanrio: managing a list of students where each of student is an object with properties like id , name and age

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 25 },

  { id: 3, name: "Charlie", age: 30 },

  { id: 4, name: "David", age: 35 },
  { id: 5, name: "Eve", age: 40 },
];

// Access student name

const student1 = students[0].name;

// Add new student

const addStudent = (studentObj) => {
  students.push(studentObj);
};

addStudent({ id: 6, name: "Frank", age: 45 });

// Update a student

const updateStudentGrade = (id, newGrade) => {
  // find the student by id
  const studentFound = students.find((student) => student.id === id);
  if (studentFound) {
    studentFound.grade = newGrade;
  } else {
    console.log("Student not found");
  }
};

updateStudentGrade(2, "A"); // {id: 2, name: "Bob", age: 25, grade: "A"}

// Scenario: Managing a SImple To-Do List

// Here we'll create a simple todolist object that has a tasks array property. Each object inside the tasks array will
// have properties like id description and completed

const todoLists = {
  title: "Todo List Application",
  tasks: [
    { id: 1, description: "Buy Groceries", completed: false },
    { id: 2, description: "Pay Bills, completed: false" },
    { id: 3, description: "Do Laundry", completed: false },
  ],
};

console.log(todoLists);

// Accessing properties

const todoTitle = todoLists.title; // "Todo List Application"

const allTasks = todoLists.tasks; // [{id:1, description:"Buy Groceries", completed: false}, {id:2, description:"Pay Bills, completed: false"}, {id:3, description:"Do Laundry", completed: false}]

const addTask = (description) => {
  // get new id

  const newId = todoLists.tasks.length + 1;
  const newTask = {
    id: newId,
    description,
    completed: false,
  };

  // Push the new task into the original task

  todoLists.tasks.push(newTask);
};

addTask("Clean House"); // {id:4, description:"Clean House", completed: false}

// Function to mark a task as completed

const markAsCompleted = (id) => {
  // find the task by id

  const foundTask = todoLists.tasks.find((task) => task.id === id);

  if (foundTask) {
    foundTask.completed = true;
  } else {
    console.log("Task not found");
  }
};
markAsCompleted(2); // {id:2, description:"Pay Bills, completed: true}

console.log(todoLists);

// Basic Example of forEach() method

const fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Grapes", color: "green" },
];

fruits.forEach((currentVal, index, arr) => {
  console.log(currentVal, index, arr);
});

// Case Study: Online Shopping Cart Calculation

// Suppose you are working on an e-commerce WebTransportBidirectionalStream, and you need too
// calculate the total price of items in a user's shopping cart. Each item in the cart is
// represented by an object in an array with properties sucj as name , price and quantity,
// Your task is to calculate the total cost of items in the cart and also list the names of all items
// in the cart for the user's review

// Calculate the total cost of the items in the cart

// Initial Data

const cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
];

// Calculate the tota cost of the items in the cart

let totalCost = 0;
cart.forEach((item) => {
  // sum all the product price

  totalCost += item.price * item.quantity;
});

console.log(totalCost); // 1090

let productNames = [];
cart.forEach((item) => {
  productNames.push(item.name);
});

console.log(productNames); // ["Laptop", "Mouse", "Keyboard"]

// Calculate the total number of items

let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.quantity;
});

// The Map() method

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Suppose we have an array of product in a shopping cart. Each object represents a product with a name and a price.
// we want to apply a 10% discount to all products in the cart and create a new array with the discounted prices.

// Initial Data
const shoppingCart = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },

  { name: "Monitor", price: 200 },
];

// Add 10% discount

const discountedCart = shoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});

console.log(discountedCart);

// get all the product names only

const productNamesOnly = shoppingCart.map((product) => {
  return {
    name: product.name,
  };
});

console.log(productNamesOnly);

// Filtering active users

const users = [
  {
    id: 1,
    isActive: false,
    name: "Bob",
  },

  {
    id: 2,
    isActive: true,
    name: "Alice",
  },

  {
    id: 3,
    isActive: true,
    name: "Charlie",
  },

  {
    id: 4,
    isActive: false,
    name: "David",
  },
];

const activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers); // [{id:2, isActive:true, name:"Alice"}, {id:3, isActive:true, name:"Charlie"}]

const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 },
  { id: 4, amount: 400 },
  { id: 5, amount: 500 },
];
// Filter out all amount above 100

const largeTransactions = transactoins.filter(
  (transaction) => transaction.amount > 100
);

console.log(largeTransactions); // [{id:2, amount:200}, {id:3, amount:300}, {id:4, amount:400}, {id:5, amount:500}]

// Transformation and manipulation of data using splice() method

// Remove inactive users from the users array

const usersArr = [
  { id: 1, isActive: false, name: "Bob" },
  { id: 2, isActive: true, name: "Alice" },
  { id: 3, isActive: true, name: "Charlie" },
  { id: 4, isActive: false, name: "David" },
];

// Find the index of the user to be removed

const indexToRemove = usersArr.findIndex(
  (user) => user.id === 1 && user.isActive === false
);

// use splice
if (indexToRemove !== -1) {
  usersArr.splice(indexToRemove, 1);
} else {
  console.log("User not found");
}

console.log(usersArr); // [{id:2, isActive:true, name:"Alice"}, {id:3, isActive:true, name:"Charlie"}, {id:4, isActive:false, name:"David"}]

// Managing playlists in a music app


const playlist = [
    {id:"s1", title:"Song 1", artist: "Artist A"}
    ,{id:"s2", title:"Song 2", artist: "Artist B"}
    ,{id:"s3", title:"Song 3", artist: "Artist C"}


    ,{id:"s4", title:"Song 4", artist: "Artist D"}
]

// Remove song of id s1 
const songIndexToRemove = playlist.findIndex((song)=> {
    return song.id === "s1"
})

console.log(songIndexToRemove) // 0

// Using splice 

if(songIndexToRemove !== -1){ 
    playlist.splice(songIndexToRemove, 1)
} else {
    console.log("Song not found")
}
console.log(playlist) // [{id:"s2", title:"Song 2", artist: "Artist B"}, {id:"s3", title:"Song 3", artist: "Artist C"}, {id:"s4", title:"Song 4", artist: "Artist D"}]

// Move a song of id s1 to third position 

const indexToMove = playlist.findIndex((song)=> {
    return song.id === "s1"
})
if(indexToMove !== -1){
   const [songToMove] = playlist.splice(indexToMove, 1);
   playlist.splice(2, 0, songToMove)
} 

// insert new song 

const newSong = {id:"s5", title:"Song 5", artist: "Artist E"}
playlist.splice(1, 0, newSong)

// Object.assign method 

// updating tproperties of students in a class 

const studentsArr =[
    {id:1, name:"Alice", age:20},
    {id:2, name:"Bob", age:25},
    {id:3, name:"Charlie", age:30},
    {id:4, name:"David", age:35},
    {id:5, name:"Eve", age:40}
]

// Grade updates 

const gradeUpdates =[
    { grade:"A"},
    { grade:"B"},
    { grade:"C"},
    { grade:"D"},
    { grade:"E"}
]

// Update the students 

const updatedStudents = studentArr.map((student,index)=> {
    return Object.assign({}, student, gradeUpdates[index])
})
// Search and filter using find( ) method

// Finding the first patient with a specific ailment in a hospital database 
const patients = [
    {id:1, name:"Alice", ailment:"headache"},
    {id:2, name:"Bob", ailment:"fever"},
    {id:3, name:"Charlie", ailment:"headache"},
    {id:4, name:"David", ailment:"cough"},
    {id:5, name:"Eve", ailment:"headache"}
]

// paitent with headache 

const patientWithHeadache = patients.find((patient)=> {
    return patient.ailment === "headache"
})

console.log(patientWithHeadache) // {id:1, name:"Alice", ailment:"headache"}


// Search and filter using some()  method 

const patient2 =[
    {id:1, name:"Alice", ailment:"headache"},
    {id:2, name:"Bob", ailment:"fever"},
    {id:3, name:"Charlie", ailment:"headache"},
    {id:4, name:"David", ailment:"cough"},
    {id:5, name:"Eve", ailment:"headache"}
]

// Patient with headache 

const patientWithCold2 = patients2.some((patient)=> { patient.ailment === "headache"})

console.log(patientWithCold2) // true

// Search and filter using every 

const studentsArr2 =[
    {id:1, name:"Alice", grade:"A"},
    {id:2, name:"Bob", grade:"B"},
    {id:3, name:"Charlie", grade:"C"},
    {id:4, name:"David", grade:"D"},
    {id:5, name:"Eve", grade:"E"}
,
    {id:6, name:"Frank", grade:"F"},
]

const allPassed = studentsArr2.every((student)=> {
    return student.grade !== "F"
})

console.log(allPassed) // false
