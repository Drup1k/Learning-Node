const http = require('http');
const fs = require('fs');
const path = require('path');
const clientDir = path.join(__dirname, 'client');

const server = http.createServer((req, res) => {
    let urlPath = req.url;
    if (urlPath === '/') {
        urlPath = '/mainPage';
    }
    const htmlFilePath = path.join(clientDir, urlPath, 'index.html'); 
    
    fs.readFile(htmlFilePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}); 

// The port listener
server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
