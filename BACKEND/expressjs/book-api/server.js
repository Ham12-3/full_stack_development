const express =require('express')
const { stat } = require('fs')

const app =express()

const PORT =8082

// Receiving incoming data from express configuration 

app.use(express.json())

const books =[
    {id: 1,
        title: "The grea gatsby",
        author: "F. Scott Fitzgerald",
    },

    {
        id: 2,
        title: "The catcher in the rye",

        author: "J.D. Salinger"
    },

    {
        id: 3,
        title: "To kill a mockingbird",
        author: "Harper Lee"
    }
]

// Home Route 

app.get("/",(req,res) => {
    res.json({
        status: "success",
        message: "Welcome to my first book API using express"
    })
})

// Fetching all books 
app.get("/books",(req,res) => {
    res.json({
        status: "success",
        message: "Books fetched successfully",
        data: books
    })
})

// Fecth a book 

app.get("/books/:id",(req,res) => {
const id = req.params.id;
const bookFound = books.find(book => book.id == id)

if(bookFound){
    res.json({
        status: "success",
        message: "Book fetched successfully",
        data: bookFound
    })

}

else {
    res.json({
        status: "error",
        message: `Book with id ${id} not found`
    })

}
})
// Create a book 

app.post("/books", (req,res) => {
    const {title, author} = req.body
    const newBook = {
        id: books.length+1,
        title,
        author
    }

    books.push(newBook)
    res.json({
        status: "success",
        message: "Book created successfully",
        data: newBook
    })
})


// Start the server 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})