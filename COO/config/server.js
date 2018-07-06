const express = require('express');
const Rout1 = require('../routes/router1');
const Rout2 = require('../routes/router2');
const Rout3 = require('../routes/router3');
const Rout4 = require('../routes/router4');
const app = express();

app.use('/api',Rout1);
app.use('/api',Rout2);
app.use('/api',Rout3);
app.use('/api',Rout4);
app.get('*',(req,res)=>{
  res.status(404).send('Sorry cant find that!');
});

app.listen(4560,()=>{console.log('port 4560 is connected to server')});