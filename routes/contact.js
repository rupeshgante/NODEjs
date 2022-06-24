const express=require('express');
const router=express.Router();
const path=require('path');
const contactController=require('../controllers/contactus');

  router.get('/contact',contactController.getContact);
  router.post('/success',contactController.postContact);
module.exports=router;