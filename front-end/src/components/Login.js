import React, { useState } from 'react'

const Login = () => {

    const [credantial, setCredantial] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: credantial.email, password: credantial.password })

        });
        const json = await response.json()
        console.log(json);
    }

    const onChange = (e) => {
        setCredantial({ ...credantial, [e.target.name]: e.target.value })

    }


    return (
        <div>
            <form className='col-md-4' method='POST'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={onChange} className="form-control" value={credantial.email} id="email" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' onChange={onChange} className="form-control" value={credantial.password} id="password" />
                </div>

                <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login