import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const DeleteProduct = () => {
  const navigate = useNavigate();
    var _id = useParams()._id;
    useEffect(() => {
      
        axios.delete(`http://localhost:5000/product/${_id}`).then(res=>{
            toast("You Product Are delete")
            
        })
        axios.get(`http://localhost:5000/getproduct`).then(res=>{
          console.log(res.data);
          setTimeout(() => {
            navigate('/') 
          }, 2000);
        })
    },)
  return (
    <div>
        <ToastContainer/>
    </div>
  )
}
