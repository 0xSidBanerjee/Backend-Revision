require('dotenv').config()
const express=require("express");
const app=express();

app.get('/', (req,res)=>{
    res.send("Backend says hi!");
})
app.get('/twitter', (req,res)=>{
    res.send('<h1>sidstwt</h1>')
})

app.get('/chai', (req,res)=>{
    res.send("<h2>Please login at chaiaurcode.com</h2>")
})


app.listen(process.env.PORT, ()=>{
    console.log("Backend up and running!");
})
console.log("Hello from Backend")