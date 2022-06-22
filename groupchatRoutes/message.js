const express=require('express');
// const bodyParse=require('body-parser');
const router=express.Router();

// router.use(bodyParse.urlencoded({extended:false}));

router.get('/',(req,res,next)=>{
   
    res.send('<form action="/" method="POST" onsubmit="document.getElementById(`user`).value=localStorage.getItem(`username`)"> <input type="text" id="message" name="message"><input type="hidden" id="user" name="user"><button type="submit">send</button></form>')
});
    router.post('/',(req,res,next)=>{
console.log(`${req.body.user}:${req.body.message}`);
res.redirect('/');
});

module.exports=router;