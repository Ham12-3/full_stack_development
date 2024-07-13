// Function to create a new task 

function createTask(newTask) {
    // Create a new div element to hold the task 

    const taskEl = document.createElement('div');    

    // add new css to the created element 
    taskEl.setAttribute('class', 'task');


     const  taskTextNodeEl =document.createTextNode(newTask); 
taskEl.appendChild(taskTextNodeEl); 

// Finally append the task to the container div 

document.getElementById('container').appendChild(taskEl);


}

createTask('Buy milk'); // <div></div>

