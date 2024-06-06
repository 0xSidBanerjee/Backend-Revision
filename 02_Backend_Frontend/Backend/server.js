require('dotenv').config();
const express = require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send("Server up");
})
let PORT= 3000 ||process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Port up and working")
})
