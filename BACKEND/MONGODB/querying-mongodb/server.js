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
    const database = client.db("masyntech1");

    // Collections
    const employees = database.collection("employees");
    const books = database.collection("books");
    // Create some documents
    const booksDoc = [
      {
        title: "The Alchemist",

        author: "Paulo Coelho",
        year: 1988,
        genre: "Quest, Adventure, Drama",
      },
      {
        title: "The Da Vinci Code",

        author: "Dan Brown",
        year: 2003,
        genre: "Mystery, Detective, Conspiracy",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Tragedy, Drama",
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy, Adventure",
      },
    ];
    const employeesDocs = [
      {
        name: "John Doe",
        age: 25,
        position: "Software Developer",
        salary: 120000,
      },
      {
        name: "Jane Doe",
        age: 30,
        position: "Data Analyst",
        salary: 100000,
      },
      {
        name: "James Smith",
        age: 35,
        position: "Project Manager",
        salary: 150000,
      },
    ];

    // const results = await employees.insertMany(employeesDocs);

    // Querying operators

    // ----gt ang gte------
    // const employeesCursor = employees.find({ salary: { $gte: 30 } });
    // const results = await employeesCursor.toArray();

    // ----lt and lte------
    // const employeesCursor = employees.find({ salary: { $lte: 120000 } });
    // const results = await employeesCursor.toArray();

    // ne and nin
    // ne: not equal
    // const employeesCursor = employees.find({
    //   salary: { $ne: [120000, 150000] },
    // });

    // nin

    // const employeesCursor = employees.find({
    //   salary: { $nin: [120000, 150000] },
    // });
    // const results = await employeesCursor.toArray();

    // const results = await books.insertMany(booksDoc);

    // Logical Operators

    // const booksCursor = books.find({
    //   $or: [{ author: "Dan Brown" }, { author: "J.R.R. Tolkien" }],
    // });

    // AND operator

    const booksCursor = books.find({
      $and: [{ author: "Dan Brown" }, { year: 2003 }],
    });
    const results = await booksCursor.toArray();
    console.log(results);
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
