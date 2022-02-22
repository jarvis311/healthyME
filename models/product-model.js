const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({

    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    nutrition: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"catagory"
    }
})


const ProductModel = mongoose.model("product", UserSchema)
module.exports = ProductModel 