const joi = require('joi')


const Schema = {


    role: joi.object({
        roleName : joi.string().required().max(500)
    })
}

module.exports = Schema;