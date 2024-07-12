// Step 1: Select the outer div 

const outerDivEl = document.getElementById("outerDiv");
console.log(outerDivEl);

// Step 2: Navigate to the first child, which is a text node 

const firstChildEl =outerDivEl.childNodes[0];

console.log(firstChildEl);



// Step 3: Navigate to the second child, which is the inner div

const innerDivEl = outerDivEl.childNodes[1];

console.log(innerDivEl);

// Step 4: Select the first child of the inner div 

const innerDivFirstChildEl =innerDivEl.childNodes[0]

console.log(innerDivFirstChildEl);

// Step 5: select the second child of the inner div 

const innerDivSecondChildEl = innerDivEl.childNodes[1];