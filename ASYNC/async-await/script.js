// Simulating a delay 

async function waitAndRun(value) {
// making APi call to get data
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello');
        resolve(value);
    }, 2000);

});
}

// usage
const getProcessedValue = async() => {
    const result =await waitAndRun(10);
}
getProcessedValue();



// Fetching multiple values in parallel 
const getName = () => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Alice")
        },1000)
    })
    
}

const getAge = () => {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(30)
        },1000)
    })
    
}


async function getUserDetails() {
   const result =  await Promise.all([getname(),getAge()])
}


getUserDetails();