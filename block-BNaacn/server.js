var express = require('express');
const { default: mongoose } = require('mongoose');

var mpngoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/sample", (err)=> {
    console.log(err ? err:"connected to database")
});
var app = express();