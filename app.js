const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const index = require('./server/routes/index')
const membersRoute = require('./server/routes/members')
const meetingsRoute = require('./server/routes/meetings')
const districtsRoute = require('./server/routes/districts')
const cookieParser = require('cookie-parser');

// Sets up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parses data from incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended :false}))
app.use(cookieParser());

app.use('/', index);
app.use('/api', membersRoute);
app.use('/api', meetingsRoute);
app.use('/api', districtsRoute);

app.get('*', function (request, response){
  response.send({message: 'are you lost'})
});


module.exports = app;
