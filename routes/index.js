var express = require('express');

var app = express();

app.use('/',require('./r1/common.route'));

module.exports = app;