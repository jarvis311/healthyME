const mongoose = require("mongoose");


const FeedbackSchema = new mongoose.Schema({

        feedback: {
                type: String,
                required: true
        },
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
        },
        product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
        },

        // role : {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"role"
        // },
        // catagory : {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"catagory"
        // }
})


const FeedbackModel = mongoose.model("feedback",FeedbackSchema)
module.exports = FeedbackModel 