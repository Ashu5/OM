// Express Dependency
const express = require('express');
const router = express.Router();

//JSON File 
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryCOO.json'));
const external = JSON.parse(fs.readFileSync('../package.json'));

//Number Of ticket Solved,Raised,Open,Escalted
router.get('/raise',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    var key1 = Object.keys(file[0]);
    var key2 = Object.keys(file[0].openCount);
    var obj ={};
    var static = [external.variable.raisedTodayCount,external.variable.solvedTodayCount,external.variable.escalationsCount];
     for (var i = 0; i < key1.length; i++) {
        if(key1[i]==static[i]){
          obj[key1[i]] = file[0][key1[i]];
         }
    }
     for (var i = 0; i < key2.length; i++) {
        obj[key2[i]] = file[0]["openCount"][key2[i]];
       }
       res.json(obj);
     res.end();
});

//Exporting this Middleware
module.exports = router;