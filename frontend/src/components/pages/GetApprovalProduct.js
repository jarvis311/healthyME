import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminPanal } from './AdminPanal';
import { ErrorPage } from './ErrorPage';

export const GetApprovalProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/getApprovalProduct', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setProduct(json.data)
        console.log(json.data);
    }, []);


    const [email, setemail] = useState('')

    useEffect(() => {

        setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')

    }, [])


    return (
        <div>
            {
                email ? <>

                    <AdminPanal />
                    <div className='mainPanalContaine'>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">desc</th>
                                    <th scope="col">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    product.map((item) => (
                                        <tr className=''>

                                            {/* <td>{item.product_name}</td> */}
                                            <td>
                                                <Link to={`/infoproduct/${item._id}`}><h4 className="card-text">{item.product_name}</h4></Link>
                                            </td>
                                            <td>{(item.description).substring(0,30)}...</td>
                                            <td> <Link to={`/updateapprove/${item._id}`}><button className='btn btn-primary mx-1' >Accept</button></Link> 
                                                 <Link to={`/denialApproval/${item._id}`}><button className='btn btn-danger'>Denial</button></Link>
                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </> : <h1><ErrorPage/></h1>}

        </div>
    )
}
