import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const logout = () => {
    setemail(localStorage.clear(email))
  }

  const [email, setemail] = useState('')
  useEffect(() => {
    setemail(localStorage.getItem('abcd'))
  }, [])


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <Link className="navbar-brand" to='/'>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashbord">Dashbord</Link>
              </li>
              <li className="nav-item">
                <span onClick={logout} className="nav-link">Logout</span>
              </li>
            </ul>
            <span className="nav-link navUserName">{email ? <span>{email.split('@',[1])}</span> : <span>login</span>}  </span>

          </div>
        </div>
      </nav>

    </div>
  )
}
