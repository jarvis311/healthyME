const mongoose = require("mongoose")


const FeedbackSchema = new mongoose.Schema({
    
        feedback:{
            type:String,
            required:true
        },
        // role : {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"role"
        // },
        user: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
        },
        product: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"product"
        }
        // catagory : {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"catagory"
        // }
})


const FeedbackModel = mongoose.model("feedback",FeedbackSchema)
module.exports = FeedbackModel 