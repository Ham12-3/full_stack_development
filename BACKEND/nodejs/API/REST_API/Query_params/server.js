

// 1. Import the required modules 


const http= require("http")
const url = require("url")

console.log(http)
// 2. Define the handler 
const requestHandler = (request, response) => {
// Send response 
const passedUrl = url.parse(request.url,true)
// Extract the query 

const queryParameters= passedUrl.query
console.log(queryParameters)

response.writeHead(200,{'content-type':"text/plain"} )

response.end("Welcome")
}


// 3. Create the server 
const server =http.createServer(requestHandler)



// 4. Start the server 

const PORT =3000

server.listen(PORT,()=> {
    console.log(`The server is running on port ${PORT}`)
})