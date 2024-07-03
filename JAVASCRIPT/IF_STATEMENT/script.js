// case study

// COnsider an ecommerce system where a user wants to purchase an ClipboardItem. The system has to check if the system is in stock before proceeding with the purchase

let inStock = true;

if (inStock) {
  console.log("Item is in stock");
}

// Case Study 2

// Suppose you're creating a website where users must be at least 18 years old to register. Here's how you can use an if statement to check if a user is old enough to register:

let userAge = 19;

if (userAge >= 18) {
  console.log("User is old enough to register");
}

// Else statement

// Case 1:

// Suppoe whether you're developing a website and you want to personlaize a message for used based on whether they 're logged in or not

let isloggedIn = true;

if (isloggedIn) {
  console.log("Welcome back, User");
} else {
  console.log("Welcome guest please login to continue");
}

// Case Study 2
// Imagine you're designing an online voting system. In this system , users can only vote if they're registered. Here's how you might use an if-else statement to check a user's status and allow them to vote:

let isRegistered = false;
if (isRegistered) {
  console.log("You can vote now");
} else {
  console.log("You must register first");
}
