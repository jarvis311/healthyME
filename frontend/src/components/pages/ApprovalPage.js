import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";

export const ApprovalPage = () => {
    const navigate = useNavigate()
    var _id = useParams()._id;    
    axios.put(`http://localhost:5000/approve/${_id}`)
   .then(res=>{
       console.log(res.data); 
        setTimeout(() => {
        navigate('/approval')  
        }, 1500);
   })  
   let [loading, setLoading] = useState(false);
   useEffect(() => {
       setLoading(true)
       setTimeout(() => {
           setLoading(false)
           
       }, 3000);
     return () => {
   
     }
   }, [])
   let color = "red"
  return (
    <div>
        {
                loading ? <div className='loader'><FadeLoader color={color}/></div> : <> </>
        }
    </div>
  )
}
