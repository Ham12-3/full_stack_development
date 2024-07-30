const express = require('express');
const userRouter = require('./routes/userRouter');

const postRouter = require('./routes/postRouter');
const isAuthenticated = require('./middleware/isAuthenticated');

// Create instance of express 

const app =express()
app.use('/users',isAuthenticated,userRouter)
app.use('/posts',postRouter)



// Create the PORT 

const PORT = 8082




app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})