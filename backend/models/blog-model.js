const { string } = require("joi");
const mongoose = require("mongoose")



const BlogSchema = new mongoose.Schema({
    
        title:{
            type:String,
        },
        description:{
            type: String
        },
        heading1:{
            type:String
        },
        heading2:{
            type:String
        },
        heading3:{
            type:String
        },
        heading4:{
            type:String
        },
        para1:{
            type: String

        },
        para2:{
            type: String

        },
        para3:{
            type: String

        },
        para4:{
            type: String

        },

        time:{
            default: Date
        },
        author:{
            type: String
        }, 
        image:{
            type:String
        }
})
const BlogModel = mongoose.model("blog",BlogSchema)
module.exports = BlogModel 