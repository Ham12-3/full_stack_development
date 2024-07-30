const express = require('express')

// Create instance of express router 

const userRouter = express.Router()

userRouter.get("/", (req,res)=> {
    res.json({
        message: "All users fetched"
    })
})


// Getting the single user 

userRouter.route("/:id").get
((req,res) => {
    res.json({
        message: `Getting user with id ${req.params.id}`
    })
}).put((req,res) => {
    res.json({
        message: `Updating user with id ${req.params.id}`
    })
}).delete((req,res) => {    
    res.json({
        message: `Deleting user with id ${req.params.id}`
    })
})



module.exports = userRouter