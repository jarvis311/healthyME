import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { AdminPanal } from '../pages/AdminPanal';

export const AddBlog = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [para1, setPara1] = useState('')
    const [para2, setPara2] = useState('')
    const [para3, setPara3] = useState('')
    const [para4, setPara4] = useState('')
    const [heading1, setHeading1] = useState('')
    const [heading2, setHeading2] = useState('')
    const [heading3, setHeading3] = useState('')
    const [heading4, setHeading4] = useState('')
    // const [image, setImage] = useState('')

    const handleSubmitForBlog = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("para1", para1);
        formData.append("para2", para2);
        formData.append("para3", para3);
        formData.append("para4", para4);
        formData.append("heading1", heading1);
        formData.append("heading2", heading2);
        formData.append("heading3", heading3);
        formData.append("heading4", heading4);
        formData.append("author", author);

        // formData.append("image", image);


        axios.post('http://localhost:5000/addblog', formData)
            .then((res) => {

                toast("Blog Add Succesfull")
                console.log(res.data)
                setTimeout(() => {
                    navigate('/getblog')
                }, 2000);

            })

    }
  const [email, setemail] = useState('')

    useEffect(() => {

        setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')
    
      }, [])
    return (
           
        <MainContainerAddBlog>
             {
             email ? <> 
                <AdminPanal />
            <div className='mainPanalContaine'>


            </div>
            <div className="container-1"><div className=" text-center mt-5 ">
            </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container-2">

                                    <form id="contact-form" onSubmit={handleSubmitForBlog} role="form">
                                        <h1>Add a Blog</h1>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">Heading of blog</label>
                                                        <input id="form_name" type="text" onChange={(e) => setTitle(e.target.value)} value={title} name='title' className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group"> <label htmlFor="form_message">Blog description</label>
                                                            <textarea id="form_message" onChange={(e) => setDescription(e.target.value)} value={description} name='description' className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">Heading Of paragraph 1</label>
                                                        <input id="form_name" type="text" onChange={(e) => setPara1(e.target.value)} value={para1} name='para1' className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                <div className="col-md-12">
                                                        <div className="form-group"> <label htmlFor="form_message">Paragraph 1</label>
                                                            <textarea id="form_message" onChange={(e) => setHeading1(e.target.value)} value={heading1} name='heading1' className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">Heading Of paragraph 2</label>
                                                        <input id="form_name" type="text" onChange={(e) => setPara2(e.target.value)} value={para2} name='para2' className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                <div className="col-md-12">
                                                        <div className="form-group"> <label htmlFor="form_message">Paragraph 2</label>
                                                            <textarea id="form_message" onChange={(e) => setHeading2(e.target.value)} value={heading2} name='heading2' className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">Heading Of paragraph 3</label>
                                                        <input id="form_name" type="text" onChange={(e) => setPara3(e.target.value)} value={para3} name='para3' className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                <div className="col-md-12">
                                                        <div className="form-group"> <label htmlFor="form_message">Paragraph 3</label>
                                                            <textarea id="form_message" onChange={(e) => setHeading3(e.target.value)} value={heading3} name='heading3' className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">Heading Of paragraph 4</label>
                                                        <input id="form_name" type="text" onChange={(e) => setPara4(e.target.value)} value={para4} name='para4' className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                                </div>
                                                <div className="col-md-12">
                                                        <div className="form-group"> <label htmlFor="form_message">Paragraph 4</label>
                                                            <textarea id="form_message" onChange={(e) => setHeading4(e.target.value)} value={heading4} name='heading4' className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                                    </div>
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_lastname">Author Name</label>
                                                        <input id="form_lastname" type="text" onChange={(e) => setAuthor(e.target.value)} value={author} name='author' className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_lastname">Image</label>
                                                     <input id="form_lastname" type="file" onChange={(e) => setImage(e.target.value)}  value={image} name='image'  className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                                </div> */}
                                                    <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Send Message" /> </div>

                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
             </> : <><ErrorPage/> </>
            }
           
        </MainContainerAddBlog>


    )
}

const MainContainerAddBlog = styled.div
    `
.container-1{
    height: 80vh;
}
h1 {
    margin-bottom: 40px
}

label {
    color: #333
}

.btn-send {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    width: 80%;
    margin-left: 3px
}

.help-block.with-errors {
    color: #ff5050;
    margin-top: 5px
}

.card {
    margin-left: 10px;
    margin-right: 10px
}

`