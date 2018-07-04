const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOM.json'));
const package = JSON.parse(fs.readFileSync('../package.json'));
router.get('/SLA/:id',(req,res)=>{
   static = [package.variable.openApproach];
    if(req.params.id == "team"){
        var valu2=file[0].openApproachingSLAs.byPerson;
          res.json(valu2);
   }
  else if(req.params.id == "application"){
    var valu2=file[0].openApproachingSLAs.byApp;
    res.json(valu2);
   }
  else{
      res.send("wrong Url Guys");
  }

});
router.get('/SLAComp/team/:id',(req,res)=>{

    if(req.params.id == "weekly"){
        res.json(file);
       }
      else if(req.params.id == "monthly"){
        res.json(file);
       }
       else if(req.params.id == "quaterely"){
        res.json(file);
       }
       else if(req.params.id == "yearly"){
        res.json(file);
       }
      else{
          res.send("wrong Url Guys");
      }
 
 });

 router.get('/SLAComp/application/:id',(req,res)=>{

    if(req.params.id == "weekly"){
        res.json(file);
       }
      else if(req.params.id == "monthly"){
        res.json(file);
       }
       else if(req.params.id == "quaterely"){
        res.json(file);
       }
       else if(req.params.id == "yearly"){
        res.json(file);
       }
      else{
          res.send("wrong Url Guys");
      }
 
 });
module.exports=router;