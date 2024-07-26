// import greet from './utils.mjs' 

// import {add,subtract} from './utils.mjs' 

// console.log(greet('John Doe')) 

// console.log(add(1,2))

// console.log(subtract(2,1))

import * as util from './utils.mjs'


console.log(util.default('John Doe'))   

console.log(util.add(1,2))

console.log(util.subtract(2,1))