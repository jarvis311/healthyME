import { React, useState, useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom';
import { getProduct } from '../service/Api';



export const InfoProduct = () => {
    const [product, setProduct] = useState([])
    let {_id} = useParams();
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
    },[]);

    return (
        <div>
            <form action="GET">
                <div className="row my-3 gy-3">
                {
                    

                }
                </div>

            </form>
        </div>
    )
}