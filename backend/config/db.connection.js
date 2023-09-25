//initialize .env variables
require("dotenv").config();

// start the mongoose database connection
require('./config/db.connection.js')

// pull PORT from .env, give default value of 4000
const mongoose = require('mongoose');
const {DATABASE_URI} = process.env


mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URI)


// Connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));