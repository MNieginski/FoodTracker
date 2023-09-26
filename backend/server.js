// initialize .env
require("dotenv").config();
require("./config/db.connection")

// Pull PORT from .env, give default value of 4000 and establish database connection
const { PORT } = process.env;

// import express
const express = require("express");

const foodRouter = require('./routes/food')

const cors = require("cors")
const morgan = require("morgan")

// create application
const app = express();


// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use('/food', foodRouter)


// ROUTES
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log('listening on PORT ${PORT}'));