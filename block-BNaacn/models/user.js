var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: { type:String, required:true},
    email: { type:String, lowercase:true},
    age: { type:Number, default:0},
    password: { type:String, minlength:5},
    createAt: { type:Date, default:new Date()}
    favourites: [String]
}, {timestamps:true})

var User = mongoose.model('User',userSchema);

module.export = User;