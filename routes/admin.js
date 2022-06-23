const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path');

  router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addproduct.html'))
   });

  router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
   });

   module.exports=router;