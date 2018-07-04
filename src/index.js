const express = require('express');
const app = express();

app.use('/api',require('./router/router1.js'));
app.use('/api',require('./router/router1.js'));
app.use('/api',require('./router/router1.js'));
app.use('*',(req,res)=>{
    res.send("wrong Url U entered");
})

app.listen(3000,(req,res)=>{"3000 is running"});