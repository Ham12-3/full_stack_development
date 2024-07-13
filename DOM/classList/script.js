// Select the p element 

const p = document.getElementById("textElement")



// function to add class 

function addClass() {
    p.classList.add("highlight", "bold","italic")
}


// removeClass 

function removeClass() {
p.classList.remove("highlight", "bold","italic")
}

// toggleClass 
function toggleClass() {
    p.classList.toggle("highlight", "bold","italic")
}

// checkContains 

function  checkContains() {
    alert(p.classList.contains("highlight") ? "Contains highlight" : "Does not contain highlight")
}


// replaceClass 

function replaceClass() {
   if(p.classList.contains("italic")) {
       p.classList.replace("italic", "newHighlight")
   } else {
    p.classList.add("red-text")
   }
}

// listitem 

function listItem() {
    alert("the first class is:" + p.classList.item90    )
}

// getValue 
function getValue() {
    alert(p.classList.value)
}
