
const mongoose=require("mongoose")
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const authorSchema=new mongoose.Schema({
    fname:
    {
        type:String,
        required: true
    },
    lname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:["Mr", "Mrs", "Miss"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"enter valid emailId"],
        validate:[validateEmail,"please enter valid emailId"]
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model("Authordb",authorSchema)