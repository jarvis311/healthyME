import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminPanal } from './AdminPanal'

export const GetAllUserAdminPanal = () => {
   

    const [product, setProduct] = useState([])
    useEffect(async () => {
        const response = await fetch('http://localhost:5000/getuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setProduct(json.data)
        console.log(typeof product);
        console.log(json.data);
    }, []);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>",product);
    return (
        <div>
            <AdminPanal/>
            <div className='mainPanalContaine'>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Edit</th>
                       
                    </tr>
                </thead>
                <tbody> 
 
                     {
                         product.map((item)=>(
                             <tr>

                             <td>{item.firstName}</td>
                             <td>{item.email}</td>
                             <td>{item.role.roleName}</td>
                             <td>
                             <Link to={`/deleteUser/${item._id}`}> <button className='btn btn-danger'>Delete</button></Link>
                             <input type="button" className='btn btn-danger mx-2' value='Edit' /></td>
                    </tr>
                         )

                         )
                     }
                        
                  
                </tbody>
            </table>
            </div>
        </div>
    )
}
