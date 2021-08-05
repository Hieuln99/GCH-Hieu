const express = require('express')
const app = express()
const {hetCurrentDate, printLog, getCurrentDate} = require('./hai')

app.use(express.urlencoded({extend:true}))

app.post('/survey',(req,res)=>{
    var nameInput =req.body.txtName;
    var jobInput = req.body.job;
    res.setHeader('Content-Type','text/html');
    res.write(`<h1>Thanks you ${nameInput} - ${jobInput} for participating <h1>`)
    var now =getCurrentDate();
    printLog(now)
    res.end(`Current date: ${now}`)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/about',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style: "color:red">About page</h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Server is running: ', PORT)