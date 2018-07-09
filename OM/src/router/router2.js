const express = require('express');
const router = express.Router();
const fs=require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOM.json'));
const package = JSON.parse(fs.readFileSync('../package.json'));
router.get('/escalate',(req,res)=>{
res.setHeader("Content-Type","application/json");
//var key=file[0].escalations.all.byApp;
//key=parseInt(key);

     res.json(file[0].escalations.all.byApp);
   
     





res.end();
});

router.get("/ticketVol/:id",(req,res)=>{

    var value=package.variable.ticketVolume;
    if(req.params.id=="wld"){
        var match=['appName','raisedCount','openCount'];
        var key=Object.keys(file[0].ticketVolume.WTDData);
        var key2=Object.keys(file[0].ticketVolume.WTDData[0]);
        var result=[];
        
        for(var i=0;i<key.length;i++){
            var jsonObj={};
            for(var j=0;j<key2.length;j++){

                if(match.includes(key2[j])){
                    
                    jsonObj[key2[j]]=file[0].ticketVolume.WTDData[i][key2[j]];
                }

            }
            
            result.push(jsonObj);
        }
        
    res.json(result);

    }

    else if(req.params.id=="mtd"){
      
        var match=['appName','raisedCount','openCount'];
        var key=Object.keys(file[0].ticketVolume.MTDData);
        var key2=Object.keys(file[0].ticketVolume.MTDData[0]);
        var result=[];
        for(var i=0;i<key.length;i++){
            var jsonObj={};
            for(var j=0;j<key2.length;j++){

                if(match.includes(key2[j])){
                    
                    jsonObj[key2[j]]=file[0].ticketVolume.MTDData[i][key2[j]];
                }

            }
            
            result.push(jsonObj);
        }
        
    res.json(result);

    }

     
    else if(req.params.id=="qtd"){
      
        var match=['appName','raisedCount','openCount'];
        var key=Object.keys(file[0].ticketVolume.QTDData);
        var key2=Object.keys(file[0].ticketVolume.QTDData[0]);
        var result=[];
        for(var i=0;i<key.length;i++){
            var jsonObj={};
            for(var j=0;j<key2.length;j++){

                if(match.includes(key2[j])){
                    
                    jsonObj[key2[j]]=file[0].ticketVolume.QTDData[i][key2[j]];
                }

            }
            
            result.push(jsonObj);
        }
        
    res.json(result);

    }

    else if(req.params.id=="ytd"){
      
        var match=['appName','raisedCount','openCount'];
        var key=Object.keys(file[0].ticketVolume.YTDData);
        var key2=Object.keys(file[0].ticketVolume.YTDData[0]);
        var result=[];
        for(var i=0;i<key.length;i++){
            var jsonObj={};
            for(var j=0;j<key2.length;j++){

                if(match.includes(key2[j])){
                    
                    jsonObj[key2[j]]=file[0].ticketVolume.YTDData[i][key2[j]];
                }

            }
            
            result.push(jsonObj);
        }
        
    res.json(result);

    }


    
    else{
        res.send("Bad Request! Check The URL");
    }
res.end();
});

module.exports=router;