const mongoose = require("mongoose");


const FeedbackSchema = new mongoose.Schema({

        feedback: [{
                comment: {
                        type: String,
                        required: true,
                },
                user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "user"
                },
                email:{
                        type:String,
                        
                }
        }],
       
        product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product"
        }
})


const FeedbackModel = mongoose.model("feedback", FeedbackSchema)
module.exports = FeedbackModel 