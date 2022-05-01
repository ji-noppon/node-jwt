const mongoose = require('mongoose')

const {MONGO_URI} = process.env // get MONGO_URI from env

exports.connect = () =>{
    // Connecting to the database
    mongoose.connect(MONGO_URI,{
        useNewUrlParser     : true,
        useUnifiedTopology  : true,
        /*useCreateIndex      : true,
        useFindAndModify    : false */
    })
    .then(() =>{
        console.log("Successfully connected to db")
    })
    .catch((error) =>{
        console.log("Error connected to db")
        console.error(error)
        process.exit(1);
    })
}