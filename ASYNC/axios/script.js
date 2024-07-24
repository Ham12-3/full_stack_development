const url = "https://jsonplacesssssssholder.typicode.com/posts";

// Create a new instance of XMLHTTPRequest 
const fetchData =() => {
    axios.get(url).then(response => {
        console.log(response.data)
    }).catch(error => console.log(error))
}

fetchData()  // This will log the data from the API to the console

// Using async / await with axios 

const fetchData2 = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}