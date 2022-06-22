const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.getElementById(`loginid`).value)" > <input type="text" id="loginid" name="loginid"><button type="submit">login</button></form>');
});

module.exports=router;