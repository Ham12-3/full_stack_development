// The concept of objects being passed by reference 


// Modifying object through a different reference 

const person ={name:"Alice", age:20};

const person2 = person1;

console.log(person2); // {name: "Alice", age: 20}



// modify age of person2 
person2.age = 25;

console.log(person2); // {name: "Alice", age: 25}

console.log(person); // {name: "Alice", age: 25}


// Passing Object to a function 

const incrementAge = (personObj) => {
    personObj.age += 1;



}

const bob = {name: "Bob", age: 30};

incrementAge(bob);