const { isObjectIdOrHexString } = require("mongoose");
const blogModel=require("../model/blogModel")
const authorModel=require("../model/authorModel")

const blogCreate=async function(req,res){
    let data =req.body
    const {title,body,authorId,category}=req.body
    let data2=await authorModel.findById(authorId)
    if(!data2){
        res.status(400).send({status:false,msg:"authorId error"})
    }
    let savedData=await blogModel.create(data)
    return res.status(201).send({status:true,msg:savedData})
}
module.exports.blogCreate=blogCreate;

// Returns all blogs in the collection that aren't deleted and are published
// Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
// - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
// - Filter blogs list by applying filters. Query param can have any combination of below filters.
//   - By author Id
//   - By category
//   - List of blogs that have a specific tag
//   - List of blogs that have a specific subcategory
// example of a query url: blogs?filtername=filtervalue&f2=fv2

