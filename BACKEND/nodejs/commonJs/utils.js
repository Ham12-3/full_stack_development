// Four ways to use commonJs export 

// SIngle function export 

// object export 

// named function export 

// using export shorthand 


// SIngle function export 1
const firstname ="Alice"

const greet =(name) => {
    return `Hello ${name}`
}

// module.exports = greet 

// Object export 2 

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

// module.exports ={
//    add,
//     subtract
// }

// Named function export 

module.exports.sayHi =(name)=> {
return `Hi ${name}`
}


    // Using export shorthand 

    exports.sayBye = function(name){
        return `Bye ${name}`
    }