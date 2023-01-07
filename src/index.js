const express=require("express")
const bodyparser=require("body-parser")
const app=express()
const route=require("./routes/route")

const {default:mongoose}=require("mongoose")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://Sakshi:monday123@cluster0.z5dpz2x.mongodb.net/project-1",
{useNewUrlParser:true},mongoose.set("strictQuery",true)).then( ()=>console.log("MongoDb is connected")).catch(err=>console.log(err))

app.use('/',route)

app.listen( 3000,function(){
    console.log('Express app running on port' + ( 3000))
});
