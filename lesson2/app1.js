const express = require ('express')
const { send } = require('process')
const app = express()
const {getCurrentDate,printLog} = require('./hai')

app.use(express.urlencoded({extended: true}))

const getCurrentDate = ()=>{
    const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
   return new Date().toLocaleString("vi-VN", options);
}

app.post('/survey',(req,res)=>{
    var nameInput = req.body.txtName;
    res.setHeader('Content-Type','text/html');
   // res.end('<h1>Thank you ' + nameInput +'</h1>')
   res.write(`<h1>Thank you ${namInput} for ...<h1>`)
   var now = getCurrentDate();
   res.end(`Current date: ${now}`)
})



app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/about', (req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="color:red"> About page </h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Server is running on Port: ', PORT)