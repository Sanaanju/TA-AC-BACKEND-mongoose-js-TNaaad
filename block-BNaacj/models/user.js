var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required:true},
    age: { type: Number, default: 18},
    email: { type: String, lowercase:true, trim:true, match:/@/},
    password: { type:String, minlength:5, maxlength:15},
    createAt: { type:Date, default:04:27:21}
}, {timestamps:true})