
const express = require('express');
const routes = require('./routes');
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
dotenv.config();


app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.use('/',routes);

const server = app.listen(process.env.PORT,function () {
 console.log('Server Lisening On Port : ' + process.env.PORT);
 });

