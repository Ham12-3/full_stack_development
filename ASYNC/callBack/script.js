// Behaving as a normal function parameter /argument/variable 

// create callback function 

function myCallbackFn() {
    console.log("Hello this is a callback function")
}

// Usage 

function logMessage(callback) {
    // execute the callback fn 

callback()
}

// call  HOF 

logMessage(myCallbackFn)

logMessage(function() {
    console.log("Hello this is a simple callback function")
})