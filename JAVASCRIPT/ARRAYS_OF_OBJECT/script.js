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


// Objects in Arrays 

// Sceanrio: managing a list of students where each of student is an object with properties like id , name and age 

const students = [

    {id: 1, name: "Alice", age: 20},
    {id: 2, name: "Bob", age: 25},

{id: 3, name: "Charlie", age: 30},

{id: 4, name: "David", age: 35}
, {id: 5, name: "Eve", age: 40}
];

// Access student name

const student1 = students[0].name;


// Add new student 

const addStudent = (studentObj) => {
    students.push(studentObj);
}

addStudent({id: 6, name: "Frank", age: 45});

// Update a student 

const updateStudentGrade = (id,newGrade) => {
    // find the student by id 
    const studentFound = students.find(student => student.id === id);
    if(studentFound) {
        studentFound.grade = newGrade;

    } else {
        console.log("Student not found");
    }
}

updateStudentGrade(2, "A"); // {id: 2, name: "Bob", age: 25, grade: "A"}