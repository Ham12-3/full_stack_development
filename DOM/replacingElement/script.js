// Function to replace an article 

function replaceArticle(articleId, newContent) {
    // FInd the exsiting article by its ID 

    const existingArticle = document.getElementById(articleId)
// create a new div element for the updated article 
const newArticleEl = document.createElement("div")

// add css to it 

newArticleEl.classList.add("article")
// Keep the ID same for the new article 

newArticleEl.id = articleId;

// Create a text node for the new content 
const newTextNode = document.createTextNode(newContent);    

// Append the text node to the new article div

newArticleEl.appendChild(newTextNode);

existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);


}

replaceArticle("article1", "This is the new content for article 1")