import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, WhatsappIcon, EmailIcon, TwitterIcon } from 'react-share'
import { ReviweStart } from './Rating/ReviweStart';
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
        console.log(json.data);
        setLikeCount(json.data.like.length)
        setProductIdLocalStorage(localStorage.setItem('productId', json.data._id))
    }, []);

    //Post Product Feedback

    

   
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
        localStorage.getItem('productId')
    }, []);
    // console.log(getFeedback);
    
    const like = (_id) => {
        fetch('http://localhost:5000/like', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            },
            body: JSON.stringify({
                productId: _id
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            
                   
            <div className="row my-3 gy-3">
            </div>
            <div className="card-wrapper">
                <div className="card">

                    <div className="product-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src={`http://localhost:5000/uploads/${productInfo.image}`}  alt="shoe image" />

                            </div>

                        </div>
                        <form action="" >

                            <div className="mb-3">
                                <label htmlFor="feddback" className="form-label">Feedback</label>
                                <textarea className="form-control" id="comments" name='comments' rows="3"></textarea>
                            </div>
                            <button type='submit' className='btn btn-success'>Post</button>
                        </form>
                        <div className="feedbackShow">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dicta.</p>
                            <p>{`${getFeedback.feedback}`}</p>
                           
                               

                        </div>
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
                                        <th>Calaries</th>
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
                                        <th>Protrin</th>
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
                        </div>
                        {/* <h1>{productInfo.user.firstNamex}</h1> */}

                        <div>

                        </div>
                        <h4><i className="fas fa-thumbs-up" onClick={() => { like(productInfo.like._id) }}>&nbsp;&nbsp;</i>
                            <i className="fas fa-thumbs-down"></i></h4>

                        <h5>{likeCount} Likes</h5>
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
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}