const express=require("express")
const router=express.Router()
const authorController=require("../controller/authorController")
const blogController=require("../controller/blogController")
const auth=require("../middleware/auth")

router.post("/authors",authorController.authorCreate)
router.post("/login",authorController.authorLogin)
router.post("/blogs",auth.authetication,blogController.blogCreate)
router.get("/blogs",auth.authetication,blogController.getData)
router.put("/blogs/:blogId",auth.authetication,auth.authorisation,blogController.updateData)
router.delete("/blogs/:blogId",auth.authetication,auth.authorisation,blogController.deleteData)
router.delete("/blogs1",auth.authetication,blogController.deleteData1)



module.exports=router