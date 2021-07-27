const express = require ('express')
const { send } = require('process')
const app = express()

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + "/view/home.html")
})
app.get('/about', (req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="color:red"> About page </h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Server is running on Port: ', PORT)