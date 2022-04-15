import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminPanal } from './AdminPanal';


export const AddingCatagory = () => {
    const [catagory, setCatagory] = useState('')

    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/catagory`, {
            CatagoryName: catagory.CatagoryName,
            role: "620cbc4f650d9ecba3728abe"
        }).then(res => {
            toast("Catagory is Added")
            setTimeout(() => {
                navigate('/adminpanal')    
            }, 2000);
            console.log(res.data);
        })
    }

    const handel = (e) => {
        const newdata = { ...catagory }
        newdata[e.target.name] = e.target.value
        setCatagory(newdata)
       
    }



    const [email, setemail] = useState('')

    useEffect(() => {

        setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')

    }, [])


    return (
        <div >
            {
                email ?
                    <>
                        <AdminPanal />
                        <div className='mainPanalContaine '>
                            <form action="" className='addcatagoryadmin' onSubmit={submit}>
                                <div className="col-md-3">
                                    <label for="feddback" className="form-label">Add Catagory</label>
                                    <input type="text" id="feedback" value={catagory.catagoryName} name='CatagoryName' className="form-control " onChange={(e) => handel(e)} />
                                </div>
                                <button type='submit' className='btn btn-success my-3'>Add Catagory</button>
                                <ToastContainer />
                            </form>
                        </div>
                    </> : <h1>Please Login as Admin</h1>
            }

        </div>
    )
}
