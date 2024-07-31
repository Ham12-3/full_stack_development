const express = require('express');

const app = express();

const PORT =8082;


// serve static files

app.use(express.static());


// Pass incoming data 

app.use(express.json());


// Application level middleware

app.use((req, res, next) => { 
console.log(req)
console.log(`Request received at ${new Date().toISOString()} for ${req.method}

to ${req.path}` )
    console.log("I am an application level middleware")
    next();
});
app.post("/books", (req, res) => {
console.log(req.body);

// Application level middleware 

// Home Route  

app.get("/", (req, res) => {
console.log(req.body)
res.json({
    message:"Welcome to this app"
})
});
    
res.json({
    message: "Built-In middlewares demos"
})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});