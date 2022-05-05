
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ErrorPage } from './ErrorPage'



export const AdminPanal = () => {
  const [email, setemail] = useState('')

  useEffect(() => {

    setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')

  }, [])

  return (
    <div>
        {
        email ? <>


      <div className='adminpanal parent'>

            <AdminpanalContainer>
              <div id="mySidenav" className="sidenav">
                <p className="logo"><span>HEALTY</span>-ME</p>
                {/* <a href="#" className="icon-a"><i className="fa fa-dashboard icons"></i>Dashboard </a> */}
                <Link to="/getAllUserAdminpanal" className="icon-a"><i className="fa fa-users icons"></i> Get All User </Link>
                <Link className="icon-a" to="/form"><i className="fa fa-plus icons"></i>Add Product</Link>
                {/* <Link className="icon-a" to="/about"><i className="fa fa-users icons"></i>About</Link> */}
                <Link className="icon-a" to="/addblog"><i className="fa fa-users icons"></i>Add Blog</Link>
                <Link className="icon-a" to="/createAdmin"><i className="fa fa-users icons"></i>Admin Create</Link>
                <Link className="icon-a" to="/catagory"><i className="fa fa-users icons"></i>Create Product Catagory</Link>
                <Link className="icon-a" to="/approval"><i className="fa fa-users icons"></i>Product Request</Link>
                <Link className="icon-a" to="/getproduct"><i className="fa fa-users icons"></i>GetAll Product</Link>
                {/* <a href="#" className="icon-a"><i className="fa fa-list icons"></i> Projects</a>
                     <a href="#" className="icon-a"><i className="fa fa-shopping-bag icons"></i>Orders</a>
                     <a href="#" className="icon-a"><i className="fa fa-tasks icons"></i>Inventory</a>
                     <a href="#" className="icon-a"><i className="fa fa-user icons"></i>Accounts</a>
                     <a href="#" className="icon-a"><i className="fa fa-list-alt icons"></i>Tasks</a> */}
              </div>
            </AdminpanalContainer>




      </div>
          </> : <h1><ErrorPage /></h1>
        }

    </div>
  )
}

const AdminpanalContainer = styled.div
  `
  body{
	margin:0px;
	padding: 0px;
	overflow: hidden;
	font-family: ;
    
}
.clearfix{
	clear: both;
}
.logo{
	margin: 0px;
	margin-left: 28px;
    font-weight: bold;
    color: white;
    margin-bottom: 30px;
}
.logo span{
	color: #f7403b;
}
.sidenav {
  height: 200%;
  width: 20%;
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #272c4a;
  overflow: hidden;
  transition: 0.5s;
  padding-top: 30px;
}
.sidenav a {
  padding: 15px 8px 15px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a i{
    color:white;
    margin:5px;
}
.sidenav a:hover {
  color: #f1f1f1;
  background-color:#1b203d;
}
.sidenav{
  position: absolute;
  right: 25px;
  font-size: 36px;
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(126deg);
  }
}
.circle-wrap .inside-circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}
  `