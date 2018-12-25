// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config
require("./config/db")();
require('./routes/route')(app);

app.use(errorHandler)

function errorHandler (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).json({ error: err.message })
}

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});