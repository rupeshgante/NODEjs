
const express=require('express');
const bodyParse=require('body-parser');
const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParse.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>ERROR:404-Page not found</h1>');
});
app.listen(4000);
