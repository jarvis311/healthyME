import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminPanal } from './AdminPanal';
export const CreateAdmin = () => {

    const [credential, setCredential] = useState({ firstName: "", email: "", password: "", role: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, password, role } = credential;
        const response = await fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, email, password, role: "620cbc4f650d9ecba3728abe" })
        });
        

        const json = await response.json();
        console.log(json);

        if (json.register) {
            toast('Admin creating suceess')
        } else {
            toast('invalid Credential')
        }   
    }

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const [email, setemail] = useState('')
    
    useEffect(() => {
      
        setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')  
        
    },[] )
  

    return (
        <div>
            {
                email ? <>
                
                <AdminPanal />
            <form action="" className='mainPanalContaine' onSubmit={handleSubmit}>

            <div className="mb-3 col-md-6">
                <label for="name" className="form-label">Admin Name</label>
                
                  <input type="text"  className="form-control" onChange={onchange} id="firstName" name='firstName' />
            </div>
            <div className="mb-3 col-md-6">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email"onChange={onchange}  className="form-control" id="exampleFormControlInput1"name='email' />
            </div>
            <div className="mb-3 col-md-6">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onchange} id="password" name='password' />

            </div>
            <button type='submit' className="submit1 btn btn-primary">Register</button>
        <ToastContainer/>
            </form>

                
                
                </>  : <h1>Please Login as Admin</h1>
            }
             
        </div>
    )
}
