const http = require('node:http');

const port = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
      
      res.setHeader('Content-Type', 'text/html')

      if(req.url == "/"){
        res.statusCode = 200;  
        res.end('<h1>Home Page Using Node.js</h1><p>This is home page</p>');
      }
      else if(req.url == "/about"){
          res.statusCode = 200;
          res.end('<h1>About Page</h1><p>This is About page</p>');
      }
      else{
          res.statusCode = 404;
          res.end('<h1>Not Found</h1><p>This Page is Not Found</p>');
      }
});

/*
    To listen the port in server
*/

server.listen(port, ()=>{
      console.log("Server is running on port " + port)
});