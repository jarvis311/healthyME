import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Logout } from './Logout';
import FadeLoader from "react-spinners/FadeLoader";
import img from '../Authantication/image/Banner.jpg'
import axios from 'axios';

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
    let [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)

    //     }, 3000);
    //   return () => {

    //   }
    // }, [])

    const [catid, setCatid] = useState('')
  const [catagory, setCatagory] = useState([]);

    // const [catagory, setcatagory] = useState([])
    const getCategories = async (e) => {
        
        await axios.get('http://localhost:5000/getcatagory').then((res)=>{
            setCatagory(res.data.data)
            setCatid(e.target.value)
            
        })
        
    }
    useEffect(() => {
        getCategories()
        return () => {   
        }
    }, [])
  

    let color = "red"
    return (
        <div>
            {
                loading ? <div className='loader'><FadeLoader color={color} /></div> : <>

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
                            <div className='bannerImage'>
                                <img src={img} alt="" />
                            </div>
                            {/* <select className='catagoruHome' name="catagory" onChange={(e) => { getCategories(e) }}>

                                <option>Select Catagory...  </option>
                                {
                                    catagory.map((cat) => {
                                        return (
                                            <>
                                                <option value={cat._id}> {cat.CatagoryName} </option>
                                            </>
                                        )
                                    })
                                }

                            </select> */}
                            {
                                product.filter((val) => {
                                    if (searchTerm === '') {
                                        return val
                                    }
                                    else if (
                                        val.product_name.toLowerCase().includes(searchTerm.toLowerCase())
                                       

                                    ) {
                                        return val
                                    }


                                }).map((item) => (

                                    <div className="col-sm-3 col-lg-2 col-md-4">
                                        <div className="card homecard">

                                            {/* <img src={item.image} className="card-img-top" alt={item.image} /> */}
                                            <img src={`http://localhost:5000/uploads/${item.image}`} alt="" />
                                            <div className="card-body">

                                                <Link to={`/infoproduct/${item._id}`}><h4 className="card-text">{item.product_name}</h4></Link>
                                                <p className="card-text">{(item.description).substring(0, 30)}..</p>
                                                {
                                                    email ? <><Link to={`updateproduct/${item._id}`}> <button className='btn btn-danger'>Update</button></Link></> : ''
                                                }
                                                {
                                                    email ? <><Link to={`deleteProduct/${item._id}`}> <button className='btn btn-danger'>Delete</button></Link></> : ''
                                                }
                                                <p>Add By <strong>{item.user.firstName}</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>


                    </form>

                </>
            }

        </div>
    )
}
