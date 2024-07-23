// Promise.all 

// Create our promises 


const promise1 = Promise.resolve("Prmoise 1 resolved");

const promise2 = Promise.reject(new Error("Promise 2 rejected"));

Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
}).catch((err) => {
    console.log(err);
});

Promise.race([promise1, promise2]).then((values) => {
    console.log(values);
}
).catch((err) => {
    console.log(err);
});