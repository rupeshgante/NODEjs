const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path')

router.post('/success',(req,res,next)=>{

    res.send('<h1>Subimitted Successfully</h1>');
    
});

module.exports=router;