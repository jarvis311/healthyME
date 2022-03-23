const joi = require('joi')


const Schema = {


    user: joi.object({
        firstName : joi.string().min(3).max(50).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).pattern(new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$")).required(),
        role: joi.string().required()
    })
}

module.exports = Schema;