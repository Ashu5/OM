// Require Express Dependency
const express = require('express');
const app = express();

// For Dynamic port
const fs = require('fs');
const port = JSON.parse(fs.readFileSync('../package.json'));

// Using Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api',require('./router/router1.js'));
app.use('/api',require('./router/router2.js'));
app.use('/api',require('./router/router3.js'));

// Default Url
app.use('*',(req,res)=>{
    res.send("wrong Url, Guys U entered");
})

//Listening  URl
app.listen(port.variable.port,(req,res)=>console.log(port.variable.port +" is running"));