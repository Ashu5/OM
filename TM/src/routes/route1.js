const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOT.json'));
const external = JSON.parse(fs.readFileSync('../package.json'));

router.get('/raiseTM',(req,res)=>{
   res.setHeader('Content-Type', 'application/json');
   var key1 = Object.keys(file[0]);         
   var key2 = Object.keys(file[0].openCount);
   
   var static = [external.variable.raisedTodayCount,external.variable.solvedTodayCount];
   var obj ={};
  for (var i = 0; i < key1.length; i++) {
   
      if(key1[i]==static[i]){
      
       obj[key1[i]]=file[0][key1[i]];      
       //obj[key1[i]]=file[0]["escalations"]["my"].totalCount;
      

       }
       else if(key1[i]=="escalations"){
         obj[key1[i]]=file[0]["escalations"].my.totalCount;
       }
    
        
     }
        for (var i = 0; i < key2.length; i++) {
           
       obj[key2[i]] = file[0]["openCount"][key2[i]];
      }
      
      res.json(obj);
    res.end();
});


module.exports = router;

