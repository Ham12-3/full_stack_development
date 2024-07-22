// Create a blocking

console.log("Starting blocking operations");

// Create blocking code

for (let i = 0; i < 1000000000; i++) {
  // console.log(i);
}
console.log("Finish blocking operations");

// Create a non-blocking code

console.log("Starting non-blocking operations");

setTimeout(() => {
  console.log("Finish non-blocking operations");
}, 0);

console.log("Finish non-blocking operations");
