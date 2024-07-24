const url = "https://jsonplacesssssssholder.typicode.com/posts";

// Create a new instance of XMLHTTPRequest 


const xhr = new XMLHttpRequest();

// COnfigure the request 

xhr.open("GET", url, true);

// Attach an event listener to handle changes in the  request state 

xhr.onreadystatechange = function () {
// Check if the request is complete (readyState = 4) 

if(xhr.readyState ===4 && xhr.status === "success" ) {
    // Parse the JSON data
    
    console.log(JSOn.parse(xhr.responseText))

}

// Handle errors 

if(xhr.readyState === 4 && xhr.status !== "success") {
    console.log(xhr.statusText)
}
};