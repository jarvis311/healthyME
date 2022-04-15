import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CatagoryFetch = () => {

    const [catid, setCatid] = useState('')
    const [catagory, setcatagory] = useState([])
    const getCategories = async (e) => {
        
        await axios.get('http://localhost:5000/getcatagory').then((res)=>{
            setcatagory(res.data.data)
            setCatid(e.target.value)
        })
    }
    useEffect(() => {
        getCategories()
        return () => {   
        }
    }, [])
  
      console.log(catid);

  return (
    <div>
              <select className='text-center' onChange = {(e)=> {getCategories(e)}}>

                        {
                                catagory.map((cat)=>{ 
                                    return (
                                        <>
                                        <option value = {cat._id}> {cat.CatagoryName} </option>
                                         </>
                                    )
                                })
                        }
                        
                    </select>

    </div>
  )
}
