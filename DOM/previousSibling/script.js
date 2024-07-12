// Select the button 

const button1El = document.getElementById('button1');

const button2El = document.getElementById('button2');

// Use previous sibling to get the preceeding element of the button1El 


// Use previousSibling to get the preceeding paragrapgh element 

const text1El = button1El.previousSibling;

const text2El = button2El.previousSibling;


// Change the text content of the preceeding paragraph element
if(text1El.nodeType === 3){
    text1El.textContent = 'Text 1 element has been updated';
}


if(text2El.nodeType === 3){
    text2El.textContent = 'text 2 has been changed';
}
