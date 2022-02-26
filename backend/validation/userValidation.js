
const { product } = require("./addProduct");
const { user } = require("./addUser");
const { loginUser } = require("./loginUser");
const {role } = require("./addRole")
// const Schema = require("./user");

module.exports = {
    // Add users 
    addUserValidation : async (req, res, next) =>{
        const value = await user.validate(req.body)
        if(value.error){
            res.json({
                success:0,
                message: value.error.details[0].message 
            })
        }else{
            next();
        }
    },
    // Login USer 
    loginUserValidation : async (req, res, next) =>{
        const value = await loginUser.validate(req.body)
        if(value.error){
            res.json({
                success:0,
                message: value.error.details[0].message 
            })
        }else{
            next();
        }
    },
    //Add Product validation 
    productValidation : async (req, res, next) =>{
        const value = await product.validate(req.body)
        if(value.error){
            res.json({
                success:0,
                message: value.error.details[0].message 
            })
        }else{
            next();
        }
    },
    roleValidation : async (req, res, next) =>{
        const value = await role.validate(req.body)
        if(value.error){
            res.json({
                success:0,
                message: value.error.details[0].message 
            })
        }else{
            next();
        }
    }
}

