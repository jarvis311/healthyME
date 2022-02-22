const FeedbackModel = require("../models/feedback-model")


//add feedback [ POST ]
module.exports.addFeedback = function (req, res) {

    let UserFeedback = req.body.feedback
    

    let feedback = new FeedbackModel({
        feedback: UserFeedback
       
    })

    feedback.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}

//list feedback
module.exports.getAllFeedback = function (req, res) {

    FeedbackModel.find().populate("user").populate("product").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}
//Update feedback

module.exports.updateFeedback  = function(req,res){

    let paramuserId = req.body.feedbackId 
    let paramFeedback = req.body.feedback 

    FeedbackModel.updateOne({_id:paramuserId},{feedback:paramFeedback},function(err,data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })//http status code 
        }
    })
}


//delete feedback
module.exports.deleteFeedback = function(req,res){
    //params userid 
    let feedbackId = req.params.feedbackId //postman -> userid 

    FeedbackModel.deleteOne({_id:feedbackId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}