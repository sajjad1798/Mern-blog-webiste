require("dotenv").config();
const express = require("express")

// custom files 

const connection = require("./config/db");
const router = require("./routes/userRoutes")

const app = express();

// Connection to database

connection(); 

// Midddle Ware 
app.use(express.json()) 
app.use(express.urlencoded({extended: true}));
app.use("/" , router)

// Port Number where my app run

const PORT = process.env.PORT || 5000;

// app listen on the port 

app.listen(PORT , () => {
 console.log(`App is listing on the port number ${PORT}`);
})
