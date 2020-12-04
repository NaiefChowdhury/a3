const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
res.sendFile("C:/Users/dinal/3D Objects/Mongo_Atlas/index.html");

});

app.get('/samin', function(req, res) {
res.sendFile("C:/Users/dinal/3D Objects/Mongo_Atlas/index2.html");

});


app.listen(3000, function() {

console.log("server is running 4000");

});