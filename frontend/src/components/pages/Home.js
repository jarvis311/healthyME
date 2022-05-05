import React, { useEffect, useState } from 'react';
import { FetchProduct } from './FetchProduct';





const Home = () => {
    // const [email, setemail] = useState('')
   
    
    // useEffect(() => {
      
    //     setemail(localStorage.getItem('abcd'))  
        
    // },[] )

    return (
        <>
            {/* {
                
                email ? <div>{email}{}</div> : <h1>please login first</h1>   
            }  */}
             <FetchProduct/> 
             
             
          
        </>
    )
}

export default Home