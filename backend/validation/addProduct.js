const joi = require('joi')


const Schema = {


    product : joi.object({
        
        product_name :joi.string().min(3).max(100).required(),
        description :joi.string().min(3).required(),
        nutrition :joi.string().min(3).required(),
        image :joi.string().required(),
        role :joi.string().required(),
        catagory:joi.string().required()

        
    })
}

module.exports = Schema;