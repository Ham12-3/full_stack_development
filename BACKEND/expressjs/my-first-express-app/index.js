const express = require('express');

// Create instance of express 

const app =express()



// Create the PORT 

const PORT = 8082



// Define the route handler 

app.get('/', (req,res) => {
    res.send("Hello World")
})

// Start the server 

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})