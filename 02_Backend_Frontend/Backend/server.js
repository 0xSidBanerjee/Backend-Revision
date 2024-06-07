require('dotenv').config();
const express = require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send("Server up");
})

app.get('/api/jokes', (req,res)=>{
    const jokes=[
        {
            id: 1,
            title: "joke 1",
            content: "This is a joke",
        },
        {
            id: 2,
            title: "joke 2",
            content: "This is another joke",
        },
        {
            id: 3,
            title: "joke 3",
            content: "And this is another joke",
        },
        {
            id: 4,
            title: "joke 4",
            content: "This is the 4th joke",
        },
        {
            id: 5,
            title: "joke 5",
            content: "This is the last joke, hopefully",
        }
    ]
    res.send(jokes);
})
let PORT= process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Port up and working in http://localhost:${PORT}`);
})
