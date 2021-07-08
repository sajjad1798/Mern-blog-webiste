const mongoose = require("mongoose");
require("dotenv").config();

module.exports = connection = async () =>{
    try {
        const response = await mongoose.connect(process.env.URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log("Connection created")
    } catch (error) {
        console.log(error)
    }
}
