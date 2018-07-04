const express = require('express');
const router = express.Router();
const fs = require('fs');
const file = JSON.parse(fs.readFileSync('../dashboardSummaryOM.json'));
router.get('/teamSLA',(req,res)=>{

   res.json(file);






});
module.exports=router;