const { privateDecrypt } = require('crypto');
const express = require('express');

const path =require('path');

const app = express();

const PORT =8082

// Serve the static files/folder 

app.use(express.static(path.join(__dirname,"public"))) 



// Set the EJS as our template engine 

app.set('view engine','ejs');

app.set("view engine","ejs")

// Render Home page /route 

app.get("/", (req,res)=> {
res.render("home.ejs")

})

// Render the about page 

app.get("/about", (req,res)=> {
res.render("about.ejs")
})

// Render the contact page 

app.get("/contact", (req,res)=> {
  res.render("contact.ejs")
})


// Render the gallery page 

app.get("/gallery", (req,res)=> {
    res.render("gallery.ejs")
})

// Render user data 

app.get("/users", (req,res)=> {

  // Dummy user content 

  const userData ={username:"Alice",
  age:25,isPremiumUser:true,
  email:"alice@gmail.com",
  isLogin:true
  
 }
    res.render("userData.ejs", userData)
})

// Render product page / route 

app.get("/products", (req,res)=> {

  const products =[
    {

      name:"Laptop",
      price:1000,
      description:"This is a laptop"
    },
    {
      name:"Phone",
      price:500,
      description:"This is a phone"
    },
    {
      name:"Tablet",
      price:700,
      description:"This is a tablet"
    }
  ]
  res.render("product.ejs", {products})
})

// Start the server 

app.listen(PORT, console.log(`Server is running on port ${PORT}`));