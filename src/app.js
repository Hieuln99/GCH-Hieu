const express = require ('express')
const {Int32} = require('mongodb');
const exphbs = require('express-handlebars');
const { Search, getAll, getPro, insertP, DeleteP, updatePro} = require('./databasehandle');

const app = express()
app.engine('handlebars',exphbs())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')

app.post('/insert', async (req,res)=>{
    const nameInput = req.body.txtName;
    const picInput= req.body.txtPic;
    const priceInput= req.body.txtPrice;
    const newPro = {name: nameInput,pic: picInput,price: Int32(priceInput)};
    await insertP(newPro);
    res.redirect('/');
})

app.get('/delete',async (req,res)=>{
    const IdInput = req.query.id;
    await DeleteP(IdInput)
    res.redirect('/');
})

app.post('/search',async (req,res)=>{
    const SearchIn = req.body.txtSearch;
    const all = await Search(SearchIn);
    res.render('index',{data:all})
})
app.post('/update',async (req,res)=>{
    const Id = req.body.id;
    const nameInput = req.body.txtName;
    const picInput= req.body.txtPic;
    const priceInput= req.body.txtPrice;
    await updatePro(Id,nameInput,picInput,priceInput)
    res.redirect('/');
})

app.get('/edit',async (req,res)=>{
    const Id = req.query.id;
    const Search = await getPro(Id)
    res.render('edit',{pro: Search});
})

app.get('/search',async (_req,res)=>{
    const all =  await getAll();
    res.render('edit',{data:all})
})

// chuyen trang
app.get('/addToy',(_req,res)=>{
    res.render('addToy')
})
app.get('/information',(_req,res)=>{
    res.render('information')
})

app.get('/',async (_req,res)=>{
    const all =  await getAll();
    res.render('index',{data:all})
})

app.get('/editfirst',async (req,res)=>{
    const all =  await getAll();
    res.render('edit',{data:all})
})

app.get('/information1',async (req,res)=>{
    const all =  await getAll();
    res.render('information',{data:all})
})

const PORT = process.env.PORT ||5000;
app.listen(PORT);






