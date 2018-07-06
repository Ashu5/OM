// Require Express Dependency
const express = require('express');
const app = express();

// For Dynamic port
const fs = require('fs');
const port = JSON.parse(fs.readFileSync('../package.json'));

// Using Middleware
//app.use('/api',require('./routes/route1'));
//app.use('/api',require('./routes/route2'));
app.use('/api',require('./routes/route3'));

// Default Url
app.use('*',(req,res)=>{
    res.send("wrong Url, Guys U entered");
})

//Listening  URl
app.listen(port.variable.port,(req,res)=>console.log(port.variable.port +" is running"));