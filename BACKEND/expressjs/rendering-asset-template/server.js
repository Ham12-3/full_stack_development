const { privateDecrypt } = require('crypto');
const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const path =require('path');

const app = express();

const PORT =8082

// Serve the static files/folder 



app.use(express.static(path.join(__dirname,"public"))) 

// Plugin the ejs layout as a middleware 


app.use(ejsLayout);


app.set('layout',"layout/main-layout")
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
//404 Error handler
app.use((req, res, next) => {
  const error = new Error("Page Not Found");

  next(error);
});
app.use((err, req, res, next) => {
  console.log(err.message);
  res.render("error", { error: err.message });
});
// Start the server 

app.listen(PORT, console.log(`Server is running on port ${PORT}`));