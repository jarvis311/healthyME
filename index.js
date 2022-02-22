const express = require("express");
const mongoose = require("mongoose");

const sessionController = require("./controller/session-controller");
const roleController = require("./controller/role_comtroler");
const userController = require("./controller/user-controler");
const productController = require("./controller/product-controler")
const catagoryController = require("./controller/catagory-controler")
const feedbackController = require("./controller/feedback-controler")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/healthymedb',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)



//user 
app.post("/users",userController.addUser)
app.get("/getuser",userController.getAllUsers)
app.put("/update",userController.updateUser)
app.delete("/users/:userId",userController.deleteUser)

//Catagory

app.post("/catagory",catagoryController.addUCatagory)
app.get("/getcatagory",catagoryController.getAllCatagory)
app.delete("/catagory/:catagoryId",catagoryController.deleteCatagory)

// product 

app.post("/addproduct",productController.addProduct)
app.get("/getproduct",productController.getAllProduct)
app.put("/updateproduct",productController.updateProduct)
app.delete("/product/:productId",productController.deleteProduct)

// feedback

app.post("/addfeedback",feedbackController.addFeedback)
app.get("/getfeedback",feedbackController.getAllFeedback)
app.put("/updatefeedback",feedbackController.updateFeedback)
app.delete("/feedback/:feedbackId",feedbackController.deleteFeedback)



//server 
app.listen(3000,function(){
  console.log("server started on 3000");  
})