const express = require('express');

const app = express();

const {MongoClient, ServerApiVersion} =require("mongodb");
const { version } = require('os');

const PORT = 8082

// connect to mongoDB 


// 1. Create the client 

const client = new MongoClient(
    "mongodb://localhost:27017", {
        serverApi: {
            version: ServerApiVersion.v1,
            striict: true,
            deprecationErrors: true
    
        }
    }
   
)

// Function to connect 

const connectDb = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}


// Call the function 

connectDb();
// Start the server 

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});

