const ProductModel = require("../models/product-model")



//add product [ POST ]
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
    // let image = req.body.image
    let role = req.body.role
    let catagory = req.body.catagory

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
        // image: image,
        role: role,
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


// Getall product [GET]
module.exports.getAllProduct = function (req, res) {

    ProductModel.find().populate("role").populate("catagory").exec(function (err,product) {
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
    ProductModel.findOne({_id:productId}).populate("role").populate("catagory").exec(function (err,product) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "List of all product...", data:product, status: 200 })//http status code 
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
    let productId = req.body.productId 
    let product_name = req.body.product_name
    let description = req.body.description
    let nutrition = req.body.nutrition
    let image = req.body.image
    let role = req.body.role
    let catagory = req.body.catagory

    ProductModel.updateOne({_id:productId},{product_name:product_name,description:description,nutrition:nutrition,image:image,role:role,catagory:catagory},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Product updated...",status:200,data:data})
        }
    })

}

