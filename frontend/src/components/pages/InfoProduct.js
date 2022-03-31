
import { React, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import image from '../Authantication/image/images.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const InfoProduct = () => {
    const [product, setProduct] = useState([])
    // const [productIdLocalStorage, setProductIdLocalStorage] = useState('')
    let { _id } = useParams();
    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/getoneproduct/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json(_id)
        console.log(json);
        setProduct(json.data)
        // setProductIdLocalStorage(localStorage.setItem('productId', json.data._id))
    }, []);


    const [credential, setCredential] = useState({ feedback: "", productId: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { feedback, productId } = credential;
        const response2 = await fetch('http://localhost:5000/addfeedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback, productId })
        });


        const json1 = await response2.json();
        console.log(json1);

        if (json1) {
            toast('feedback creating suceess')
        } else {
            alert("invalid Credential")
        }

    }

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }



    return (
        <div>
            <form action="GET">
                <div className="row my-3 gy-3">
                </div>
                <div className="card-wrapper">
                    <div className="card">

                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src={image} alt="shoe image" />

                                </div>
                                <form onSubmit={handleSubmit}>

                                    <div class="mb -3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" onChange={onchange} name='feedback' rows="3"></textarea>
                                    </div>
                                    <input type="text" onChange={onchange} name='productId' class="form-control" placeholder='Enter productId' />
                                    <input type='submit' className='btn btn-success' value='Post' />
                                    

                                </form>
                            </div>
                        </div>

                        <div className="product-content">
                            <h2 className="product-title">{product.product_name}</h2>
                            <h5>Catagory</h5>

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
                                            <td>{product.fat} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Calaries</th>
                                            <td>{product.calories} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Carbohydrates</th>
                                            <td>{product.carbohydrates} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Fiber</th>
                                            <td>{product.fiber} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Sugar</th>
                                            <td>{product.sugars} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Protrin</th>
                                            <td>{product.protein} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Vitamin C</th>
                                            <td>{product.vitamin_c} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Vitamin A</th>
                                            <td>{product.vitamin_a} <span className='grams'>grams</span> </td>
                                        </tr>
                                        <tr>
                                            <th>Minerals</th>
                                            <td>{product.vitamins_and_minerals} <span className='grams'>grams</span> </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h2>about this {product.product_name} </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>

                                <h2>Advantage </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                                <h2>DisAdvantage </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                            </div>
                            <p>Share At: </p>
                            <div className="social-links">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </form>
        </div>
    )
}