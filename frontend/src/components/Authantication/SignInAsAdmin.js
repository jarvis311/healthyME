
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from './image/Admin.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignInAsAdmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();
        console.log(json);
       
            if (json.success && json.data.role.roleName === 'admin') {
                localStorage.setItem('abcd',email)
                localStorage.setItem('token',"tokennnnnnnnnnnnnn")
                localStorage.setItem('Role',json.data.role.roleName)
                localStorage.setItem('userId',json.data._id)
                toast(json.msg)
                setTimeout(() => {
                    navigate('/')
                    window.location.reload();
                }, 2000);
            }else{
                toast(json.msg)
            }
      
       

    }
    
    const onchangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onchangePassword = (e) => {
        setPassword(e.target.value)
    }

  return (
    <div>
         <div className="container-fluid UserLogin" >


<section className="side">
    <img src={image1} alt="sdf" />
</section>

<section className="main">
    <div className="login-container">
        <p className="title">Welcome back Admin</p>
        <div className="separator"></div>
        <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

        <form className="login-form" onSubmit={handleSubmit}>
            <div className="user-form-control">
                <input type="email" placeholder="Admin Email"  onChange={(e)=>{onchangeEmail(e)}} id="email" name='email' />
                <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="user-form-control">
                <input type="password" placeholder="Admin Password" onChange={(e)=>{onchangePassword(e)}} id="password" name='password' />
                <i className="fas fa-lock"></i>
            </div>
         <button type='submit' className="submit">Login As Admin</button>
            <ToastContainer />
        </form>
    </div>
</section>

</div>

    </div>
  )
}
