import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminPanal } from './AdminPanal';

export const DisplayAllProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/getproduct', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setProduct(json.data)
        console.log(json.data);
    }, []);
    return (
        <div>
            <AdminPanal />
            <div className='mainPanalContaine '>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Catagory</th>
                       
                    </tr>
                </thead>
                <tbody>

                    {
                        product.map((item) => (
                            <tr>

                                <td>

                                <Link to={`/infoproduct/${item._id}`}><h4 className="card-text">{item.product_name}</h4></Link>

                                </td>
                                <td>

                                {item.catagory.CatagoryName}
                                </td>
                               
                            </tr>
                        ))
                    }


                </tbody>
            </table>
            </div>
        </div>
    )
}
