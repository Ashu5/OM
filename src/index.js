const express = require('express');
const app = express();

app.use('/api',require('./router/router1.js'));
app.use('/api',require('./router/router2.js'));
app.use('/api',require('./router/router3.js'));
app.use('*',(req,res)=>{
    res.send("wrong Url, Guys U entered");
})

app.listen(3000,(req,res)=>console.log("3000 is running"));