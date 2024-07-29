// 1. Import the required modules 


const http= require("http")
const url = require("url")

console.log(http)
// 2. Define the handler 
const requestHandler = (request, response) => {
// Send response 
const passedUrl = url.parse(request.url,true)
const pathname = passedUrl.pathname



// Split the pathname 

const pathComponent =pathname.split("/").filter(Boolean)
console.log(pathComponent) 

if(pathComponent[0]==="products" && pathComponent[1]) {
    // Take the product and send to the user 

    // Perform db query 

    const productId = pathComponent[1]

    // Send to the user 

    response.writeHead(200,{'content-type':"text/plain"} )

    response.end(`Product with id ${productId}`)
} else {
    response.writeHead(200,{'content-type':"text/plain"} )

    response.end("Not Found")
}


}


// 3. Create the server 
const server =http.createServer(requestHandler)



// 4. Start the server 

const PORT =3000

server.listen(PORT,()=> {
    console.log(`The server is running on port ${PORT}`)
})