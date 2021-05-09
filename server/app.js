const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const mainRoutes = require('./routes/main.js');
const http = require('http');
const cors = require('cors');

require("dotenv").config();
const port = 80;
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use('/api/', mainRoutes);
// MONGOOSE Set-up
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected!!!");
  })
  .catch((err) => {
    console.log("Error connecting to database");
    throw err;
  });

// ROUTES
app.get('/', (req,res)=>{
    res.status(20).json(
        {
            message: 'Welcome to my API'
        }
    )
})

//   RUNNING SERVER
app.listen(port, (req, res) => {
  console.log(`Server Listening at http://localhost:${port}`);
});
