const ProductModel = require("../models/product-model")
const express = require('express')
const router = express.Router()
const UserModel = require("../models/user-model")

// Add Product by users where Approval is false
module.exports.addProduct = function (req, res) {
    let product_name = req.body.product_name
    let description = req.body.description
    let fat = req.body.fat
    let calories = req.body.calories 
    let carbohydrates = req.body.carbohydrates 
    let fiber = req.body.fiber 
    let sugars = req.body.sugars
    let protein = req.body.protein
    let vitamin_c = req.body.vitamin_c
    let vitamin_a = req.body.vitamin_a
    let vitamins_and_minerals = req.body.vitamins_and_minerals
    let advantage = req.body.advantage
    let disadvantage = req.body.disadvantage
    let image = req.file.originalname;
    let rating = req.body.rating
    let role = req.body.role
    let catagory = req.body.catagory
    let user = req.body.user
    
    let addSuccess = false;

    let product = new ProductModel({
        product_name: product_name,
        description: description,
        fat:fat,
        calories:calories,
        carbohydrates:carbohydrates,
        sugars:sugars,
        fiber:fiber,
        protein:protein,
        vitamin_c:vitamin_c,
        vitamin_a:vitamin_a,
        vitamins_and_minerals:vitamins_and_minerals,
        advantage:advantage,
        disadvantage:disadvantage,
        image: image,
        rating:rating,
        role: role,
        user:user,
        catagory: catagory
    })

    product.save(function (err, data) {
        if (err) {
            res.json({addSuccess, msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            addSuccess = true;
            res.json({addSuccess, msg: "Product Added", data: data, status: 200 })//http status code 
        }
    })
}
// Add Product by Admin where Approval is true 
module.exports.addProductByAdmin = function (req, res) {
    let product_name = req.body.product_name
    let description = req.body.description
    let fat = req.body.fat
    let calories = req.body.calories 
    let carbohydrates = req.body.carbohydrates 
    let fiber = req.body.fiber 
    let sugars = req.body.sugars
    let protein = req.body.protein
    let vitamin_c = req.body.vitamin_c
    let vitamin_a = req.body.vitamin_a
    let vitamins_and_minerals = req.body.vitamins_and_minerals
    let advantage = req.body.advantage
    let disadvantage = req.body.disadvantage
    let image = req.file.originalname;
    let rating = req.body.rating
    let role = req.body.role
    let catagory = req.body.catagory
    let addSuccessAdmin = false;

    let product = new ProductModel({
        product_name: product_name,
        description: description,
        fat:fat,
        calories:calories,
        carbohydrates:carbohydrates,
        sugars:sugars,
        fiber:fiber,
        protein:protein,
        vitamin_c:vitamin_c,
        vitamin_a:vitamin_a,
        vitamins_and_minerals:vitamins_and_minerals,
        advantage:advantage,
        disadvantage:disadvantage,
        image: image,
        rating:rating,
        role: role,
        catagory: catagory,
        isApproved:true
    })

    product.save(function (err, data) {
        if (err) {
            res.json({addSuccessAdmin, msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            addSuccess = true;
            res.json({addSuccessAdmin, msg: "Product Added", data: data, status: 200 })//http status code 
        }
    })
}


// Getall product [GET]
module.exports.getAllProduct = function (req, res) {

    ProductModel.find({isApproved:true}).populate("role").populate("catagory").populate("user").exec(function (err,product) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "List of all product...", data:product, status: 200 })//http status code 
        }
    })
}
// Get All Approval Product in Admin panal
module.exports.getAllProductForApproval = function (req, res) {
    ProductModel.find({isApproved:false}).populate("role").populate("catagory").populate("user").exec(function (err,product) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "List of all product...", data:product, status: 200 })//http status code 
        }
    })
}
//Get single product
module.exports.getOneProduct = function (req, res) {
    let productId = req.params.productId //postman -> userid 
    ProductModel.findOne({_id:productId}).populate("role").populate("catagory").populate("user").exec(function (err,product) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Single Product Show...", data:product, status: 200 })//http status code 
        }
    })
}

//delete product [delete]
module.exports.deleteProduct = function(req,res){
    //params userid 
    let productId = req.params.productId //postman -> userid 

    ProductModel.deleteOne({_id:productId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Product removed...", data: data, status: 200 })//http status code 
        }
    })
}

//Update the Product

module.exports.updateProduct = function(req,res){

    //update role set roleName = admin where roleId = 12121
    let productId = req.params.productId //postman -> userid 

    let product_name = req.body.product_name
    let description = req.body.description
    let fat = req.body.fat
    let calories = req.body.calories
    let carbohydrates = req.body.carbohydrates
    let sugars = req.body.sugars
    let fiber = req.body.fiber
    let protein = req.body.protein
    let vitamin_c = req.body.vitamin_c
    let vitamin_a = req.body.vitamin_a
    let vitamins_and_minerals = req.body.vitamins_and_minerals
    let advantage = req.body.advantage
    let disadvantage = req.body.disadvantage
    let updateSuceess = false;

    ProductModel.updateOne({_id:productId},{product_name:product_name,description:description,fat:fat,calories:calories,carbohydrates:carbohydrates,sugars:sugars,fiber:fiber,protein:protein,vitamin_a:vitamin_a, vitamin_c:vitamin_c, vitamins_and_minerals:vitamins_and_minerals,advantage:advantage,disadvantage:disadvantage}, function(err,data){
        if(err){
            res.json({updateSuceess, msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            updateSuceess = true;
            res.json({updateSuceess, msg:"Product updated...",status:200,data:data})
        }
    })
}

// Create Admin aprooval updation 
module.exports.updateProductApproval = function(req,res){

    //update role set roleName = admin where roleId = 12121
    let productId = req.params.productId //postman -> userid 
    ProductModel.updateOne({_id:productId},{isApproved:true},function(err,data){
        if(err){
            res.json({ msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({ msg:"Approval updated...",status:200,data:data})
        }
    })
}


module.exports.likeProduct = function(req,res){ 
// let userId = req.params.user._id
    ProductModel.findByIdAndUpdate(req.body.productId,{$push:{like:'addd'}},{new:true},function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {     
            res.json({ msg: "like add...", data:data, status: 200 })//http status code 
        }
    })
}
// comment
module.exports.commentProduct = function(req,res){ 
// let userId = req.params.user._id
let productId = req.params.productId 
    // const comment = {
    //     text:req.body.text
    // }
    let comment = req.body.text
    ProductModel.findByIdAndUpdate({_id:productId},{$push:{comments:comment}},{new:true},function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {     
            res.json({ msg: "like add...", data:data, status: 200 })//http status code 
        }
    })
}

// router.put('/like', (req,res)=>{

//     ProductModel.findByIdAndUpdate(req.body.productId, {
//         $push:{likes:req.body.user._id}
//     },{
//         new:true
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.send("like")        
//         }
//     })
//   })


// router.put('/unlike', (req,res)=>{
//     ProductModel.findByIdAndUpdate(req.body.productId, {
//         $pull:{likes:req.body.user._id}
//     },{
//         new:true
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     })
// })






// feddback
module.exports.addFeedbackProduct = async function (req, res) {

    let UserFeedback = req.body.feedback
    let FeedbackProduct = req.body.product
    // let FeedbackUser = req.body.user
    
    let feedback = await ProductModel.findOne({product: FeedbackProduct});
    if(feedback){ 
        feedback.feedback = [ ...feedback.feedback, UserFeedback ];
    } else {
        feedback = new ProductModel({
            feedback: UserFeedback,    
            product: FeedbackProduct    
        })
    }


    feedback.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Add feedback", data: data, status: 200 })//http status code 
        }
    })

}