import React, { useEffect, useState } from 'react'
import { AdminDashbord } from './AdminDashbord'
// import img from '../Authantication/image/Login_Required.png'
export const DashBoard = () => {

    const [email, setemail] = useState('')
   
    
    useEffect(() => {
      
        setemail(localStorage.getItem('abcd'))  
        
    },[] )
  
  return (
    <div>
        
  {
    email ? <>{<AdminDashbord/>}</> : <h1>Please Login First</h1>
    
    
    // <div>
    //   <img className='loginRequire' src={img} alt="asd" />
    // </div>   
  } 
    </div>
  )
}
