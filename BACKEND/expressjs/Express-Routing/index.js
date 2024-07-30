const express = require('express');
const userRouter = require('./userRouter');

const postRouter = require('./postRouter');

// Create instance of express 

const app =express()
app.use('/users',userRouter)
app.use('/posts',postRouter)



// Create the PORT 

const PORT = 8082




app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})