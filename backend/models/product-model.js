const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({

    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fat: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    carbohydrates: {
        type: String,
        required: true
    },
    fiber: {
        type: String,
        required: true
    },
    sugars: {
        type: String,
        required: true
    },
    protein: {
        type: String,
        required: true
    },
    vitamin_c: {
        type: String,
        required: true
    },
    vitamin_a: {
        type: String,
        required: true
    },
    vitamins_and_minerals: {
        type: String,
        required: true
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


const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel 