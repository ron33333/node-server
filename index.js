const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => {
    let servedUrl;
    switch (req.url) {
        case '/homepage':
            servedUrl = fs.readFileSync('./pub/homepage.html', 'utf8');
            break;
        case '/services':
            servedUrl = fs.readFileSync('./pub/services.html', 'utf8');
            break;
        case '/about':
            servedUrl = fs.readFileSync('./pub/about.html', 'utf8');
            break;
        default:
            res.statusCode = 404;
            servedUrl = fs.readFileSync('./pub/404.html', 'utf8');
            break;
    }
    res.end(servedUrl)
});

server.listen(8080, () => {
    console.log('listening to 8080');
});