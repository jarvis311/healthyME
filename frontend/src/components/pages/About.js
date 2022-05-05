import React, { useEffect, useState } from 'react'
import { AdminPanal } from './AdminPanal'
import { ErrorPage } from './ErrorPage';
export const About = () => {
  const [email, setemail] = useState('')

  useEffect(() => {
    
      setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')  
      
  },[] )
  return (
    <div>
      {
        email ? <>
         <AdminPanal />
            <div className='mainPanalContaine'>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus iure voluptates deserunt soluta, tempora nemo eveniet iste amet delectus!</p>
            </div>
        </> : <><ErrorPage/></>
      }
          
    </div>
 )
}
