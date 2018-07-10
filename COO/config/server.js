// Express Dependency
const express = require('express');

//Middleware Dependencies
const Rout1 = require('../routes/router1');
const Rout2 = require('../routes/router2');
const Rout3 = require('../routes/router3');
const Rout4 = require('../routes/router4');

//Express Refernce
const app = express();

//For Port
const fs= require('fs');
const port = JSON.parse(fs.readFileSync('../package.json'));

//Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api',Rout1);
app.use('/api',Rout2);
app.use('/api',Rout3);
app.use('/api',Rout4);

//Default Request
app.get('*',(req,res)=>{
  res.status(404).send('Sorry cant find that!');
});

//Listening Port
app.listen(port.variable.port,()=>{console.log(`port ${port.variable.port} is connected to server`)});