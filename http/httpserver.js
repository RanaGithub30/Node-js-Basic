const http = require('node:http');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html')
      res.end('<h1>Demo Http Setings Using Node.js</h1><p>This is for testing purpose 123</p>');
});

/*
    To listen the port in server
*/

server.listen(port, ()=>{
      console.log("Server is running on port " + port)
});