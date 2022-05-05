const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({

    product_name: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    fat: {
        type: String,
        // required: true
    },
    calories: {
        type: String,
        // required: true
    },
    carbohydrates: {
        type: String,
        // required: true
    },
    fiber: {
        type: String,
        // required: true
    },
    sugars: {
        type: String,
        // required: true
    },
    protein: {
        type: String,
        // required: true
    },
    vitamin_c: {
        type: String,
        // required: true
    },
    vitamin_a: {
        type: String,
        // required: true
    },
    vitamins_and_minerals: {
        type: String,
        // required: true
    },
    advantage: {
        type: String,
        
    },
    disadvantage: {
        type: String,
        
    },
        rating:[ {
        type: String,
        // required: true,
        ref:"product"
        }],
    
    like:[{
        type: String,
        ref:"user"
    }],
    isApproved: {
        type:Boolean,
        default:false
    },
    // feedback: [{
    //     type: String,
    //     required: true,      
    //     // default:"no feedback"
    // }],
    // recipe:[{

        recipeHeading:{
            type:String
        },
        step1:{
        type: String
        },
        step2:{
        type: String
        },
        step3:{
        type: String
        },
        step4:{
        type: String
        },
        step5:{
        type: String
        },
        step6:{
        type: String
        },
    // }],
    dailyeat:{
        type:String
    },
    
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"catagory"
    },
    image:{
        type:String,
        // required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        // require:true

    }
})


const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel 