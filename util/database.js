const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    username:'root',
    database:'shopping-app',
    password:'Learn@123'
});

module.exports=pool.promise();