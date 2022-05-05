import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  // const navigate = useNavigate();
  // const logout = () => {
  //   setemail(localStorage.clear(email))
  //   window.location.reload();
  //   navigate('/')
  // }
  const [useremail, setUseremail] = useState('')
  const [email, setemail] = useState('')
  // useEffect(() => {
  //   setemail(localStorage.getItem('abcd'))
  // }, [])
  useEffect(() => {
    if (localStorage.getItem('Role') === 'admin') {
      setemail(localStorage.getItem('abcd'))
    } else {
      setemail(null)
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('Role') === 'customer') {
      setUseremail(localStorage.getItem('abcd'))
    } else {
      setUseremail(null)
    }
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand" to='/'>HealthyME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>
              </li>
              {
                useremail ? <> <li className="nav-item">
              <Link className="nav-link" to="/dashbord">AddProduct</Link>
              </li></> : ''
                }
              

              {
                email ? <> <li className="nav-item">
                  <Link className="nav-link" to="/adminpanal">AdminPanal</Link>
                </li></> : ''
              }

            <li class="nav-item dropdown blogAction">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More...
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to='/getblog'>Read Blog</Link></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            {/* <span className="nav-link navUserName">{email ? <span>{email.split('@',[1])}</span> : <span>login</span>}  </span> */}

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
