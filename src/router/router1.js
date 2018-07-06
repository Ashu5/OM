    const express = require('express');
    const router = express.Router();
    const fs = require('fs');
    const file = JSON.parse(fs.readFileSync('../dashboardSummaryOM.json'));
    const external = JSON.parse(fs.readFileSync('../package.json'));
    
    router.get('/coo',(req,res)=>{
       res.setHeader('Content-Type', 'application/json');
       var key1 = Object.keys(file[0]);
       var key2 = Object.keys(file[0].openCount);
       var obj ={};
       var static = [external.variable.raisedTodayCount,external.variable.solvedTodayCount,external.variable.escalationsCount];
        for (var i = 0; i < key1.length; i++) {
           if(key1[i]==static[i]){
             obj[key1[i]] = file[0][key1[i]];
            }}
        for (var i = 0; i < key2.length; i++) {
           obj[key2[i]] = file[0]["openCount"][key2[i]];
          }
          res.json(obj);
        res.end();
    });
    
    router.get('/coo',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    var key1 = Object.keys(file[0].escalations.all);
    result = [];
    var obj1 ={};
    var static=[external.variable.totalCount,external.variable.escCount];
    for (var i = 0; i < key1.length; i++) 
    {
       if(static.includes(key1[i]))
      {  obj1[key1[i]] = file[0]["escalations"]["all"]["totalCount"] }
     // console.log(obj);
    }
    result.push(obj1);
    
    var key3 = Object.keys(file[0].escalations.all.byPriority);
    var key2 = Object.keys(file[0].escalations.all.byPriority[0]);
    for (var i = 0; i < key3.length; i++) 
    {
       var obj = {};
       for(var j=0;j<key2.length;j++){
       if(static.includes(key2[j]))
      {  obj[key2[j]] = file[0]["escalations"]["all"]["byPriority"][i][key2[j]];
     }
     
    }
    result.push(obj);
     
    }
    
    res.json(result);
    res.end();
    });
    
    module.exports = router;

