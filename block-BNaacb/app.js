
var express = require('express');

var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/sample", (err) =>{

console.log(err ? err: "connected to database")
});
   
var app = express();

app.listen(3000, () => {
    console.log('server listening on port 3000')
});