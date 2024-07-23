// simple calc with errors 

const divideNumbers =(dividend, divisor, callback) => {
    setTimeout(() => {
        if(divisor === 0) {
            callback(new Error("Cannot divide by zero"),null)
        } else {
            callback(null, dividend/divisor)
        }
    },1000)
}

divideNumbers(10,2, (error, result) => {
    if(error) {
        console.log(error)
        return;
    } else {
        console.log(result)
    }
})