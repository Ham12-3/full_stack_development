// Accessing the global object 

console.log(global)

// Accessing the global object 

global.myGlobal="Hello from the global object "


console.log(global.myGlobal)


// To check if our variable is truly global 

console.log("myGlobal" in global) // true

console.log(__dirname)

console.log(__filename)

// using setInterval and clearInterval 

let count =0
const interval = setInterval(()=> {
console.log("Hello World")
count++
if(count===5) {
    clearInterval(interval)
}
},1000)

// setTimeout  

setTimeout(()=> {
    console.log("Hello World")
},1000)