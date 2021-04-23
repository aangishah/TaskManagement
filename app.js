
const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/',routes);


 const server = app.listen(4000, function () {
 console.log('Server Lisening On Port : ' + "4000");
 });

