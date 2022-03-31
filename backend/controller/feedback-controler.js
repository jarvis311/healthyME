const FeedbackModel = require("../models/feedback-model")


//add feedback [ POST ]
module.exports.addFeedback = function (req, res) {

    let UserFeedback = req.body.feedback
    let FeedbackProduct = req.body.productId
    // let FeedbackUser = req.body.user
    // let FeedbackUser = req.body.user
    // let FeedbackUser = req.body.user
    
    let feedback = new FeedbackModel({
        feedback: UserFeedback,    
        // user: FeedbackUser,    
        productId: FeedbackProduct    
    })

    feedback.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Add feedback", data: data, status: 200 })//http status code 
        }
    })


}

//(GET) list of  feedback
module.exports.getAllFeedback = function (req, res) {

    FeedbackModel.find().populate("user").populate("product").exec(function (err, feedback) {
        if (err) {
            res.json({ msg: "Something went wrong!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "All Feedback are show...", data: feedback, status: 200 })//http status code 
        }
    })
}



//delete feedback
module.exports.deleteFeedback = function(req,res){
    //params userid 
    let feedbackId = req.params.feedbackId //postman -> userid 

    FeedbackModel.deleteOne({_id:feedbackId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Feedback removed...", data: data, status: 200 })//http status code 
        }
    })
}
//Update feedback

module.exports.updateFeedback  = function(req,res){

    let paramuserId = req.body.feedbackId 
    let paramFeedback = req.body.feedback 

    FeedbackModel.updateOne({_id:paramuserId},{feedback:paramFeedback},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Feedback modified...", data: data, status: 200 })//http status code 
        }
    })
}


