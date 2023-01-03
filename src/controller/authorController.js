const authorModel=require("../model/authorModel")

// Author APIs /authors
// - Create an author - atleast 5 authors
// - Create a author document from request body.
//   `Endpoint: BASE_URL/authors`


const authorCreate=async function(req,res){
  try{ let data=req.body
    let savedData=await authorModel.create(data)
    res.status(201).send({status:true,msg:savedData})
}catch(error){
    res.status(404).send({status:false,msg:"user not found"})
}}






module.exports.authorCreate=authorCreate