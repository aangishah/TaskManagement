
const express = require('express');
const routes = require('./routes');
const dotenv=require('dotenv');

const app = express();
dotenv.config();

app.use('/',routes);

const server = app.listen(process.env.PORT,function () {
 console.log('Server Lisening On Port : ' + process.env.PORT);
 });

