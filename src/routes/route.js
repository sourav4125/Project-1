const express=require("express")
const router=express.Router()
const authorController=require("../controller/authorController")
const blogController=require("../controller/blogController")
router.post("/authors",authorController.authorCreate)
router.post("/blogs",blogController.blogCreate)



module.exports=router