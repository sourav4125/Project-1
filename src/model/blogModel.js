const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        ref: "Authordb"
    },
    tags: {
        type: [String]
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: [String]
    },
    deletedAt: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: String
        
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports=mongoose.model("Blogdb",blogSchema)
