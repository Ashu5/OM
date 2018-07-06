const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryCOO.json'));
const external = JSON.parse(fs.readFileSync('../package.json'));


router.get('/s1ands2/:Id',(req,res)=>{
 static = [external.variable.s1,external.variable.s2,external.variable.raisedCount];
 var result = [];
    if(req.params.Id == "daily"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.dailyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.dailyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.dailyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                     
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                             
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.dailyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "monthly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.monthlyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.monthlyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.monthlyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                    
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                             
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.monthlyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "weekly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.weeklyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.weeklyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.weeklyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                    
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                              
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.weeklyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "quarterly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.quarterlyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.quarterlyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.quarterlyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                     
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                               obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.quarterlyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else{
        res.send("wrong Url");
    }

});
router.get('/s3ands4/:Id',(req,res)=>{
    static = [external.variable.s3,external.variable.s4,external.variable.raisedCount];
    var result = [];
    if(req.params.Id == "daily"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.dailyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.dailyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.dailyData[0]["s3"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                     
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                            
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.dailyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "monthly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.monthlyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.monthlyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.monthlyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                     console.log(key2[j]);
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                              
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.monthlyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "weekly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.weeklyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.weeklyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.weeklyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                    
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                              
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.weeklyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else if(req.params.Id == "quarterly"){
        var key1 =Object.keys(file[0].ticketTrendThisYear.quarterlyData); 
        var key2 =Object.keys(file[0].ticketTrendThisYear.quarterlyData[0]);
        var key3 =Object.keys(file[0].ticketTrendThisYear.quarterlyData[0]["s1"]);
         for(var i=0;i<key1.length;i++)
         {
             var obj ={};
             for(var j=0;j<key2.length;j++)
             {
                 if(static.includes(key2[j]))
                 {
                     
                     for(var k=0;k<key3.length;k++)
                     {
                          if(static.includes(key3[k]))
                          {
                              
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.quarterlyData[i][key2[j]][key3[k]]
                            };
                           
                        }
                     }
                     
                 }


             }
             result.push(obj);  
         
        
        } 
        
        res.json(result);
    }
    else{
        res.send("wrong Url");
    }

});


module.exports=router;