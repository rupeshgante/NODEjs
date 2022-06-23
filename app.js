
const express=require('express');
const bodyParse=require('body-parser');
const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact');
const successRoutes=require('./routes/success');
const path=require('path');

app.use(bodyParse.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',contactRoutes);
app.use(successRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(4000);
