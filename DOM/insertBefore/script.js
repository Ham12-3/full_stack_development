// Manage a list of students based on their grades 

// function to add a new student 

function addStudent(name,grade) {
    // Create a new div element to hold the student info 

    const studentEl = document.createElement('div');

    // Add css to it 

    studentEl.className ="student"

    //  Create a text node containing the student name and grade 

const studentTextNode = document.createTextNode(name + " : " + grade);

studentEl.appendChild(studentTextNode);

// Select the container 
const containerEl = document.getElementById("studentList")

let beforeNode =null

// Loop through exisitng student to find the correct position 
for (const child of containerEl.children) {
const childGrade = parseInt(child.textContent.split(":")[1])
if(grade<childGrade){
    beforeNode = child;
    break;
} 
console.log(containerEl.childNodes)

} 

// insert the new student 

    containerEl.insertBefore(studentEl,  beforeNode)
}
addStudent("John", 90)
addStudent("Jane", 80)
addStudent("Doe", 70)

addStudent("Doe", 75)

