// 1. Import the required modules 


const http= require("http")
const url = require("url")

console.log(http)
// 2. Define the handler 
const requestHandler = (request, response) => {
// Send response 
const passedUrl = url.parse(request.url,true)
if(passedUrl.pathname==="/" && request.method==="GET"){
    response.writeHead(200,{'content-type':"text/plain"} )
    response.end("Welcome to the homepage")
} else if(passedUrl.pathname==="/about" && request.method==="GET"){
    response.writeHead(200,{'content-type':"text/plain"} )
    response.end("Welcome to the about page")

}
 else {
    response.writeHead(200,{'content-type':"text/plain"} )

    response.end("Hello World")
 }

}


// 3. Create the server 
const server =http.createServer(requestHandler)



// 4. Start the server 

const PORT =3000

server.listen(PORT,()=> {
    console.log(`The server is running on port ${PORT}`)
})