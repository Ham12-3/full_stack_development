async function randomOutcome() {
    return new Promise((resolve,reject)=> {
        if(Math.random()> 0.5) {
            resolve("Success")
        } else {
            reject("failed")
        }
    })
}

const handleOutcome =async() => {
    try{
        const result = await randomOutcome()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

handleOutcome()