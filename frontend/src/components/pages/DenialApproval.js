import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const DenialApproval = () => {
    const navigate = useNavigate();
    var _id = useParams()._id;
    useEffect(() => {
      
        axios.delete(`http://localhost:5000/product/${_id}`).then(res=>{
            toast("You Product Are delete")    
        })
        axios.get(`http://localhost:5000/getproduct`).then(res=>{
          console.log(res.data);
          setTimeout(() => {
            navigate('/approval') 
          }, 2000);
        })
    },)

    let [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)    
        }, 2000);
      return () => {
    
      }
    }, [])
    let color = "red"
  return (
    <div>
          {
                loading ? <div className='loader'><FadeLoader color={color}/> <ToastContainer/></div> : <> </>
          }
    </div>
  )
}
