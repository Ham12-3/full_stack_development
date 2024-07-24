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

// Send the request 

// xhr.send(); 

// Using promise based 

const fetchData = () => {
    fetch(url).then((response)=> {

        console.log(response.json())
    }).catch(error => console.log(error))
}

fetchData()

// Using async await 

const fetchData2 = async() => {
    try {
const result = await fetch(url)

console.log(result.json())
    }catch (error) {
        console.log(error)
    }
}

fetchData2()

