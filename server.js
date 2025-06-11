const express = require("express");
const db = require("./db");


const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

let PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to our Hotel");
});

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
  console.log("App is listening on port");
});
