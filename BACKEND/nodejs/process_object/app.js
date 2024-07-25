// Analyzing process 

// Environment variables 

const appEnv=process.env.APP_ENV || "development";

// Display the env 
console.log(`Our Node app is running on ${appEnv} environment`)

// setting the env 


// process.exit() method
// Check the current environemnt using the NODE_ENV variable 

if(process.env.NODE_ENV!=="production") {
    console.log("This script should only be run in production  ")
//   exit the process 

process.exit()
}

// process.cwd and process.chdir() methods 

console.log(`Current working directory is ${process.cwd()})`)

try {
    // Change the current working directory 

    process.chdir("/tmp")

} catch (error) {
    console.error(`chdir: ${error}`)
}   