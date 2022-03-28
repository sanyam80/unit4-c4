const connect = require("./config/db.js")
const express = require("express");
const usercontroller = require("./controller/user.controller.js");
const Todocontroller = require("./controller/Todo.controller.js")

const {register,login} = require("./controller/auth.controller.js");
const app = express();
app.use(express.json());
app.use("/Users",usercontroller);
app.use("/Todo",Todocontroller)
app.post("/register",register);
app.post("/login",login);

app.listen(5000, async()=>{
     
    try{
        await connect();
    }
    catch(err){
        console.log(err.message);
    }
    console.log("Listening on port 5000")
})
