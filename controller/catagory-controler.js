const CatagoryModel = require("../models/catagory-model")


//add [ POST ]
module.exports.addUCatagory = function (req, res) {

    let CatagoryName = req.body.CatagoryName
    let role = req.body.role


    let Category  = new CatagoryModel({
        CatagoryName: CatagoryName,
        role: role
    })

    Category.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wronge", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "catagory add ", data: data, status: 200 })//http status code 
        }
    })


}


//list catagory
 
module.exports.getAllCatagory = function (req, res) {

    CatagoryModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg:"List Of all catagory...", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteCatagory = function(req,res){
    //params userid 
    let catagoryId = req.params.catagoryId //postman -> userid 

    CatagoryModel.deleteOne({_id:catagoryId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Catagory removed...", data: data, status: 200 })//http status code 
        }
    })
}