// 1. Import the required modules 


const http= require("http")
const url = require("url")

// mimic database 

const employees =[
    {
        id:1,
        name:"Agnes Wanjiru",
        email:"agnes@gmail.com"},
    {
        id:2,
        name:"John Doe",
        email:"john@gmail.com"     
    },
    {
        id:3,
        name:"Soil Lee",
        email:"soy@gmail.com"}

]

console.log(http)
// 2. Define the handler 
const requestHandler = (req,res) => {
const {method,url} =req
const parts = url.split("/")

const id = parts[2]

// Get all employees 


if(method ==="GET" && url ==="/employees")  {
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify(employees))
}


// Get single employee 

else if(method ==="GET" && parts[1]==="employees" && id) {
    const employee = employees.find(employee => employee.id === parseInt(id))
   
    if(employee) {
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(employee))
    } else {
        res.writeHead(404,{"Content-Type":"application/json"})
        res.end(JSON.stringify({message:"Employee Not Found"}))
    }
} 

// Create new employee 

else if(method==="POST"&& url==="/employees") {
    let body  =''
    // Listen to the event of making post request 
    req.on('data',(chunk)=> {
body += chunk
    })
    // Send the response 

    req.on('end', ()=> {
        const newEmployee =JSON.parse(body)
        employees.push(newEmployee)
res.writeHead(201,{"Content-Type":"application/json"})
res.end(JSON.stringify({
    newEmployee,
    employees
}))

    })


}
}

// 3. Create the server 
const server =http.createServer(requestHandler)



// 4. Start the server 

const PORT =3000

server.listen(PORT,()=> {
    console.log(`The server is running on port ${PORT}`)
})