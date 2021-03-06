const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const index = require('./server/routes/index')
const membersRoute = require('./server/routes/members')
const meetingsRoute = require('./server/routes/meetings')
const districtsRoute = require('./server/routes/districts')
const attendancesRoute = require('./server/routes/attendances')
const cookieParser = require('cookie-parser');

// Sets up the express app
const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

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
app.use('/api', attendancesRoute);

app.get('*', function (request, response){
  response.send({message: 'are you lost'})
});


app.listen(app.get('port'), () => {
  console.log(`Running: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});