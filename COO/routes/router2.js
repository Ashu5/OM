// Express Dependency
const express = require('express');
const router = express.Router();

//JSON File 
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryCOO.json'));
const external = JSON.parse(fs.readFileSync('../package.json'));  

//Ticket Trend basis on Daily,Weekly,Monthly,Quarterly
router.get('/ticket/:Id',(req,res)=>{
   
    var static = [external.variable.totalRaisedCount,external.variable.totalResolvedCount];    
    var result = [];
    
    if(req.params.Id == "daily")
    { 
     var key1 =Object.keys(file[0].ticketTrendThisYear.dailyData); 
     var key2 =Object.keys(file[0].ticketTrendThisYear.dailyData[0]);      
        for(var i =0; i < key1.length; i++)
        {
          let obj2={};
            for(var j=0; j< key2.length; j++)
            {
                 if(static.includes(key2[j]))
                   {
                     obj2[key2[j]]=file[0].ticketTrendThisYear.dailyData[i][key2[j]];       
                    }
            }
             result.push(obj2);
        }  
     res.json(result);
    }
  else if(req.params.Id == "monthly")
    {
      var key1 =Object.keys(file[0].ticketTrendThisYear.monthlyData); 
      var key2 =Object.keys(file[0].ticketTrendThisYear.monthlyData[0]);      
        for(var i =0; i < key1.length; i++)
            {
            let obj2={};
            for(var j=0; j< key2.length; j++)
            {
             if(static.includes(key2[j]))
                {
                 obj2[key2[j]]=file[0].ticketTrendThisYear.monthlyData[i][key2[j]];       
                }
            }
         result.push(obj2);
        }  
     res.json(result);
    }
 else if(req.params.Id == "weekly"){
      
         var key1 =Object.keys(file[0].ticketTrendThisYear.weeklyData); 
         var key2 =Object.keys(file[0].ticketTrendThisYear.weeklyData[0]);      
            for(var i =0; i < key1.length; i++)
               {
               let obj2={};
                 for(var j=0; j< key2.length; j++)
                   {
                if(static.includes(key2[j]))
                       {
                      obj2[key2[j]]=file[0].ticketTrendThisYear.weeklyData[i][key2[j]];       
                         }
                         }
                   result.push(obj2);
                    }  
                res.json(result);
           
       
    }
    else if(req.params.Id == "quarterly"){
       
         var key1 =Object.keys(file[0].ticketTrendThisYear.quarterlyData); 
         var key2 =Object.keys(file[0].ticketTrendThisYear.quarterlyData[0]);      
            for(var i =0; i < key1.length; i++)
               {
               let obj2={};
                 for(var j=0; j< key2.length; j++)
                   {
                if(static.includes(key2[j]))
                       {
                      obj2[key2[j]]=file[0].ticketTrendThisYear.quarterlyData[i][key2[j]];       
                         }
                         }
                   result.push(obj2);
                    }  
                res.json(result);
           
       
    }
    else{
        res.send("wrong Url");
    }
});

//Exporting this Middleware
module.exports = router;