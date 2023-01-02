
const blogModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")
const moment=require("moment")

const blogCreate = async function (req, res) {
    try {
        let data = req.body
        const { title, body, authorId, category } = req.body
        let data2 = await authorModel.findById(authorId)
        if (!data2) {
            res.status(400).send({ status: false, msg: "authorId error" })
        }
        let savedData = await blogModel.create(data)
        return res.status(201).send({ status: true, msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false })
    }}

    const getData=async function(req,res){
       try{ let blogData=req.query
        let data3=await blogModel.find({$and:[{isDeleted:false},{isPublished:true},blogData]})
        if(data3){
            res.status(200).send({msg:data3})
        }else{
            res.status(404).send({msg:"not correct data"})
        }
    }catch(error){
        res.status(500).send({error:error.message})
    }
    }

    const updateData=async function(req,res){
        let {title, body,  tags,subcategory}=req.body
        let time=moment().format(hh-mm-ss)
        let data5=req.params.blogId
        let update=await blogModel.findOneAndUpdate({data5},req.body,{new:true})
        res.send({msg:update})
    
    }
//put Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
// - Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// - Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
// - Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
// - Also make sure in the response you return the updated blog document. 










    module.exports.blogCreate = blogCreate;
    module.exports.getData = getData;
    module.exports.updateData=updateData;

    // get// Returns all blogs in the collection that aren't deleted and are published
    // Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
    // - If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 
    // - Filter blogs list by applying filters. Query param can have any combination of below filters.
    //   - By author Id
    //   - By category
    //   - List of blogs that have a specific tag
    //   - List of blogs that have a specific subcategory
    // example of a query url: blogs?filtername=filtervalue&f2=fv2



























    
           
   