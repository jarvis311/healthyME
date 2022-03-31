import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import image1 from '../Authantication/image/nutrition.jfif';
import { Logout } from './Logout';


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
        setProduct(json.data)
        console.log(json.data);
    }, []);

    const [searchTerm, setsearchTerm] = useState('');
    const [email, setemail] = useState('')


    useEffect(() => {
        if (localStorage.getItem('Role') === 'admin') {
            setemail(localStorage.getItem('abcd'))
        } else {
            setemail(null)
        }
    }, [])

    
    return (
        <div>
            <Logout />
            <form>
                <div className="row my-3 gy-3">
                    <div className='searchContainer'>
                        <section className="webdesigntuts-workshop">
                            <form>

                                <input type="search" onChange={(e) => setsearchTerm(e.target.value)} placeholder="Search Any Product..." />
                            </form>
                        </section>
                    </div>
                    {
                        product.filter((val) => {
                            if (searchTerm === '') 
                            {
                                return val
                            } 
                            else if (
                                val.product_name.toLowerCase().includes(searchTerm.toLowerCase())
                                //   val.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                //   val.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                //   val.email.toLowerCase().includes(searchTerm.toLowerCase()) 

                            ) { 
                                return val 
                            }
                            
                               
                        }).map((item) => (

                            <div className="col-sm-3 col-lg-2 col-md-4">
                                <div className="card">
                                    {/* <img src={item.image} className="card-img-top" alt={item.image} /> */}
                                    <img src={image1} alt="" />
                                    <div className="card-body">

                                        <Link to={`/infoproduct/${item._id}`}><h4 className="card-text">{item.product_name}</h4></Link>
                                        <p className="card-text">{item.description}</p>
                                        {
                                            email ? <><Link to={`updateproduct/${item._id}`}> <button className='btn btn-danger'>Update</button></Link></> : ''
                                        }
                                        {
                                            email ? <><Link to={`deleteProduct/${item._id}`}> <button className='btn btn-danger'>Delete</button></Link></> : ''
                                        }
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
