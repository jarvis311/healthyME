const joi = require('joi')


const Schema = {


    loginUser: joi.object({
        
        email: joi.string().email().required(),
        password: joi.string().min(3).pattern(new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$")).required()
        
    })
}

module.exports = Schema;