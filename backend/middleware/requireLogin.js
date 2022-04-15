const jwt = require('jsonwebtoken')
JWT_SECT = "iamjwtkey07"
const mongoose = require('mongoose')
const UserModel = require("../models/user-model")
module.exports = (req,res, next) =>{
    const {authorization} = req.headers
    if(!authorization) {
       return res.status(401).json({error:"You must be login First"})
    }
   const token = authorization.replace("Bearer ", "")
   jwt.verify(token, JWT_SECT, (err,payload)=>{
       if(err){
          return res.status(401).json({error:"You must be login"})
       }
       const {_id} = payload
       UserModel.findById(_id).then(userdata =>{
           req.user = userdata
       })
       next()
   })
}
