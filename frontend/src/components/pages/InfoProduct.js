import { React, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
//import { getProduct } from '../service/Api';
import image from '../Authantication/image/images.png'
import { Feedback } from './Feedback';

export const InfoProduct = () => {
    const [product, setProduct] = useState([])
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
    }, []);

    return (
        <div>
            <form action="GET">
                <div className="row my-3 gy-3">
                    {/* {
                    <div>

                        <p>{product.product_name}</p>
                        <p>{product.fat}</p>
                    </div>
                } */}
                </div>
                <div className="card-wrapper">
                    <div className="card">

                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src={image} alt="shoe image" />

                                </div>
                            </div>
                            {
                                <Feedback/>
                            }

                        </div>



                        <div className="product-content">
                            <h2 className="product-title">{product.product_name}</h2>
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
                                            <td>{product.fat}</td>
                                        </tr>
                                        <tr>
                                            <th>Calaries</th>
                                            <td>{product.calories}</td>
                                        </tr>
                                        <tr>
                                            <th>Carbohydrates</th>
                                            <td>{product.carbohydrates}</td>
                                        </tr>
                                        <tr>
                                            <th>Fiber</th>
                                            <td>{product.fiber}</td>
                                        </tr>
                                        <tr>
                                            <th>Sugar</th>
                                            <td>{product.sugars}</td>
                                        </tr>
                                        <tr>
                                            <th>Protrin</th>
                                            <td>{product.protein}</td>
                                        </tr>
                                        <tr>
                                            <th>Vitamin C</th>
                                            <td>{product.vitamin_c}</td>
                                        </tr>
                                        <tr>
                                            <th>Vitamin A</th>
                                            <td>{product.vitamin_a}</td>
                                        </tr>
                                        <tr>
                                            <th>Minerals</th>
                                            <td>{product.vitamins_and_minerals}</td>
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

            </form>
        </div>
    )
}