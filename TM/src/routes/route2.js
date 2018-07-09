const express = require('express');
const router = express.Router();
const fs=require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOT.json'));
const package = JSON.parse(fs.readFileSync('../package.json'));

router.get("/escalateOT/:id",(req,res)=>{
res.setHeader("Content-Type","application/json");

if(req.params.id=="app"){
    var key=Object.keys(file[0].escalations.my.byApp);
    //res.send(key);
    var array=[];
    for(var i=0;i<key.length;i++){
        var jsonObj={};
        jsonObj=file[0].escalations.my.byApp[i];
        array.push(jsonObj);
    }
    res.json(array);
  
    

}

else if(req.params.id=="prior"){
    var key=Object.keys(file[0].escalations.my.byPriority);
    //res.send(key);
    var array=[];
    for(var i=0;i<key.length;i++){
        var jsonObj={};
        jsonObj=file[0].escalations.my.byPriority[i];
        array.push(jsonObj);
    }
    res.json(array);
}
res.end();

});

router.get("/slaOT",(req,res)=>{
  
    var key=Object.keys(file[0].openApproachingSLAs.all.byApp);
    var array=[];
    for(var i=0;i<key.length;i++){
        var jsonObj={};
        jsonObj=file[0].openApproachingSLAs.all.byApp[i];
        array.push(jsonObj);
    }
    res.json(array);
res.end();
});


router.get("/mysla",(req,res)=>{
  
    var key=Object.keys(file[0].openApproachingSLAs.my.byApp);
    var array=[];
    for(var i=0;i<key.length;i++){
        var jsonObj={};
        jsonObj=file[0].openApproachingSLAs.my.byApp[i];
        array.push(jsonObj);
    }
    res.json(array);
res.end();
});



router.get("/escalateTicket",(req,res)=>{
  
    var key=Object.keys(file[0].escalations.my.byApp);
    var array=[];
    for(var i=0;i<key.length;i++){
        var jsonObj={};
        jsonObj=file[0].escalations.my.byApp[i];
        array.push(jsonObj);
    }
    res.json(array);
res.end();
});
module.exports=router;