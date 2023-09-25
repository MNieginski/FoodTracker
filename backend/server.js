// initialize .env
require("dotenv").config();

// Pull PORT from .env, give default value of 4000 and establish database connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application
const app = express();


// ROUTES
app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log('listening on PORT ${PORT}'));