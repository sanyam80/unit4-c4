const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema  = new mongoose.Schema({
     firstName:{type:String,required:true},
     lastName:{type:String,required:false},
     email:{type:String,required:true},
     password:{type:String,requires:true},
},
{versionKey:false,timestamps:true}

);


userSchema.pre("save",function(next){
     const hash = bcrypt.hashSync(this.password,10);
     this.password = hash
     return next();
   })
   
   userSchema.methods.checkPassword = function(password){
      return bcrypt.compareSync(password,this.password);
   }
 const user = mongoose.model("User",userSchema);
 module.exports = user;


