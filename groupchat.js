const express=require('express');
const bodyParse=require('body-parser');
const app=express();
app.use(bodyParse.urlencoded({extended:false}));
const login=require('./groupchatRoutes/login');
const message=require('./groupchatRoutes/message');


app.use(login);
app.use(message);



app.listen(3000);



