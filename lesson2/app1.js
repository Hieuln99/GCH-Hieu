const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Home page</h1>')
})
app.get('/about', (req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="color:red"> About page </h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Server is running on Port: ', PORT)