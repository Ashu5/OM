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
       var result = [];
      var static = [package.variable.appName,package.variable.raisedCount,package.variable.openCount];
    if(req.params.id == "weekly")
    {
        var key1=Object.keys(file[0].ticketVolume.WTDData);
        var key2=Object.keys(file[0].ticketVolume.WTDData[0]);
        for(var i=0;i<key1.length;i++){
            obj = {};
            for(var j=0;j<key2.length;j++){
                if(static.includes(key2[j])){
                    obj[key2[j]]=file[0].ticketVolume.WTDData[i][key2[j]];

                }
              
            }
            
            result.push(obj);
        }
        res.json(result);
       
    }
      else if(req.params.id == "monthly"){
        var key1=Object.keys(file[0].ticketVolume.MTDData);
        var key2=Object.keys(file[0].ticketVolume.MTDData[0]);
        for(var i=0;i<key1.length;i++){
            obj = {};
            for(var j=0;j<key2.length;j++){
                if(static.includes(key2[j])){
                    obj[key2[j]]=file[0].ticketVolume.MTDData[i][key2[j]];

                }
              
            }
            
            result.push(obj);
        }
        res.json(result);
       }
       else if(req.params.id == "quaterely"){
        var key1=Object.keys(file[0].ticketVolume.QTDData);
        var key2=Object.keys(file[0].ticketVolume.QTDData[0]);
        for(var i=0;i<key1.length;i++){
            obj = {};
            for(var j=0;j<key2.length;j++){
                if(static.includes(key2[j])){
                    obj[key2[j]]=file[0].ticketVolume.QTDData[i][key2[j]];

                }
              
            }
            
            result.push(obj);
        }
        res.json(result);
       }
       else if(req.params.id == "yearly"){
        var key1=Object.keys(file[0].ticketVolume.YTDData);
        var key2=Object.keys(file[0].ticketVolume.YTDData[0]);
        for(var i=0;i<key1.length;i++){
            obj = {};
            for(var j=0;j<key2.length;j++){
                if(static.includes(key2[j])){
                    obj[key2[j]]=file[0].ticketVolume.YTDData[i][key2[j]];

                }
              
            }
            
            result.push(obj);
        }
        res.json(result);
       }
      else{
          res.send("wrong Url Guys");
      }
});

//My Contribution with Team basis on Weekly,Monthly,Qauterly,Yearly

router.get('/contri/:id',(req,res)=>
{
   if(req.params.id == "weekly"){
        var valu2=file[0].myResolutionContribution.WTDData;
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