bin/www
const http = require('http')
const app = require('../server');

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port)
console.log('Server running on port', port)



"start": "nodemon ./bin/www && cd client && npm start",