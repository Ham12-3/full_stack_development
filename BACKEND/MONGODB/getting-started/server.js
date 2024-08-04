const express = require("express");

const app = express();
// require dotenv
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 8082;

// connect to mongoDB

// 1. Create the client
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect

const connectDb = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // 1. Database name (school)
    const database = client.db("masyntech");
    // 2. Collection (books)
    const students = database.collection("students");
    // 3. Actual document (students)
    // Using the insertOne()

    // const results = await students.insertOne({
    //   name: "Agnes",
    //   age: 22,
    //   subjects: ["Maths", "English", "Kiswahili"],
    // });

    // console.log(results);

    // const results = await students.insertMany([
    //   {
    //     name: "Abdulhamid",
    //     age: 24,
    //     subjects: ["Maths", "English", "Kiswahili"],
    //   },
    //   {
    //     name: "John",
    //     age: 23,
    //     subjects: ["Maths", "English", "Kiswahili"],
    //   },
    //   {
    //     name: "Mary",
    //     age: 24,
    //     subjects: ["Maths", "English", "Kiswahili"],
    //   },
    // ]);

    // Read operations in mongoDB

    // const resultCursor = await students.find();

    // const results = await resultCursor.toArray();
    // console.log(results)

    // Using the findOne() method
    const result = await students.findOne({
      age: 23,
    });
    console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

// Call the function

connectDb();
// Start the server

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
