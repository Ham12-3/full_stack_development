// Select a list item using data attributes 

const selectedItemEl =document.querySelector('[data-item="fruit"]')

console.log(selectedItemEl)

// Step 2: Navigate to the parent <ul> element 
const parentListEl = selectedItemEl.parentNode;


// Step3: Navigate to the grandparent 

const grandParentEl = parentListEl.parentNode;

// Step4: Navigate to great- grandparent 

const greatGrandParent =grandParentEl.parentNode