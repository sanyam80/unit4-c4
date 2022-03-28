const User = require("../model/user.model");
var jwt = require('jsonwebtoken');
require('dotenv').config();
const newToken = (user)=>{
   
    return jwt.sign({user},process.env.secret_key);
}

const register = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.send("Email already exist")
        }
         user = await User.create(req.body);
        const token = newToken(user)
         return res.send({user,token})
        }
    
    catch(err){
        console.log(err.message)
    }
}

const login = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user){
            return res.send("email or password wrong")
        }
            //if email exist, check password
            let match = user.checkPassword(req.body.password);
           
            if(!match)
            {
                console.log("something wrong in password")
                return res.send("password or email wrong")            
    }
            
            const token = newToken(user)
            return res.send({user,token})
}     
    
    catch(err){
        console.log(err.message)
    }
}

module.exports = {register,login}