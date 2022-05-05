import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteCatagory = () => {
    const navigate = useNavigate();
    var _id = useParams()._id;
    useEffect(() => {
      
        axios.delete(`http://localhost:5000/catagory/${_id}`).then(res=>{
            toast("You catagory delete")
            
        })
        axios.get(`http://localhost:5000/getcatagory`).then(res=>{
          console.log(res.data);
          setTimeout(() => {
            navigate('/catagory') 
          }, 2000);
        })
    },)

  return (
    <div>
        <ToastContainer/>
        
    </div>
  )
}
