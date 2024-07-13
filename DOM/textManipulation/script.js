// Using textContent to update the blog title 

const blogTitleEl = document.getElementById('title');

blogTitleEl.textContent = 'New Blog Title';

// change the background 


blogTitleEl.style.backgroundColor = 'red';

blogTitleEl.style.color = 'white';


// using innerHTML to add another paragraph with some HTML content 

blogTitleEl.innerHTML = "<h1>New Blog Title</h1>"

// change the background 

blogTitleEl.style.backgroundColor = 'red';

blogTitleEl.style.color = 'white';

// Using innerHTML to add another paragraph with some HTML content 

const paragraphEl = document.getElementById('paragraph');


paragraphEl.innerHTML += "<br> <strong> This is an new paragraph text with strong formatting </strong>"


// Using innerText to modify the comment section (assumethe original comment is visible) 

const firstCommentEl = document.getElementById('comment1').querySelector(".commentText");

firstCommentEl.innerText = "This is the new comment text";
