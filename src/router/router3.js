const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOM.json'));
router.get('/SLA/:id',(req,res)=>{
   if(req.params.id == "team"){
    res.json(file);
   }
  else if(req.params.id == "application"){
    res.json(file);
   }
  else{
      res.send("wrong Url Guys");
  }

});
router.get('/SLAComp/:id',(req,res)=>{

    if(req.params.id == "team"){
        res.json(file);
       }
      else if(req.params.id == "application"){
        res.json(file);
       }
      else{
          res.send("wrong Url Guys");
      }
 
 });
module.exports=router;