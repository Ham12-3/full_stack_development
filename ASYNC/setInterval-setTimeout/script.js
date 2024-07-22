// setTimeout

const showMessage = () => {
  console.log("Hello after 3 seconds");
};

// Schedule the message

setTimeout(showMessage, 3000);

console.log("waiting fo the message");

// setTimeout

const timeOutId = setTimeout(() => {
  console.log("Hello after 4 seconds");
}, 4000);

console.log(timeOutId);

clearTimeout(timeOutId);

// setInterval

setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);

let counter = 0;

const intervalId = setInterval(() => {
  console.log("Hello every 2 seconds");
  counter += 1;

  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 2000);
