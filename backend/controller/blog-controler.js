
const BlogModel = require("../models/blog-model")
const express = require('express')
// const router = express.Router()
// const nodemailer = require('nodemailer')

// Add Product by users where Approval is false
module.exports.addBlog = function (req, res) {
    let title = req.body.title
    let description = req.body.description
    let heading1 = req.body.heading1
    let heading2 = req.body.heading2
    let heading3 = req.body.heading3
    let heading4 = req.body.heading4
    let para1 = req.body.para1
    let para2 = req.body.para2
    let para3 = req.body.para3
    let para4 = req.body.para4
    
    
    let image = req.body.originalname
    let author = req.body.author
    


    let blog = new BlogModel({

        title: title,
        description:description,
        author:author,
        image:image,
        para1:para1,
        para2:para2,
        para3:para3,
        para4:para4,
        heading1:heading1,
        heading2:heading2,
        heading3:heading3,
        heading4:heading4


        
    })
 

    blog.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Blog is added", data: data, status: 200 })//http status code 
        }
    })
}
// Add recipes 

module.exports.getAllBlog = function (req, res) {

    BlogModel.find(function (err,data) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "List of all product...", data:data, status: 200 })//http status code 
        }
    })
}




module.exports.getOneblog = function (req, res) {
    let blogId = req.params.blogId //postman -> userid 
    BlogModel.findOne({_id:blogId}).exec(function (err,product) {
        if (err) {
            res.json({ msg: "Something Went Wrong ", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Single Product Show...", data:product, status: 200 })//http status code 
        }
    })
}

