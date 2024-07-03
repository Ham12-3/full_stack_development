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
//  ELSE IF STATEMENT

// case study 1

// Letsç onsider a traffic light system where you want to tell a driver what to do based on the VideoColorSpaceof the traffic light

let trafficLight = "yellow";

if (trafficLight === "red") {
  console.log("Stop");
} else if (trafficLight === "yellow") {
  console.log("Slow down");
} else if (trafficLight === "green") {
  console.log("Go");
} else {
  console.log("Invalid traffic light");
}

// SWITCH STATEMENT

// Case Study 1

// Suppose you are building a calendar application and you need to display the day of the week based on the number provided

let dayNumber = 2;

switch (dayNumber) {
  case 0:
    console.log("Sunday");

    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}
