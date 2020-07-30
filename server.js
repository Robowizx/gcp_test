const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello im gcp f1');
});

app.listen(3000,()=>{
    console.log('listening at port 3000');
});