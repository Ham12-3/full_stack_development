const express = require('express')

// Create instance of express router 

const userRouter = express.Router()

userRouter.get("/", (req,res)=> {
    res.json({
        message: "All users fetched"
    })
})


// Getting the single user 

userRouter.get("/:id", (req,res) => {
    res.json({
        message: `Getting user with id ${req.params.id}`
    })
})

// Update user 

userRouter.put("/:id", (req,res) => {
    res.json({
        message: `Updating user with id ${req.params.id}`
    })
})

// Delete user

userRouter.delete("/:id", (req,res) => {
    res.json({
        message: `Deleting user with id ${req.params.id}`
    })
})

module.exports = userRouter