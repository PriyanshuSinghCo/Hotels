const express = require("express");
const db = require("./db");
const passport = require("./auth");
require('dotenv').config();

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000; 

// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware =  passport.authenticate('local', {session: false });

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel");
});

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//Use the routes
app.use('/person',localAuthMiddleware, personRoutes);
app.use('/menu', menuItemRoutes);



app.listen(PORT, () => {
  console.log("App is listening on port");
});
