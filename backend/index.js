const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const multer = require('multer')


let storage = multer.diskStorage({
  destination: function(req, file, next){
    next(null, './uploads')
  },
  filename: function(req,file,next) {
    next(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
  }
})

let upload = multer({
  storage : storage,
}).single('image');




const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role_comtroler");
const userController = require("./controller/user-controler");
const productController = require("./controller/product-controler")
const catagoryController = require("./controller/catagory-controler")
const feedbackController = require("./controller/feedback-controler");
const { addUserValidation, loginUserValidation, productValidation, roleValidation} = require("./validation/userValidation");


const app = express();
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  
app.use(cors())

//database 
mongoose.connect('mongodb://localhost:27017/healthymedb',function(err){
  if(err){
    console.log("db connection fail...");
    console.log(err);
  }
})

//All urls  

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleValidation, roleController.addRole)
app.get("/getroles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/updateroles",roleController.updateRole)



//user 
app.post("/users", addUserValidation, userController.addUser)
app.get("/getuser",userController.getAllUsers)
app.put("/updateuser",userController.updateUser)
app.delete("/deleteusers/:userId",userController.deleteUser)
app.post("/login",loginUserValidation,userController.login)
//Catagory

app.post("/catagory",catagoryController.addUCatagory)
app.get("/getcatagory",catagoryController.getAllCatagory)
app.put("/updateCatagory",catagoryController.updateCatagory)
app.delete("/catagory/:catagoryId",catagoryController.deleteCatagory)

// product 

app.post("/addproduct", productController.addProduct)
app.get("/getproduct",productController.getAllProduct)
app.get("/getoneproduct/:productId",productController.getOneProduct)
app.put("/updateproduct",productController.updateProduct)
app.delete("/product/:productId",productController.deleteProduct)

// feedback

app.post("/addfeedback",feedbackController.addFeedback)
app.get("/getfeedback",feedbackController.getAllFeedback)
app.put("/updatefeedback",feedbackController.updateFeedback)
app.delete("/feedback/:feedbackId",feedbackController.deleteFeedback)



//server 
app.listen(5000,function(){
  console.log("server started on 5000");  
})