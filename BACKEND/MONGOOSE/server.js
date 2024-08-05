const express = require("express");
const mongoose = require("mongoose");
// require dotenv
require("dotenv").config();

const uri = process.env.URI;

const app = express();

const PORT = process.env.PORT || 8082;

// Connect to mongoDB

const connectToDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
// call the function

connectToDb();

// Design the schema

const userProfileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  hobbies: [String],
  objectId: mongoose.Schema.Types.ObjectId,
  customData: mongoose.Schema.Types.Mixed,
});

// Compile the schema to form the model

const User = mongoose.model("User", userProfileSchema);

// CRUD OPERATIONS

// 1.save()
// const newUser = new User({
//   name: "John",
//   age: 30,
//   email: "john@gmail.com",
//   address: {
//     street: "1234",
//     city: "New York",
//     postCode: 12345,
//   },
//   hobbies: ["Reading", "Swimming"],
//   objectId: new mongoose.Types.ObjectId(),
//   customData: {
//     key1: "value1",
//     key2: "value2",
//   },
// });

// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// 2. create()

// User.create({
//   name: "John",
//   age: 30,
//   email: "john@gmail.com",
//   address: {
//     street: "1234",
//     city: "New York",
//     postCode: 12345,
//   },
//   hobbies: ["Reading", "Swimming"],
//   objectId: new mongoose.Types.ObjectId(),
//   customData: {
//     key1: "value1",
//     key2: "value2",
//   },
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// 3. insertMany()

User.insertMany([
  {
    name: "Emmanuel",
    age: 30,
    email: "emmanuel@gmail.com",
    address: {
      street: "1234",
      city: "New York",
      postCode: 12345,
    },
    hobbies: ["Reading", "Swimming"],
    objectId: new mongoose.Types.ObjectId(),
    customData: {
      key1: "value1",
      key2: "value2",
    },
  },
  {
    name: "Favour",
    age: 30,
    email: "favour@gmail.com",
    address: {
      street: "1234",
      city: "New York",
      postCode: 12345,
    },
    hobbies: ["Reading", "Swimming"],
    objectId: new mongoose.Types.ObjectId(),

    customData: {
      key1: "value1",
      key2: "value2",
    },
  },
]);

// Read Operations
// find , findOne, findById methods

// using the find() method

// User.find()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {});

// // Using the findOne() method

// User.findOne({ age: 30 })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Using the findById() method
// User.findById("66af5ffe1c84877e993b4aae")
//   .then((user) => {})
//   .catch((error) => {});

// Using the where() method

// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").equals(30);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// findUsers();

// using the sort() method

// const findUsers = async () => {
//   try {
//     const users = await User.find().sort({ name: 1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// findUsers();

// Using the limit() method

// const findUsers = async () => {
//   try {
//     const users = await User.find().limit(2);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// findUsers();

// Updating documents
// UpdateOne()

// const updateDoc = async () => {
//   try {
//     const user = await User.updateOne(
//       { name: "John" },
//       { name: "John Doe" },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// findByIdAndUpdate();

// const updateDoc = async () => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       "66af5ffe1c84877e993b4aae",
//       { name: "John Doe" },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// findOneandUpdate()

// const updateDoc = async () => {
//   try {
//     const user = await User.findOneAndUpdate(
//       { name: "John" },
//       { name: "John Doe" },
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
