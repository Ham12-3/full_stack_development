// Select the list element with id cherry 
const cherryEl = document.getElementById('cherry');


// Select the previous element of "cherry" (should be banana) 

const previousFruitEl = cherryEl.previousElementSibling;
console.log(previousFruitEl)  // <li id="banana">Banana</li>

// Select the next sibling of "cherry" (should be date) 

const nextFruitEl = cherryEl.nextElementSibling;

console.log(nextFruitEl)  // <li id="date">Date</li>

