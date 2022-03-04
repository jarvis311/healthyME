import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const FetchProduct = () => {

    const [product, setProduct] = useState([])
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/getproduct', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        console.log(json);
        setProduct(json.data)
    },[]);

    return (
        <div>
            <form action="GET">
                <div className="row my-3 gy-3">
                {
                    product.map((item) => (
                       
                            <div className="col-sm-3 col-lg-2 col-md-4">
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.image} />
                                    <div className="card-body">
                                     
                                    <Link to={`/infoproduct/${item._id}`}><h4 className="card-text">{item.product_name}</h4></Link>
                                     <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        
                    ))

                }
                </div>

            </form>
        </div>
    )
}
