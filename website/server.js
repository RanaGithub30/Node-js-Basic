const http = require('node:http');
const fs = require('node:fs');

const port = process.env.PORT || 3002;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    if(req.url == "/"){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else if(req.url == "/about"){
        res.statusCode = 200;
        const data = fs.readFileSync('about_us.html');
        res.end(data.toString());
    }

    else if(req.url == "/contact"){
        res.statusCode = 200;
        const data = fs.readFileSync('contact.html');
        res.end(data.toString());
    }

    else{
        res.statusCode = 404;
        const data = fs.readFileSync('404.html');
        res.end(data.toString());
    }
});

/*
    To listen the port in server
*/

server.listen(port, ()=>{
    console.log("Server is running on port " + port)
});