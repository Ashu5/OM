// Express Dependency
const express = require('express');
const router = express.Router();

//JSON File 
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryCOO.json'));

//Ticket Categories  basis on Weekly,Monthly,Quarterly,Yearly
router.get('/category/:Id',(req,res)=>
{
    if(req.params.Id == "weekly"){
        var key1 =file[0].ticketCategoriesThisYear.WTDData; 
         res.json(key1);
    }
    else if(req.params.Id == "monthly"){
        var key1 =file[0].ticketCategoriesThisYear.MTDData; 
        res.json(key1);
    }
    else if(req.params.Id == "yearly"){
        var key1 =file[0].ticketCategoriesThisYear.YTDData; 
         res.json(key1);
    }
    else if(req.params.Id == "quarterly"){
        var key1 =file[0].ticketCategoriesThisYear.QTDData; 
         res.json(key1);
    }
    else{
        res.send("wrong Url");
    }

});

//Exporting this Middleware
module.exports = router;