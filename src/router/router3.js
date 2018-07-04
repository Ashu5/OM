const express = require('express');
const router = express.Router();
router.get('/teamSLA',(req,res)=>{

    res.send(req.params+"hello");






});
module.exports=router;