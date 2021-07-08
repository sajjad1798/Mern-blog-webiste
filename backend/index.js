require("dotenv").config();
const express = require("express")
const connection = require("./config/db");
const router = require("./routes/userRoutes")
const app = express();

//connection to database

connection();

app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use("/" , router)
const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
 console.log(`App is listing on the port number ${PORT}`);
})