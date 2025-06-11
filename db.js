const mongoose = require("mongoose");
require('dotenv').config();

//Define the MongoDB connection URL

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL);


//Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Defination event listeners for database connection;

db.on('connected', () => {
    console.log("Connection to MongoDB server");
});

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports = db;