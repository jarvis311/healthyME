import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from './image/img2.svg'
export const SignUpUser = () => {

    const [credential, setCredential] = useState({ firstName: "", email: "", password: "", role: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, password, role } = credential;
        const response = await fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, email, password, role: "620f35aa44ccdc8ede3e90df" })
        });

        const json = await response.json();
        console.log(json);

        if (json.register) {
            alert("You are register")
            navigate('/signin')
        } else {
            alert("invalid Credential")
        }

    }

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
     



            <div className="container-fluid UserLogin" >


                <section className="side">
                    <img src={image1} alt="sdf" />
                </section>

                <section className="main">
                    <div className="login-container">
                        <p className="title">Register Here</p>
                        <div className="separator"></div>
                        <p className="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="user-form-control">
                                <input type="text" placeholder="FullName" onChange={onchange} id="firstName" name='firstName' />
                                <i className="fa-solid fa-user"></i>
                            </div>

                            <div className="user-form-control">
                                <input type="email" placeholder="Email" onChange={onchange} id="email" name='email' />
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <div className="user-form-control">
                                <input type="password" placeholder="Password" onChange={onchange} id="password" name='password' />
                                <i className="fas fa-lock"></i>
                            </div>
                             <div className="user-form-control">
                                <input className="form-control" type="text" onChange={onchange} id="role" name='role' placeholder="You are Register as a user" aria-label="Disabled input example" disabled />
                                {/* <i className="fas fa-lock"></i> */}
                                <i className="fa-solid fa-user"></i>

                            </div> 

                           

                            <button type='submit' className="submit">Register</button>
                        </form>

                        
                    </div>
                </section>

            </div>

 





    )
}
