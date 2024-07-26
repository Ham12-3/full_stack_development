const fs = require("fs")

console.log(fs)
// Read a file from the file system
// Synchronous 

const dataBuffer =fs.readFileSync("./sample.txt")


const content = dataBuffer.toString()

console.log(content)

// Asynchronous 

fs.readFile("./sample.txt", (err, data) => {
    if(err){
        console.log(err)
        throw err
    }else{
        console.log(data.toString())
    }
})

// Write to a file 

fs.writeFile("./new.txt", "Hello World", (err) => {
    if(err){
        console.log(err)
        throw err
    }else{
        console.log("File written successfully")
    }
})

// Append to a file 

fs.appendFile("./new.txt", "Hello World", (err) => {    
    if(err){
        console.log(err)
        throw err
    }else{
        console.log("File appended successfully")
    }
})

// Checking if a file exists 

fs.access("./new.txt", fs.constants.F_OK, (err) => {
    if(err){
        console.log("File does not exist")
    }else{
        console.log("File exists")
    }
})

// Delete a file 

fs.unlink("./new.txt", (err) => {
    if(err){
        console.log(err)
        throw err
    }else{
        console.log("File deleted successfully")
    }
})

// Using promise 

const fs2 = require("fs/promises")



const readFileContent = async()=> {
    try {
        const content = fs2.readFile("./sample.txt","utf-8")
        console.log(content)
    } catch(error) {
        console.log(error)
    }
}

readFileContent()