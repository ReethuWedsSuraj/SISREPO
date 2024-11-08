const mongooose = require('mongoose');
const userSchema = new mongooose.Schema({
    name:String,
    email:String,
    age:String,
    
});

let mongooseHidden = require("mongoose-hidden")();
userSchema.set("toJSON",{
    virtuals:true,
});
userSchema.plugin(mongooseHidden);

const User = mongooose.model('User',userSchema);
module.exports=User;