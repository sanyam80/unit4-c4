const mongoose = require("mongoose");


const TodoSchema = mongoose.Schema({
    title:{type:String,required:true},
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:"true"
    }
},
{versionKey:false,timestamp:true}
);

const Todo = mongoose.model("Todo",TodoSchema);
module.exports = Todo;