import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteUSer = () => {
const navigate = useNavigate()
    var _id = useParams()._id;
    useEffect(() => {
      
        axios.delete(`http://localhost:5000/deleteusers/${_id}`).then(res=>{
            toast("You User Are delete")           
        })
        axios.get(`http://localhost:5000/getuser`).then(res=>{
          console.log(res.data);
          setTimeout(() => {
              navigate('/getAllUserAdminpanal') 
          }, 2000);
        })
    },)



  return (
    <div>
        <ToastContainer/>
    </div>
  )
}
