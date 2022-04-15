import React, { useEffect, useState } from 'react'
import { AddProduct } from './AddProduct'
// import img from '../Authantication/image/Login_Required.png'
export const DashBoard = () => {

    const [email, setemail] = useState('')
   
    
    useEffect(() => {
      
        setemail(localStorage.getItem('abcd'))  
        
    },[] )
  
  return (
    <div>
        
  {
    email ? <>{<AddProduct/>}</> : <h1>Please Login First</h1>
    
    
    // <div>
    //   <img className='loginRequire' src={img} alt="asd" />
    // </div>   
  } 
    </div>
  )
}
