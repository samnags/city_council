const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Sets up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parses data from incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended :false}))

// Sets up default route with JSON return message
app.get('*', (req, res) => res.status(200).send({
  message: 'You have arrived'
}));

module.exports = app;
