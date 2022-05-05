// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const ShowBlog = () => {

    const [blog, setBlog] = useState([])
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/getallblog', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setBlog(json.data)
        // console.log(typeof product);
        console.log(json.data);
    }, []);

    return (
        <MainContainerBlog>
            <div>



                <section class="blog-me pt-100 pb-100" id="blog">
                    <div class="container-2">
                        <div class="row">
                            <div class="col-xl-6 mx-auto text-center">
                                <div class="section-title mb-100">
                                    <h4>latest blog</h4>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            {
                                blog.map((item) => (
                                    <div class="blog col-lg-4 col-md-6">
                                        <div class="single-blog">
                                            <div class="blog-img">
                                                <img src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg" alt="" />
                                                
                                            </div>
                                            <div class="blog-content">
                                                <div class="blog-title">
                                                    <h4><Link to={`/singleblog/${item._id}`}><h4 className="card-text">{item.title}</h4></Link></h4>
                                                    <div class="meta">
                                                        <ul>
                                                            <li>{item.author}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p>{(item.description).substring(0, 30)}</p>
                                                <a href="#" class=""></a>
                                                <Link to={`/singleblog/${item._id}`} className="card-text box_btn">read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </MainContainerBlog>

















    )
}


const MainContainerBlog = styled.div
    `
.pb-100 {
	padding-bottom: 100px;
}
.blog-me{
    width:100%;
}
.blog{
    width:400px;

}
.pt-100 {
	padding-top: 100px;
}
.mb-100 {
	margin-bottom: 100px;
}
a {
	text-decoration: none;
	color: #333;
	-webkit-transition: .4s;
	transition: .4s;
}
.section-title {
	position: relative;
}
.section-title p {
	font-size: 16px;
	margin-bottom: 5px;
	font-weight: 400;
}
.section-title h4 {
	font-size: 40px;
	font-weight: 600;
	text-transform: capitalize;
	position: relative;
	padding-bottom: 20px;
	display: inline-block;
}
.section-title h4::before {
	position: absolute;
	content: "";
	width: 80px;
	height: 2px;
	background-color: #d8d8d8;
	bottom: 0;
	left: 50%;
	margin-left: -40px;
}
.section-title h4::after {
	position: absolute;
	content: "";
	width: 50px;
	height: 2px;
	background-color: #FF7200;
	left: 0;
	bottom: 0;
	left: 50%;
	margin-left: -25px;
}
.blog-img {
	position: relative;
}
.blog-img img {
	width: 100%;
}
.post-category a {
	display: inline-block;
	background-color: #FF7200;
	color: #fff;
	font-size: 15px;
	padding: 5px 20px;
}
.single-blog:hover img {
	opacity: .85;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)"
}
.post-category {
	position: absolute;
	left: 0;
	bottom: 0;
}
.blog-content {
	padding: 30px 20px;
}
.single-blog {
	border: 1px solid #eee;
}
.blog-title h4 {
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 5px;
}
.meta ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
.meta {
	margin-bottom: 20px;
	opacity: .85;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
}
.blog-content a.box_btn {
	display: inline-block;
	background-color: #FF7200;
	padding: 5px 15px;
	color: #fff;
	text-transform: capitalize;
	margin-top: 20px;
}
a.box_btn::before {
	position: absolute;
	content: "";
	width: 100%;
	height: 100%;
	background-color: #CC5B00;
	left: -100%;
	top: 0;
	-webkit-transition: .5s;
	transition: .5s;
	z-index: -1;
}
a.box_btn {
	overflow: hidden;
	z-index: 2;
	-webkit-transition: .5s;
	transition: .5s;
	position: relative;
	text-decoration:none;
}
a.box_btn:hover::before {
	left: 0;
	z-index: -1;
}



`
