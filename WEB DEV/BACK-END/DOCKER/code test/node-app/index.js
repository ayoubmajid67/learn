// import express : 
const express =require('express');

// init app : 
const port =4000; 
const  app = express(); 

// create a simple get rout 
app.get('/',(req,res)=>{
    res.send(`<h1>Hello from my app j, h running in port ${port}</h1>`);


})

app.listen(port,()=>{
console.log("app is up and running on port",port);
})

