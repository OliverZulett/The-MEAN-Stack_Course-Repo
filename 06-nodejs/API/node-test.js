console.log('hola mundo desde npm!!!');

// crear servidor
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello there');
    res.end();

}).listen(8080);

console.log('server running on port 8080');

// post data
const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    let q = url.parse(req.url, true).query;

    let msg = `${q.name} is ${q.age} years old`;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(msg);
    res.end();

}).listen(8080);

console.log('server running on port 8080');

