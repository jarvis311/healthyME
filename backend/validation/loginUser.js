const joi = require('joi')


const Schema = {


    loginUser: joi.object({
        
        email: joi.string().email().required(),
        password: joi.string().min(3).pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*]{6,16}$")).required()
        
    })
}

module.exports = Schema;