const mongoose = require("mongoose")


//schema 
let RoleSchema = new mongoose.Schema({
    roleName:{
        type:String
    }
})

//model 
let RoleModel = mongoose.model("role",RoleSchema) //roles 

module.exports = RoleModel 





// module.exports.addRole = function (req,res){
//     //db insert role 
//     console.log(req.body.roleName);
//     res.json({msg:"role added",status:200,data:req.body})
// }
   