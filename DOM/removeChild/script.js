// For this example, we will create a simple web apge that displays a list of fruits 

// function to add a new fruit 

function addFruit(name) {
    const ulEl= document.getElementById("fruitList");

    // Create li element 

    const li = document.createElement("li");
    li.className ="fruit";
    li.textContent =name
    ulEl.appendChild(li);
    console.log(li)
}


addFruit("banana")


// Remove fruit function 

function removeFruit(name ){
// first select the parent 

const ulEl = document.getElementById("fruitList")
let fruitFound = false;


// Loop through the fruit to find the fruit that we want 

for(const li of ulEl.children){
    if(li.textContent === name){
        ulEl.removeChild(li);
        fruitFound = true;
        break;
    }
   

}

// Update the message based on whether the fruit was found 

document.getElementById("message").textContent = fruitFound ? `${name} was removed` : "Fruit not found"


}

removeFruit("banana")  