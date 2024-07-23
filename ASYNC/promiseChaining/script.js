// First function returning a promise 

function stepOnePromise() {
    return new Promise((resolve)=> {
        resolve("Step  completed")
    })
}

function stepTwoPromise() {
    return new Promise((resolve)=> {
        resolve("Step 2 completed")
    })
}

function stepThreePromise() {
    return new Promise((resolve)=> {
        resolve("Step 3 completed")
    })
}


// Chaining 

stepOnePromise().then((result)=> {
    console.log(result)
    return stepTwoPromise()
}).then((result)=> {
    console.log(result)
    return stepThreePromise()
}).then((result)=> {
    console.log(result)
}).catch((error)=> console.log(error))