const http = require('http')
const hostname = 'localhost'
const port = 5000;

const server = http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/html');
console.log(new Date().getSeconds())
//res.end('<h1>Hello World</h1><p>This is response</p><ol><li>One</li><li>Two</li><li>Three</li></ol>');
switch (req.url) {
    case "/home":
    res.writeHead(200);
    res.end("<h1>This is Home page</h1>");
    break;
    case "/about":
    res.writeHead(200);
    res.end("<h1>This is About page</h1>");
    break;
    default:
    break;
    }
   
})

server.listen(port,hostname,()=>{
    console.log('Server is running ', port)
})