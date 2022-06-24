const express=require('express');
const router=express.Router();
const successController=require('../controllers/contactus')

router.post('/success',successController.postContact);

module.exports=router;