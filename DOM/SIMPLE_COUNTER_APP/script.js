// Make sure the elements are loaded 

document.addEventListener('DOMContentLoaded', () => {

    // select elements 

    const counterValue = document.getElementById('counter-value');

    const increaseBtn = document.getElementById('increase-btn');

    const decreaseBtn = document.getElementById('decrease-btn');

    const resetBtn = document.getElementById('reset-btn');

    // Global value 

    let count = 0;

    // Add event listeners to the button 
increaseBtn.addEventListener("click", () => {
    count++;
    counterValue.textContent = count;
    
})

decreaseBtn.addEventListener("click", () => {
    count--;
    counterValue.textContent = count;

})

resetBtn.addEventListener("click", () => {
    count = 0;
    counterValue.textContent = count;

})

 });

//  Update counter function 

function updateCounter() {
    counterValue.textContent = count;
}


