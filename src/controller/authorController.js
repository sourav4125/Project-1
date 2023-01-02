const authorModel=require("../model/authorModel")

const authorCreate=async function(req,res){
    let data=req.body
    let savedData=await authorModel.create(data)
    res.send({savedData})
}






module.exports.authorCreate=authorCreate