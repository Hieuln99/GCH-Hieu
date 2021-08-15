const {ObjectId,MongoClient} = require('mongodb');
//const url ='mongodb://localhost:27017';
const url = 'mongodb+srv://Hieulngbh:0977953600@cluster0.avzfi.mongodb.net/test';
const DATABASE_NAME = "GCH0803"

async function getdb() {
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    return dbo;
}
async function insertP(newProduct) {
    const dbo = await getdb();
    const newS = await dbo.collection(DATABASE_NAME).insertOne(newProduct);
    console.log("ID: ", newS.insertedId.toHexString());
}
async function DeleteP(IdInput) {
    const dbo = await getdb();
    await dbo.collection(DATABASE_NAME).deleteOne({ _id: ObjectId(IdInput) });
}
async function getPro(Id) {
    const dbo = await getdb();
    return dbo.collection(DATABASE_NAME).findOne({ _id: ObjectId(Id) });
}
async function getAll() {
    const dbo = await getdb();
    const all = await dbo.collection(DATABASE_NAME).find({}).toArray();
    return all;
}
async function updatePro(id,nameInput,picInput,priceInput){
    const dbo  = await getdb();
    dbo.collection(DATABASE_NAME).updateOne({_id:ObjectId(id)},{$set:{name: nameInput, pic: picInput, price: priceInput}})
}
async function Search(SearchIn) {
    const dbo = await getdb();
    const all = await dbo.collection(DATABASE_NAME).find({ name: SearchIn }).toArray();
    return all;
}

module.exports={getdb, insertP, DeleteP, updatePro,getPro, Search, getAll}