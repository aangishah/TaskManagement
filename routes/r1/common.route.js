var express = require('express');

var app = express();

app.get('/',(req,res)=>{
	res.send("Connected from commonroute");
});

app.use('/user',require('./user.route'));


module.exports = app;