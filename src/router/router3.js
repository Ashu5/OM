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
router.get('/SLAComp/application/:id',(req,res)=>{

    if(req.params.id == "weekly"){
        var valu2=file[0].resolutionSLACompliance.byApp.WTDData;
        res.json(valu2);
       
       }
      else if(req.params.id == "monthly"){
        var valu2=file[0].resolutionSLACompliance.byApp.MTDData;
        res.json(valu2);
       }
       else if(req.params.id == "quaterely"){
        var valu2=file[0].resolutionSLACompliance.byApp.QTDData;
        res.json(valu2);
       }
       else if(req.params.id == "yearly"){
        var valu2=file[0].resolutionSLACompliance.byApp.YTDData;
        res.json(valu2);
       }
      else{
          res.send("wrong Url Guys");
      }
 
 });

 router.get('/SLAComp/team/:id',(req,res)=>{

    if(req.params.id == "weekly"){
        var valu2=file[0].resolutionSLACompliance.byPerson.WTDData;
        res.json(valu2);
       }
      else if(req.params.id == "monthly"){
        var valu2=file[0].resolutionSLACompliance.byPerson.MTDData;
        res.json(valu2);
       }
       else if(req.params.id == "quaterely"){
        var valu2=file[0].resolutionSLACompliance.byPerson.QTDData;
        res.json(valu2);
       }
       else if(req.params.id == "yearly"){
        var valu2=file[0].resolutionSLACompliance.byPerson.YTDData;
        res.json(valu2);
       }
      else{
          res.send("wrong Url Guys");
      }
 
 });
module.exports=router;