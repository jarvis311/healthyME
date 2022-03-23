import React, { useEffect, useState } from 'react'
import { AdminDashbord } from './AdminDashbord'

export const DashBoard = () => {

    const [email, setemail] = useState('')
   
    
    useEffect(() => {
      
        setemail(localStorage.getItem('abcd'))  
        
    },[] )
  
  return (
    <div>
        
  {
    email ? <>{<AdminDashbord/>}</> : <h1>please login first</h1>   
  } 
    </div>
  )
}
