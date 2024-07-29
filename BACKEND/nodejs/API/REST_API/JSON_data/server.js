// 1. Import the required modules 


const http= require("http")
const url = require("url")

console.log(http)
// 2. Define the handler 
const requestHandler = (request, response) => {


    const data ={
        id:1,
        name:"Agnes Wanjiru",
        email: "agnes@gmail.com",
    }

    // set the response header to application/json 

    response.setHeader("Content-Type","application/json")


    response.end(JSON.stringify(data))

}


// 3. Create the server 
const server =http.createServer(requestHandler)



// 4. Start the server 

const PORT =3000

server.listen(PORT,()=> {
    console.log(`The server is running on port ${PORT}`)
})

