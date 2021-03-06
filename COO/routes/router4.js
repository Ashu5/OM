// Express Dependency
const express = require('express');
const router = express.Router();

//JSON File 
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryCOO.json'));
const external = JSON.parse(fs.readFileSync('../package.json'));

//Months Array
var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]; 


//S1 and S2 Raised Trend basis on Daily,Weekly,Monthly,Quarterly
router.get('/s1ands2/:Id',(req,res)=>{
 static = [external.variable.s1,external.variable.s2,
    external.variable.raisedCount,external.variable.timeInstance];
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
                              if(key2[j]== "timeInstance"){
                                obj["date"]=getDate(file[0].ticketTrendThisYear.dailyData[i][key2[j]]); 
                                obj[key2[j]]= file[0].ticketTrendThisYear.dailyData[i][key2[j]];
                              }
                             else{
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.dailyData[i][key2[j]][key3[k]]
                            };
                        }
                           
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
                            if(key2[j]== "timeInstance"){
                              obj["date"]=getDate(file[0].ticketTrendThisYear.monthlyData[i][key2[j]]); 
                              obj[key2[j]]= file[0].ticketTrendThisYear.monthlyData[i][key2[j]];
                            }
                           else{
                          obj[key2[j]]={
                             [key3[k]] :file[0].ticketTrendThisYear.monthlyData[i][key2[j]][key3[k]]
                          };
                      }
                         
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
                            if(key2[j]== "timeInstance"){
                              obj["date"]=getDate(file[0].ticketTrendThisYear.weeklyData[i][key2[j]]); 
                              obj[key2[j]]= file[0].ticketTrendThisYear.weeklyData[i][key2[j]];
                            }
                           else{
                          obj[key2[j]]={
                             [key3[k]] :file[0].ticketTrendThisYear.weeklyData[i][key2[j]][key3[k]]
                          };
                      }
                         
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
                            if(key2[j]== "timeInstance"){
                              obj["date"]=getDate(file[0].ticketTrendThisYear.quarterlyData[i][key2[j]]); 
                              obj[key2[j]]= file[0].ticketTrendThisYear.quarterlyData[i][key2[j]];
                            }
                           else{
                          obj[key2[j]]={
                             [key3[k]] :file[0].ticketTrendThisYear.quarterlyData[i][key2[j]][key3[k]]
                          };
                      }
                         
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

//S3 and S4 Raised Trend basis on Daily,Weekly,Monthly,Quarterly
router.get('/s3ands4/:Id',(req,res)=>{
    static = [external.variable.s3,external.variable.s4,
        external.variable.raisedCount,,external.variable.timeInstance];
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
                            if(key2[j]== "timeInstance"){
                                obj["date"]=getDate(file[0].ticketTrendThisYear.dailyData[i][key2[j]]); 
                                obj[key2[j]]= file[0].ticketTrendThisYear.dailyData[i][key2[j]];
                              }
                             else{
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.dailyData[i][key2[j]][key3[k]]
                            };
                        }
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
                              
                          
                            if(key2[j]== "timeInstance"){
                                obj["date"]=getDate(file[0].ticketTrendThisYear.monthlyData[i][key2[j]]); 
                                obj[key2[j]]= file[0].ticketTrendThisYear.monthlyData[i][key2[j]];
                              }
                             else{
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.monthlyData[i][key2[j]][key3[k]]
                            };
                        }
                           
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
                              
                            
                            if(key2[j]== "timeInstance"){
                                obj["date"]=getDate(file[0].ticketTrendThisYear.weeklyData[i][key2[j]]); 
                                obj[key2[j]]= file[0].ticketTrendThisYear.weeklyData[i][key2[j]];
                              }
                             else{
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.weeklyData[i][key2[j]][key3[k]]
                            };
                        }
                           
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
                            if(key2[j]== "timeInstance"){
                                obj["date"]=getDate(file[0].ticketTrendThisYear.quarterlyData[i][key2[j]]); 
                                obj[key2[j]]= file[0].ticketTrendThisYear.quarterlyData[i][key2[j]];
                              }
                             else{
                            obj[key2[j]]={
                               [key3[k]] :file[0].ticketTrendThisYear.quarterlyData[i][key2[j]][key3[k]]
                            };
                        }
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

//Getdate from timestamp
function getDate(timestamp)
{
   return (new Date(timestamp*1000).getDate()+" "+months[new Date(timestamp*1000).getMonth()]);
}

//Exporting this Middleware
module.exports=router;