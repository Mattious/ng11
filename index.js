const {createServer } = require('http');

// Create server
const server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.end('Hello World\n');
});

server.listen(3000, ()=> console.log('Server start up: http://localhost:3000'));
