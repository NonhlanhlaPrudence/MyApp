const http= require('http');
const app= require('./app');

const port = 3000;

const server =http.createServer(app);

//starting the server
server.listen(port, '0.0.0.0');
console.log('Server listening on port ' + port);