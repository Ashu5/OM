// Installing Dependecies
const express = require('express');
const router = express.Router();
const fs = require('fs');

//Fetching Data from JSON File
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOT.json'));
const package = JSON.parse(fs.readFileSync('../package.json'));
 
//My SLA Compliance basis on Weekly,Monthly,Qauterly,Yearly

router.get('/SLAcomp/:id',(req,res)=>
{
   if(req.params.id == "weekly"){
        var valu2=file[0].myResolutionSLACompliance.WTDData;
        res.json(valu2);
       
       }
      else if(req.params.id == "monthly"){
        var valu2=file[0].myResolutionSLACompliance.MTDData;
        res.json(valu2);
       }
       else if(req.params.id == "quaterely"){
        var valu2=file[0].myResolutionSLACompliance.QTDData;
        res.json(valu2);
       }
       else if(req.params.id == "yearly"){
        var valu2=file[0].myResolutionSLACompliance.YTDData;
        res.json(valu2);
       }
      else{
          res.send("wrong Url Guys");
      }
});

//Ticket Volume By Application basis on Weekly,Monthly,Qauterly,Yearly
router.get('/ticket-volume/:id',(req,res)=>
{
      
    if(req.params.id == "weekly")
    {
        var key1=Object.keys(file[0].myResolutionSLACompliance.WTDData);
        var key2=Object.keys(file[0].myResolutionSLACompliance.WTDData[0]);
        res.json(valu2);
       
    }
      else if(req.params.id == "monthly"){
        var valu2=file[0].myResolutionSLACompliance.MTDData;
        res.json(valu2);
       }
       else if(req.params.id == "quaterely"){
        var valu2=file[0].myResolutionSLACompliance.QTDData;
        res.json(valu2);
       }
       else if(req.params.id == "yearly"){
        var valu2=file[0].myResolutionSLACompliance.YTDData;
        res.json(valu2);
       }
      else{
          res.send("wrong Url Guys");
      }
});








//Exporting Middleware Route3
module.exports = router;