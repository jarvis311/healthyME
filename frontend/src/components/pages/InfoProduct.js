import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, WhatsappIcon, EmailIcon, TwitterIcon } from 'react-share'
import { ReviweStart } from './Rating/ReviweStart';
import styled from 'styled-components'

export const InfoProduct = () => {


    const [productInfo, setProductInfo] = useState([])
    const [productIdLocalStorage, setProductIdLocalStorage] = useState('')
    let { _id } = useParams();

    const [likeCount, setLikeCount] = useState([])
    // Get All Product Information
    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/getoneproduct/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json(_id)
        setProductInfo(json.data)
        // console.log(json.data);
        setLikeCount(json.data.like.length)
        setProductIdLocalStorage(localStorage.setItem('productId', json.data._id))
    }, []);

    //Post Product Feedback
    let feedback =
    {
        comment: "",
        user: "",
        email:""
    }

    let user = localStorage.getItem('userId')
    let email = localStorage.getItem('abcd')
    
    const [feed, setfeed] = useState(feedback)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(feed);

        // const { feedback, product} = feed;
        const response = await fetch('http://localhost:5000/addfeedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback: feed, product: _id, user: user })
        });
        window.location.reload();
        const json = await response.json();
        console.log(json);

    }

    const onchange = (e) => {
        // console.log(e.target);
        let { comment } = feed;
        comment = e.target.value;
        setfeed({ comment: comment, user:user, email:email });
        console.log(">>>>>>", feed);
    }



    // Get all Product Feedback 
    const [getFeedback, setGetFeedback] = useState([])
    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/getfeedback/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setGetFeedback(json.data)
        // console.log(">>>>",getFeedback);
        // console.log(json.data);
        localStorage.getItem('productId')
    }, []);
    console.log(">>>>",getFeedback.feedback);

    // const like = (_id) => {
    //     fetch('http://localhost:5000/like', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + localStorage.getItem('token')
    //         },
    //         body: JSON.stringify({
    //             productId: _id
    //         })
    //     }).then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // }

    return (
        <div>
            
            <div className="row my-3 gy-3">
            </div>
            <div className="card-wrapper">
                <div className="card" >

                    <div className="mx-3 product-imgs" style={{ border: "none" }}>
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src={`http://localhost:5000/uploads/${productInfo.image}`} alt="shoe image" />

                            </div>

                        </div>
                        <form action="" className='my-5' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="feddback" className="form-label">Post Feedback</label>
                                <textarea className="form-control" onChange={onchange} id="feedback" name='feedback' rows="3"></textarea>
                            </div>
                            <button type='submit' className='btn btn-success'>Post</button>
                        </form>
                        <FeedbackContainer>
                            <h3>All Feedback</h3>
                            <div className="feedbackShow">
                                {/* <div class="container justify-content-center mt-5 border-left border-right"> */}
                                {getFeedback.feedback?.map((item) =>
                                    <div class="d-flex justify-content-center py-2">
                                        <div class="second py-2 px-2"> <span class="text1">{item?.comment} <br />posted by {item.email}</span>
                                        </div>
                                    </div>
                                )}

                                {/* </div> */}
                            </div>
                        </FeedbackContainer>

                    </div>


                    <div className="product-content">
                        <h2 className="product-title">{productInfo.product_name}</h2>


                        <div className="product-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>4.7(21)</span>
                        </div>

                        <div className="product-detail">

                            <table className="table table-bordered border-secondary nutrationTable">
                                <thead>
                                    <tr>
                                        <th className='text-center title' colSpan="10">Nutrition Fact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Fat</th>
                                        <td>{productInfo.fat} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>calories</th>
                                        <td>{productInfo.calories} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Carbohydrates</th>
                                        <td>{productInfo.carbohydrates} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Fiber</th>
                                        <td>{productInfo.fiber} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Sugar</th>
                                        <td>{productInfo.sugars} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>protein</th>
                                        <td>{productInfo.protein} <span className='grams'>grams</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Vitamin C</th>
                                        <td>{productInfo.vitamin_c} <span className='grams'>mg</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Vitamin A</th>
                                        <td>{productInfo.vitamin_a} <span className='grams'>mg</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Calcium</th>
                                        <td>{productInfo.vitamins_and_minerals} <span className='grams'>mg</span> </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>About this {productInfo.product_name} </h2>
                            <p>{productInfo.description}</p>
                            <h2>Advantage</h2>
                            <p>{productInfo.advantage}</p>
                            <h2>DisAdvantage </h2>
                            <p>{productInfo.disadvantage}</p>
                            <h2>Is eating {productInfo.product_name} daily healthy? </h2>
                            <p>{productInfo.dailyeat}</p>
                        </div>
                        {/* <h1>{productInfo.user.firstName}</h1> */}

                        <div>
                            <div class="accordion" id="accordionExample">


                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Show Recipes</button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                          <h1>Recipes of {productInfo.recipeHeading}</h1>
                                          <ul>
                                              <li>{ productInfo.step1}</li>
                                              <li>{ productInfo.step2}</li>
                                              <li>{ productInfo.step3}</li>
                                              <li>{ productInfo.step4}</li>
                                              <li>{ productInfo.step5}</li>
                                              <li>{ productInfo.step6}</li>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <h4><i className="fas fa-thumbs-up" onClick={() => { like(productInfo.like._id) }}>&nbsp;&nbsp;</i>
                        <i className="fas fa-thumbs-down"></i></h4> */}
                        {/* <h5>{likeCount} Likes</h5> */}
                        <ReviweStart />
                        <h4>Share On: </h4>
                        <div className="social-links">
                            <div>
                                <FacebookShareButton url={window.location.href} quote='Check this product'>
                                    <FacebookIcon size={50} round={true}></FacebookIcon>
                                </FacebookShareButton>
                                <WhatsappShareButton url={window.location.href} quote={'Check this product'}>
                                    <WhatsappIcon size={50} round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                                <EmailShareButton url={window.location.href} quote={'Check this product'}>
                                    <EmailIcon size={50} round={true}></EmailIcon>
                                </EmailShareButton>
                                <TwitterShareButton url={window.location.href} quote='Check this product'>
                                    <TwitterIcon size={50} round={true}></TwitterIcon>
                                </TwitterShareButton>
                            </div>

                        </div>
                    </div>
                    <div className='container-2'>
                        <Link to={`/addrecipes/${productInfo._id}`}><button className='btn btn-primary'>Add Recipice</button></Link>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}


const FeedbackContainer = styled.div
    `
.container {
    background-color: #eef2f5;
    width: 400px
}

.form-control:focus {
    color: #000
}

.second {
    width: 30vw;
    background-color: rgb(253, 233, 233);
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px #aaaaaa
}

.text1 {
    font-size: 13px;
    font-weight: 500;
    color: #56575b
   
}

.thumbup {
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px
}

.thumbupo {
    color: #17a2b8
}

`