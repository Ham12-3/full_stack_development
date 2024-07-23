// Example 1 with callback

function simpleCb(success, cb) {
  console.log("Cb function called");
  if (success) {
    cb(null, "Success");
  } else {
    cb(new Error("the operation failed"), null);
  }
}

// Usage

simpleCb(true, (error, result) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(result);
  }

  console.log("this will always run regardless of the result");
});

// Convert this to use a promise

// Creation phase

const simplePromise = new Promise((resolve, rejected) => {
  const success = true;

  if (success) {
    resolve("The operation was successful");
  } else {
    rejected(new Error("The operation failed"));
  }
});

// Usage of promise

simplePromise

  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This will always run");
  });

// Example 2 convert to use promise

function isEvenNumber(number, cb) {
  if (number % 2 === 0) {
    cb(null, "The number is even");
  } else {
    cb(new Error("The number is odd"), null);
  }
}

// Usage

isEvenNumber(2, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }

  console.log("This will always run");
});


// Using or converting this with promise 

const isEvenNumberPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
        resolve("The number is even");
        } else {
        reject(new Error("The number is odd"));
        }
    });
    };

// Usage

isEvenNumberPromise(2)
.then((result) => {
    console.log(result);
})  
.catch((error) => {
    console.log(error);
})

.finally(() => {

    console.log("This will always run");
});