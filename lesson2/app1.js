const express = require ('express')
const app = express()
const {getCurrentDate,printLog} = require('./hai')

app.use(express.urlencoded({extended:true}))
app.set('view engine'.'hbs')

app.post('/survey',(req,res)=>{
    var nameInput = req.body.txtName;
    var job =req.body.job;
    res.render('survey',{name:nameInput, job:job})
   // res.end('<h1>Thank you ' + nameInput +'</h1>')
   res.write(``)
   var now = getCurrentDate();
   printLog(now)
   res.end(`Current date: ${now}`)
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/about', (req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="color:red"> About page </h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Server is running on Port: ', PORT)