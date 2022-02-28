import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from '../image/img2.svg'
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
            body: JSON.stringify({ firstName, email, password, role })
        });

        const json = await response.json();
        console.log(json);

        if(json.suceess){
            navigate('/signin')
        }

    }

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <div>

            {/* <form onSubmit={handleSubmit} className="col-md-4 my-5 container">
                <div>
                    <h1>Register Here</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Name</label>
                    <input type="text" className="user-form-control" onChange={onchange} id="firstName" name='firstName' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="user-form-control" onChange={onchange} id="email" name='email' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="user-form-control" onChange={onchange} id="password" name='password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <input type="text" className="user-form-control" onChange={onchange} id="role" name='role' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}


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
                                <input type="text" placeholder="Role" onChange={onchange} id="role" name='role' />
                                <i className="fas fa-lock"></i>
                            </div>

                            <button type='submit' className="submit">Register</button>
                        </form>
                    </div>
                </section>

            </div>

        </div>





    )
}
