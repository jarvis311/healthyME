const ProductModel = require("../models/product-model")



//add product [ POST ]
module.exports.addProduct = function (req, res) {

    let product_name = req.body.product_name
    let description = req.body.description
    let nutrition = req.body.nutrition
    let image = req.body.image
    let role = req.body.role
    let catagory = req.body.catagory


    let product = new ProductModel({
        product_name: product_name,
        description: description,
        nutrition: nutrition,
        image: image,
        role: role,
        catagory: catagory
    })

    product.save(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "signup done", data: data, status: 200 })//http status code 
        }
    })
}


// Getall product [GET]
module.exports.getAllProduct = function (req, res) {

    ProductModel.find().populate("role").populate("catagory").exec(function (err,product) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data:product, status: 200 })//http status code 
        }
    })
}

//delete product [delete]
module.exports.deleteProduct = function(req,res){
    //params userid 
    let productId = req.params.productId //postman -> userid 

    ProductModel.deleteOne({_id:productId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

// Update the Product

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
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}

