const express=require("express")
const router=express.Router()
const authorController=require("../controller/authorController")
const blogController=require("../controller/blogController")
const auth=require("../middleware/auth")

router.post("/authors",authorController.authorCreate)
router.post("/blogs",blogController.blogCreate)
router.get("/getBlog",blogController.getData)
router.put("/update/:blogId",auth.authetication,auth.authorisation,blogController.updateData)
router.delete("/blogs/:blogId",blogController.deleteData)
router.delete("/blogs1",blogController.deleteData1)
router.post("/token",authorController.authorLogin)


module.exports=router