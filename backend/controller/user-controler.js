const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")


let success = false;

//add [ POST ]
module.exports.addUser = function (req, res) {
    
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role
    //encrypt password
    let encPassword = bcrypt.hashSync(password,10)
    // let success = false;
    
    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: encPassword,
        role: role
    })


    user.save(function (err, data) {
        if (err) {
            res.json({success, msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            success = true;
            res.json({success, msg: "signup done", data: data, status: 200 })//http status code 
        }
    })


}
//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "List of all users ...", data: data, status: 200 })//http status code 
        }
    })
}

//Update users

module.exports.updateUser  = function(req,res){
    let paramuserId = req.body.userId 
    let paramemail = req.body.email 
    let parampassword = req.body.password 
    let paramName = req.body.firstName 

    UserModel.updateOne({_id:paramuserId},{email:paramemail,password:parampassword,firstName:paramName},function(err,data){
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })//http status code 
        }
    })

}


//delete
module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

// User Login
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 
    // let success = false;
    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({success, msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            success = true;
            res.json({success, msg: "Login Success....", data: data, status: 200 })//http status code 
        }
    })

}
  